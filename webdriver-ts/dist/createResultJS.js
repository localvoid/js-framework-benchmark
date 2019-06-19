"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const common_1 = require("./common");
const benchmarks_1 = require("./benchmarks");
async function main() {
    let frameworks = await common_1.initializeFrameworks();
    let results = new Map();
    let resultJS = "import {RawResult} from './Common';\n\nexport let results: RawResult[]=[";
    let allBenchmarks = [];
    benchmarks_1.benchmarks.forEach((benchmark, bIdx) => {
        let r = benchmark.resultKinds ? benchmark.resultKinds() : [benchmark];
        r.forEach((benchmarkInfo) => {
            allBenchmarks.push(benchmarkInfo);
        });
    });
    frameworks.forEach((framework, fIdx) => {
        allBenchmarks.forEach((benchmarkInfo) => {
            let name = `${benchmarks_1.fileName(framework, benchmarkInfo)}`;
            let file = './results/' + name;
            if (fs.existsSync(file)) {
                let data = JSON.parse(fs.readFileSync(file, {
                    encoding: 'utf-8'
                }));
                if (data.values.some(v => v == null))
                    console.log(`Found null value for ${framework.fullNameWithKeyedAndVersion} and benchmark ${benchmarkInfo.id}`);
                resultJS += '\n' + JSON.stringify(({ f: data.framework, b: data.benchmark, v: data.values.filter(v => v != null) })) + ',';
            }
            else {
                console.log("MISSING FILE", file);
            }
        });
    });
    resultJS += '];\n';
    resultJS += 'export let frameworks = ' + JSON.stringify(frameworks.map(f => ({ name: f.fullNameWithKeyedAndVersion, keyed: f.keyed }))) + ";\n";
    resultJS += 'export let benchmarks = ' + JSON.stringify(allBenchmarks) + ";\n";
    fs.writeFileSync('../webdriver-ts-results/src/results.ts', resultJS, { encoding: 'utf-8' });
}
main();
//# sourceMappingURL=createResultJS.js.map