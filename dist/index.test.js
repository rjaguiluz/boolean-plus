"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('AND', () => {
    it('should return true when given two true values', () => {
        const result = (0, index_1.AND)(true, true);
        expect(result).toEqual(true);
    });
    it('should return true when given three true values', () => {
        const expression = [true, true, true];
        const result = (0, index_1.AND)(...expression);
        expect(result).toBe(true);
    });
    it('should return true when there is only one true value in the expression', () => {
        expect((0, index_1.AND)(true)).toBe(true);
    });
    it('should return false when there is at least one false value in the expression', () => {
        expect((0, index_1.AND)(true, true, false)).toBe(false);
        expect((0, index_1.AND)(true, false, true)).toBe(false);
        expect((0, index_1.AND)(false, true, true)).toBe(false);
        expect((0, index_1.AND)(false, false, false)).toBe(false);
    });
    it('should return true when all values are true', () => {
        const result = (0, index_1.AND)(true, true, true, true, true);
        expect(result).toBe(true);
    });
    it('should return false when there are multiple false values', () => {
        expect((0, index_1.AND)(false, false, false)).toBe(false);
        expect((0, index_1.AND)(false, true, false)).toBe(false);
        expect((0, index_1.AND)(true, false, false)).toBe(false);
        expect((0, index_1.AND)(false, false, true)).toBe(false);
        expect((0, index_1.AND)(false, true, true)).toBe(false);
        expect((0, index_1.AND)(true, false, true)).toBe(false);
        expect((0, index_1.AND)(true, true, false)).toBe(false);
    });
    it('should return true when all input values are true', () => {
        expect((0, index_1.AND)(true, true, true)).toBe(true);
        expect((0, index_1.AND)(true, true, false)).toBe(false);
        expect((0, index_1.AND)(false, true, true)).toBe(false);
        expect((0, index_1.AND)(true, false, true)).toBe(false);
        expect((0, index_1.AND)(false, false, false)).toBe(false);
    });
    it('should return true when all input values are true', () => {
        expect((0, index_1.AND)(true, true, true)).toBe(true);
        expect((0, index_1.AND)(true, true, false)).toBe(false);
        expect((0, index_1.AND)(true, false, true)).toBe(false);
        expect((0, index_1.AND)(false, true, true)).toBe(false);
        expect((0, index_1.AND)(false, false, false)).toBe(false);
    });
});
describe('NAND', () => {
    it('should return true when all inputs are false', () => {
        expect((0, index_1.NAND)(false, false)).toBe(true);
        expect((0, index_1.NAND)(false, false, false)).toBe(true);
        expect((0, index_1.NAND)(false, false, false, false)).toBe(true);
    });
    it('should return false when at least one input is true', () => {
        expect((0, index_1.NAND)(true, true)).toBe(false);
    });
    it('should return true when given one input that is true', () => {
        expect((0, index_1.NAND)(false)).toBe(true);
        expect((0, index_1.NAND)(true, false)).toBe(true);
        expect((0, index_1.NAND)(false, true)).toBe(true);
        expect((0, index_1.NAND)(true, true)).toBe(false);
    });
    it('should return true when given one false input', () => {
        expect((0, index_1.NAND)(false)).toBe(true);
        expect((0, index_1.NAND)(true)).toBe(false);
        expect((0, index_1.NAND)(false, true)).toBe(true);
        expect((0, index_1.NAND)(true, false)).toBe(true);
        expect((0, index_1.NAND)(false, false)).toBe(true);
        expect((0, index_1.NAND)(true, true)).toBe(false);
    });
    it('should return false when given only true inputs', () => {
        expect((0, index_1.NAND)(true)).toBe(false);
        expect((0, index_1.NAND)(true, true)).toBe(false);
        expect((0, index_1.NAND)(true, true, true)).toBe(false);
    });
    it('should return the correct result when given any number of inputs', () => {
        expect((0, index_1.NAND)(true)).toBe(false);
        expect((0, index_1.NAND)(false)).toBe(true);
        expect((0, index_1.NAND)(true, true)).toBe(false);
        expect((0, index_1.NAND)(true, false)).toBe(true);
        expect((0, index_1.NAND)(false, true)).toBe(true);
        expect((0, index_1.NAND)(false, false)).toBe(true);
        expect((0, index_1.NAND)(true, true, true)).toBe(false);
        expect((0, index_1.NAND)(true, true, false)).toBe(true);
        expect((0, index_1.NAND)(true, false, true)).toBe(true);
        expect((0, index_1.NAND)(true, false, false)).toBe(true);
        expect((0, index_1.NAND)(false, true, true)).toBe(true);
        expect((0, index_1.NAND)(false, true, false)).toBe(true);
        expect((0, index_1.NAND)(false, false, true)).toBe(true);
        expect((0, index_1.NAND)(false, false, false)).toBe(true);
    });
    it('should return true when given only false inputs', () => {
        expect((0, index_1.NAND)(false, false, false)).toBe(true);
        expect((0, index_1.NAND)(false, false)).toBe(true);
        expect((0, index_1.NAND)(false)).toBe(true);
    });
    it('should return true when given undefined inputs', () => {
        expect((0, index_1.NAND)(undefined)).toBe(true);
        expect((0, index_1.NAND)(undefined, undefined)).toBe(true);
        expect((0, index_1.NAND)(undefined, undefined, undefined)).toBe(true);
    });
});
describe('OR', () => {
    it('should return true when given two true values', () => {
        expect((0, index_1.OR)(true, true)).toBe(true);
    });
    it('should return true when there are multiple true values', () => {
        expect((0, index_1.OR)(true, true, true)).toBe(true);
    });
    it('should return true when at least one boolean value is true', () => {
        expect((0, index_1.OR)(true, false, false)).toBe(true);
        expect((0, index_1.OR)(false, true, false)).toBe(true);
        expect((0, index_1.OR)(false, false, true)).toBe(true);
        expect((0, index_1.OR)(true, true, false)).toBe(true);
        expect((0, index_1.OR)(true, false, true)).toBe(true);
        expect((0, index_1.OR)(false, true, true)).toBe(true);
        expect((0, index_1.OR)(true, true, true)).toBe(true);
        expect((0, index_1.OR)(false, false, false)).toBe(false);
    });
});
describe('NOR', () => {
    it('should return true when both input expressions are false', () => {
        expect((0, index_1.NOR)(false, false)).toBe(true);
    });
    it('should return false when given false and true', () => {
        expect((0, index_1.NOR)(false, true)).toBe(false);
    });
    it('should return false when given true and false', () => {
        expect((0, index_1.NOR)(true, false)).toBe(false);
    });
    it('should return false when both input expressions are true', () => {
        expect((0, index_1.NOR)(true, true)).toBe(false);
    });
    it('should return true when NOR() is called', () => {
        expect((0, index_1.NOR)()).toBe(true);
    });
    it('should return true when input is false', () => {
        expect((0, index_1.NOR)(false)).toBe(true);
    });
    it('should return false when input is true', () => {
        expect((0, index_1.NOR)(true)).toBe(false);
    });
});
describe('XOR', () => {
    it('should return false when given two false values', () => {
        expect((0, index_1.XOR)(false, false)).toBe(false);
    });
    it('should return true when there is exactly one true value in the expression array', () => {
        expect((0, index_1.XOR)(true, false)).toBe(true);
    });
    it('should return false when given three false values', () => {
        expect((0, index_1.XOR)(false, false, false)).toBe(false);
    });
    it('should return false when given an empty input', () => {
        expect((0, index_1.XOR)()).toBe(false);
    });
    it('should return true when the input value is true', () => {
        expect((0, index_1.XOR)(true)).toBe(true);
    });
    it('should return false when all input values are false', () => {
        expect((0, index_1.XOR)(false, false, false)).toBe(false);
    });
    it('should return false when all input values are true', () => {
        expect((0, index_1.XOR)(true, true, true)).toBe(false);
    });
    it('should return true when there is exactly one true value in the input', () => {
        const input = Array.from({ length: 10000 }, () => Math.random() < 0.5);
        const result = (0, index_1.XOR)(...input);
        const trueCount = input.filter((value) => value === true).length;
        expect(result).toBe(trueCount === 1);
    });
    it('should return true when there is exactly one true value in the input array', () => {
        expect((0, index_1.XOR)(true)).toBe(true);
        expect((0, index_1.XOR)(false)).toBe(false);
        expect((0, index_1.XOR)(true, false)).toBe(true);
        expect((0, index_1.XOR)(false, false)).toBe(false);
        expect((0, index_1.XOR)(true, true)).toBe(false);
        expect((0, index_1.XOR)(true, false, true)).toBe(false);
        expect((0, index_1.XOR)(true, false, false)).toBe(true);
        expect((0, index_1.XOR)(true, true, true)).toBe(false);
    });
    it('should return false when input values are null or undefined', () => {
        expect((0, index_1.XOR)(null)).toBe(false);
        expect((0, index_1.XOR)(undefined)).toBe(false);
        expect((0, index_1.XOR)(null, null)).toBe(false);
        expect((0, index_1.XOR)(undefined, undefined)).toBe(false);
        expect((0, index_1.XOR)(null, undefined)).toBe(false);
        expect((0, index_1.XOR)(undefined, null)).toBe(false);
    });
});
describe('XNOR', () => {
    it('should return true when both input parameters are true', () => {
        expect((0, index_1.XNOR)(true, true)).toBe(true);
    });
    it('should return true when both input values are false', () => {
        expect((0, index_1.XNOR)(false, false)).toBe(true);
    });
    it('should return false when given true and false', () => {
        expect((0, index_1.XNOR)(true, false)).toBe(false);
    });
    it('should return false when given false and true as arguments', () => {
        expect((0, index_1.XNOR)(false, true)).toBe(false);
    });
    it('should return true when both arguments are null', () => {
        expect((0, index_1.XNOR)(null, null)).toBe(true);
    });
    it('should return true when both arguments are undefined', () => {
        expect((0, index_1.XNOR)(undefined, undefined)).toBe(true);
    });
    it('should return false when input is true and null', () => {
        expect((0, index_1.XNOR)(true, null)).toBe(false);
    });
});
describe('NOT', () => {
    it('should return an array of negated boolean values when a single true value is passed as input', () => {
        const result = (0, index_1.NOT)(true);
        expect(result).toEqual([false]);
    });
    it('should correctly negate each boolean value in the input expression array', () => {
        const expression = [true, false, true, false];
        const result = (0, index_1.NOT)(...expression);
        expect(result).toEqual([false, true, false, true]);
    });
});
//# sourceMappingURL=index.test.js.map