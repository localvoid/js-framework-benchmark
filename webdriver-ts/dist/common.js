"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const axios_1 = require("axios");
exports.config = {
    PORT: 8080,
    REMOTE_DEBUGGING_PORT: 9999,
    CHROME_PORT: 9998,
    REPEAT_RUN: 10,
    REPEAT_RUN_MEM: 5,
    REPEAT_RUN_STARTUP: 4,
    DROP_WORST_RUN: 0,
    WARMUP_COUNT: 5,
    TIMEOUT: 60 * 1000,
    LOG_PROGRESS: true,
    LOG_DETAILS: false,
    LOG_DEBUG: false,
    LOG_TIMELINE: false,
    EXIT_ON_ERROR: false,
    STARTUP_DURATION_FROM_EVENTLOG: true,
    STARTUP_SLEEP_DURATION: 1000,
    FORK_CHROMEDRIVER: true,
    WRITE_RESULTS: true
};
function computeHash(keyedType, directory) {
    return keyedType + '/' + directory;
}
class FrameworkVersionInformationValid {
    constructor(keyedType, directory, customURL, useShadowRoot) {
        this.keyedType = keyedType;
        this.directory = directory;
        this.useShadowRoot = useShadowRoot;
        this.keyedType = keyedType;
        this.directory = directory;
        this.url = 'frameworks/' + keyedType + '/' + directory + (customURL ? customURL : '');
    }
}
class FrameworkVersionInformationDynamic extends FrameworkVersionInformationValid {
    constructor(keyedType, directory, packageNames, customURL, useShadowRoot = false) {
        super(keyedType, directory, customURL, useShadowRoot);
        this.packageNames = packageNames;
    }
}
exports.FrameworkVersionInformationDynamic = FrameworkVersionInformationDynamic;
class FrameworkVersionInformationStatic extends FrameworkVersionInformationValid {
    constructor(keyedType, directory, frameworkVersion, customURL, useShadowRoot = false) {
        super(keyedType, directory, customURL, useShadowRoot);
        this.frameworkVersion = frameworkVersion;
    }
    getFrameworkData() {
        return { name: this.directory,
            fullNameWithKeyedAndVersion: this.directory + (this.frameworkVersion ? '-v' + this.frameworkVersion : '') + '-' + this.keyedType,
            uri: this.url,
            keyed: this.keyedType === 'keyed',
            useShadowRoot: this.useShadowRoot
        };
    }
}
exports.FrameworkVersionInformationStatic = FrameworkVersionInformationStatic;
class FrameworkVersionInformationError {
    constructor(keyedType, directory, error) {
        this.keyedType = keyedType;
        this.directory = directory;
        this.error = error;
    }
}
exports.FrameworkVersionInformationError = FrameworkVersionInformationError;
class PackageVersionInformationValid {
    constructor(packageName, version) {
        this.packageName = packageName;
        this.version = version;
    }
}
exports.PackageVersionInformationValid = PackageVersionInformationValid;
class PackageVersionInformationErrorUnknownPackage {
    constructor(packageName) {
        this.packageName = packageName;
    }
}
exports.PackageVersionInformationErrorUnknownPackage = PackageVersionInformationErrorUnknownPackage;
class PackageVersionInformationErrorNoPackageJSONLock {
    constructor() { }
}
exports.PackageVersionInformationErrorNoPackageJSONLock = PackageVersionInformationErrorNoPackageJSONLock;
const matchAll = (frameworkDirectory) => true;
function loadFrameworkVersionInformation(matchPredicate = matchAll) {
    let result = new Array();
    let frameworksPath = path.resolve('..', 'frameworks');
    ['keyed', 'non-keyed'].forEach((keyedType) => {
        let directories = fs.readdirSync(path.resolve(frameworksPath, keyedType));
        for (let directory of directories) {
            let frameworkPath = path.join(keyedType, directory);
            if (matchPredicate(frameworkPath)) {
                let packageJSONPath = path.resolve(frameworksPath, frameworkPath, 'package.json');
                if (fs.existsSync(packageJSONPath)) {
                    let packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, 'utf8'));
                    if (packageJSON['js-framework-benchmark']) {
                        if (packageJSON['js-framework-benchmark']['frameworkVersionFromPackage']) {
                            result.push(new FrameworkVersionInformationDynamic(keyedType, directory, packageJSON['js-framework-benchmark']['frameworkVersionFromPackage'].split(':'), packageJSON['js-framework-benchmark']['customURL'], packageJSON['js-framework-benchmark']['useShadowRoot']));
                        }
                        else if (typeof packageJSON['js-framework-benchmark']['frameworkVersion'] === 'string') {
                            result.push(new FrameworkVersionInformationStatic(keyedType, directory, packageJSON['js-framework-benchmark']['frameworkVersion'], packageJSON['js-framework-benchmark']['customURL'], packageJSON['js-framework-benchmark']['useShadowRoot']));
                        }
                        else {
                            result.push(new FrameworkVersionInformationError(keyedType, directory, 'package.json must contain a \'frameworkVersionFromPackage\' or \'frameworkVersion\' in the \'js-framework-benchmark\'.property'));
                        }
                    }
                    else {
                        result.push(new FrameworkVersionInformationError(keyedType, directory, 'package.json must contain a \'js-framework-benchmark\' property'));
                    }
                }
                else {
                    result.push(new FrameworkVersionInformationError(keyedType, directory, 'No package.json found'));
                }
            }
        }
    });
    return result;
}
exports.loadFrameworkVersionInformation = loadFrameworkVersionInformation;
class PackageVersionInformationResult {
    constructor(framework) {
        this.framework = framework;
        this.versions = [];
    }
    add(packageVersionInformation) {
        this.versions.push(packageVersionInformation);
    }
    getVersionName() {
        if (this.versions.filter(pi => pi instanceof PackageVersionInformationErrorNoPackageJSONLock).length > 0) {
            return "invalid (no package-lock)";
        }
        return this.versions.map(version => (version instanceof PackageVersionInformationValid) ? version.version : 'invalid').join(' + ');
    }
    getFrameworkData() {
        return { name: this.framework.directory,
            fullNameWithKeyedAndVersion: this.framework.directory + '-v' + this.getVersionName() + '-' + this.framework.keyedType,
            uri: this.framework.url,
            keyed: this.framework.keyedType === 'keyed',
            useShadowRoot: this.framework.useShadowRoot
        };
    }
}
exports.PackageVersionInformationResult = PackageVersionInformationResult;
async function determineInstalledVersions(framework) {
    let versions = new PackageVersionInformationResult(framework);
    try {
        console.log(`http://localhost:${exports.config.PORT}/frameworks/${framework.keyedType}/${framework.directory}/package-lock.json`);
        let packageLock = (await axios_1.default.get(`http://localhost:${exports.config.PORT}/frameworks/${framework.keyedType}/${framework.directory}/package-lock.json`)).data;
        for (let packageName of framework.packageNames) {
            if (packageLock.dependencies[packageName]) {
                versions.add(new PackageVersionInformationValid(packageName, packageLock.dependencies[packageName].version));
            }
            else {
                versions.add(new PackageVersionInformationErrorUnknownPackage(packageName));
            }
        }
    }
    catch (err) {
        if (err.errno === 'ECONNREFUSED') {
            console.log("Can't load package-lock.json via http. Make sure the http-server is running on port 8080");
            throw "Can't load package-lock.json via http. Make sure the http-server is running on port 8080";
        }
        else if (err.response && err.response.status === 404) {
            console.log(`package-lock.json not found for ${framework.keyedType}/${framework.directory}`);
            versions.add(new PackageVersionInformationErrorNoPackageJSONLock());
        }
        else {
            console.log("err", err);
            versions.add(new PackageVersionInformationErrorNoPackageJSONLock());
        }
    }
    return versions;
}
exports.determineInstalledVersions = determineInstalledVersions;
async function initializeFrameworks(matchPredicate = matchAll) {
    let frameworkVersionInformations = loadFrameworkVersionInformation(matchPredicate);
    let frameworks = [];
    for (let frameworkVersionInformation of frameworkVersionInformations) {
        if (frameworkVersionInformation instanceof FrameworkVersionInformationDynamic) {
            frameworks.push((await determineInstalledVersions(frameworkVersionInformation)).getFrameworkData());
        }
        else if (frameworkVersionInformation instanceof FrameworkVersionInformationStatic) {
            frameworks.push(frameworkVersionInformation.getFrameworkData());
        }
        else {
            console.log(`WARNING: Ignoring package ${frameworkVersionInformation.keyedType}/${frameworkVersionInformation.directory}: ${frameworkVersionInformation.error}`);
            frameworks.push(null);
        }
    }
    frameworks = frameworks.filter(f => f !== null);
    if (exports.config.LOG_DETAILS) {
        console.log("All available frameworks: ");
        console.log(frameworks.map(fd => fd.fullNameWithKeyedAndVersion));
    }
    return frameworks;
}
exports.initializeFrameworks = initializeFrameworks;
//# sourceMappingURL=common.js.map