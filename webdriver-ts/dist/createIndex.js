"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const common_1 = require("./common");
async function main() {
    let frameworks = await common_1.initializeFrameworks();
    frameworks.sort((a, b) => a.fullNameWithKeyedAndVersion.localeCompare(b.fullNameWithKeyedAndVersion));
    const dots = require('dot').process({
        path: './'
    });
    fs.writeFileSync('../index.html', dots.index({
        frameworks
    }), {
        encoding: 'utf8'
    });
}
main();
//# sourceMappingURL=createIndex.js.map