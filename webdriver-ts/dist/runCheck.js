"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const benchmarks_1 = require("./benchmarks");
const common_1 = require("./common");
let frameworks = common_1.initializeFrameworks();
const dots = require('dot').process({
    path: './'
});
function parse(fileName) {
    return JSON.parse(fs.readFileSync(fileName, {
        encoding: 'utf-8'
    }));
}
class ResultCheck {
    constructor(result, styleClass, origTime, checkTime) {
        this.result = result;
        this.styleClass = styleClass;
        this.origTime = origTime;
        this.checkTime = checkTime;
    }
}
class CheckResultList {
    constructor(benchmark, tests) {
        this.tests = tests;
        this.name = benchmark.label;
        this.description = benchmark.description;
    }
}
function color(factor) {
    if (factor < 0.1) {
        let a = factor / 0.1;
        let r = (1.0 - a) * 99 + a * 255;
        let g = (1.0 - a) * 191 + a * 236;
        let b = (1.0 - a) * 124 + a * 132;
        return `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
    }
    else {
        let a = Math.min(factor - 0.1, 1.0);
        let r = (1.0 - a) * 255 + a * 249;
        let g = (1.0 - a) * 236 + a * 105;
        let b = (1.0 - a) * 132 + a * 108;
        return `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
    }
}
let resultRow = [];
for (let i = 0; i < benchmarks_1.benchmarks.length; i++) {
    let benchmark = benchmarks_1.benchmarks[i];
    let row = [];
    for (let j = 0; j < frameworks.length; j++) {
        let framework = frameworks[j];
        let origRunName = `results/${benchmarks_1.fileName(framework, benchmark)}`;
        let checkRunName = `results_check/${benchmarks_1.fileName(framework, benchmark)}`;
        if (fs.existsSync(origRunName) && fs.existsSync(checkRunName)) {
            let origRun = parse(origRunName);
            let checkRun = parse(checkRunName);
            let difference = (checkRun.mean - origRun.mean) / ((origRun.mean + checkRun.mean) * 0.5);
            console.log("both files exist for ", framework.name, benchmark.id, difference, origRun.mean, checkRun.mean);
            row.push(new ResultCheck((difference * 100).toFixed(1) + "%", color(Math.abs(difference)), origRun.mean.toFixed(0) + "±" + origRun.standardDeviation.toFixed(1), checkRun.mean.toFixed(0) + "±" + checkRun.standardDeviation.toFixed(1)));
        }
        else if (fs.existsSync(origRunName)) {
            row.push(new ResultCheck("no file in results_check", "#f00", "", ""));
        }
        else if (fs.existsSync(checkRunName)) {
            row.push(new ResultCheck("no file in results", "#f00", "", ""));
        }
        else {
            row.push(new ResultCheck("no file at all", "#f00", "", ""));
        }
    }
    resultRow.push(new CheckResultList(benchmark, row));
}
fs.writeFileSync('./check.html', dots.check({
    frameworks: frameworks.map(framework => framework.name.replace('-v', ' v')),
    resultRow,
}), {
    encoding: 'utf8'
});
//# sourceMappingURL=runCheck.js.map