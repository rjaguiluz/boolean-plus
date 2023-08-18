const parsingBoolean = (...expression: any) => {
    return expression.map((value) => ( value ?? false ));
};


/**
 * The function "AND" takes in multiple boolean values and returns true if all of them are true,
 * otherwise it returns false.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in multiple boolean values. It is represented by the spread operator `...` followed by the
 * parameter name `expression`. This means that you can pass in any number of boolean values as
 * arguments when calling the `AND` function.
 * @returns The function `AND` returns a boolean value.
 */
const AND = (...expression: boolean[]) : boolean => {
    return parsingBoolean(...expression).every((value) => value === true);
}

/**
 * The NAND function returns the negation of the AND function applied to a set of boolean expressions.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in any number of boolean values. These values represent the inputs to the NAND gate.
 * @returns the result of the logical NOT operation applied to the result of the AND operation on the
 * given expressions.
 */
const NAND = (...expression: boolean[]) : boolean => {
    return !AND(...expression);
}


/**
 * The OR function takes in multiple boolean expressions and returns true if at least one of the
 * expressions is true.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in multiple boolean values. It is represented by the spread operator `...` followed by the
 * parameter name `expression`. This means that you can pass in any number of boolean values as
 * arguments when calling the `OR` function.
 * @returns The OR function is returning a boolean value.
 */
const OR = (...expression: boolean[]) : boolean => {
    return parsingBoolean(...expression).some((value) => value === true);
}


/**
 * The NOR function returns true if none of the input expressions are true.
 * @param {boolean[]} expression - The parameter "expression" is a rest parameter that allows you to
 * pass in any number of boolean values.
 * @returns The NOR function returns the logical NOR (NOT OR) of the given boolean expressions.
 */
const NOR = (...expression: boolean[]) : boolean => {
    return !OR(...expression);
}


/**
 * The XOR function takes in multiple boolean values and returns true if exactly one of the values is
 * true, otherwise it returns false.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in any number of boolean values.
 * @returns The XOR function is returning a boolean value.
 */
const XOR = (...expression: boolean[]) : boolean => {
    return parsingBoolean(...expression).filter((value) => value === true).length === 1;
}


/**
 * The XNOR function returns true if an even number of arguments are true, and false otherwise.
 * @param {boolean[]} expression - The parameter "expression" is a rest parameter that allows you to
 * pass in any number of boolean values. These values represent the inputs to the XNOR gate.
 * @returns The XNOR function returns a boolean value.
 */
const XNOR = (...expression: boolean[]) : boolean => {
    return !XOR(...expression);
}


/**
 * The NOT function takes in a list of boolean expressions and returns a list of their negations.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in multiple boolean values. It is represented by the spread operator `...` followed by the
 * parameter name `expression`. This means that you can pass in any number of boolean values as
 * arguments to the `NOT` function.
 * @returns The `NOT` function returns an array of boolean values.
 */
const NOT = (...expression: boolean[]) : boolean[] => {
    return parsingBoolean(...expression).map((value) => !value);
}

export { AND, NAND, OR, NOR, XOR, XNOR, NOT };