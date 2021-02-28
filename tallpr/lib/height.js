"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeightAnalog = void 0;
var animals_1 = require("./animals");
// cmHeight heights are measured in cm.
var textLineHeightOnA4 = 0.4217517642175;
function getHeightAnalog(linesOfCode) {
    if (linesOfCode === 0) {
        throw new Error("0 is an invalid height for an analog");
    }
    var cmHeight = linesOfCode * textLineHeightOnA4;
    for (var i = 0; i < animals_1.animals.length; i++) {
        if (cmHeight < animals_1.animals[i].heightCm) {
            return animals_1.animals[i];
        }
    }
    return {
        conjunction: 'an',
        name: 'unladen swallow (this is an error in the bot :\)',
        heightCm: 0,
    };
}
exports.getHeightAnalog = getHeightAnalog;
//# sourceMappingURL=height.js.map