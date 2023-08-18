"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOT = exports.XNOR = exports.XOR = exports.NOR = exports.OR = exports.NAND = exports.AND = void 0;
const parsingBoolean = (...expression) => {
    return expression.map((value) => (value ?? false));
};
const AND = (...expression) => {
    return parsingBoolean(...expression).every((value) => value === true);
};
exports.AND = AND;
const NAND = (...expression) => {
    return !AND(...expression);
};
exports.NAND = NAND;
const OR = (...expression) => {
    return parsingBoolean(...expression).some((value) => value === true);
};
exports.OR = OR;
const NOR = (...expression) => {
    return !OR(...expression);
};
exports.NOR = NOR;
const XOR = (...expression) => {
    return parsingBoolean(...expression).filter((value) => value === true).length === 1;
};
exports.XOR = XOR;
const XNOR = (...expression) => {
    return !XOR(...expression);
};
exports.XNOR = XNOR;
const NOT = (...expression) => {
    return parsingBoolean(...expression).map((value) => !value);
};
exports.NOT = NOT;
//# sourceMappingURL=index.js.map