const parsingBoolean = (...expression: any) => {
    return expression.map((value) => ( value ?? false ));
};

/* The code is defining a function called `AND` that takes in multiple arguments using the rest
parameter syntax (`...expression`). The function checks if all the values in the `expression` array
are equal to `true` using the `every` method. If all the values are `true`, the function returns
`true`; otherwise, it returns `false`. 
*/
const AND = (...expression: boolean[]) => {
    return parsingBoolean(...expression).every((value) => value === true);
}

/* The `NAND` function is defining a logical operator called NAND (Not AND). It takes in multiple
arguments using the rest parameter syntax (`...expression`). Inside the function, it calls the `AND`
function with the spread operator (`...expression`) to check if all the values in the `expression`
array are equal to `true`. It then negates the result using the logical NOT operator (`!`) and
returns the opposite boolean value. So, if all the values in the `expression` array are `true`, the
`NAND` function will return `false`; otherwise, it will return `true`. */
const NAND = (...expression: boolean[]) => {
    return !AND(...expression);
}

/* The `OR` function is defining a logical operator called OR. It takes in multiple arguments using the
rest parameter syntax (`...expression`). Inside the function, it uses the `some` method to check if
at least one value in the `expression` array is equal to `true`. If there is at least one `true`
value, the function returns `true`; otherwise, it returns `false`. So, the `OR` function returns
`true` if any of the values in the `expression` array are `true`. */
const OR = (...expression: boolean[]) => {
    return parsingBoolean(...expression).some((value) => value === true);
}

/* The `NOR` function is defining a logical operator called NOR (Not OR). It takes in multiple
arguments using the rest parameter syntax (`...expression`). Inside the function, it calls the `OR`
function with the spread operator (`...expression`) to check if at least one value in the
`expression` array is equal to `true`. It then negates the result using the logical NOT operator
(`!`) and returns the opposite boolean value. So, if at least one value in the `expression` array is
`true`, the `NOR` function will return `false`; otherwise, it will return `true`. */
const NOR = (...expression: boolean[]) => {
    return !OR(...expression);
}

/* The `XOR` function is defining a logical operator called XOR (Exclusive OR). It takes in multiple
arguments using the rest parameter syntax (`...expression`). Inside the function, it filters the
`expression` array to only include values that are equal to `true`. Then, it checks if the length of
the filtered array is equal to `1`. If it is, it means that there is exactly one `true` value in the
`expression` array, and the function returns `true`. Otherwise, it returns `false`. So, the `XOR`
function returns `true` if and only if there is exactly one `true` value in the `expression` array. */
const XOR = (...expression: boolean[]) => {
    return parsingBoolean(...expression).filter((value) => value === true).length === 1;
}

/* The `XNOR` function is defining a logical operator called XNOR (Exclusive NOR). It takes in multiple
arguments using the rest parameter syntax (`...expression`). Inside the function, it calls the `XOR`
function with the spread operator (`...expression`) to check if there is exactly one `true` value in
the `expression` array. It then negates the result using the logical NOT operator (`!`) and returns
the opposite boolean value. So, if there is exactly one `true` value in the `expression` array, the
`XNOR` function will return `false`; otherwise, it will return `true`. */
const XNOR = (...expression: boolean[]) => {
    return !XOR(...expression);
}

/**
 * The NOT function takes in multiple boolean expressions and returns an array of their negations.
 * @param {boolean[]} expression - The `expression` parameter is a rest parameter that allows you to
 * pass in multiple boolean values. It is represented by the `...expression` syntax, which means you
 * can pass in any number of boolean values separated by commas.
 * @returns The `NOT` function returns an array of boolean values where each value is the negation of
 * the corresponding value in the input `expression` array.
 */
const NOT = (...expression: boolean[]) => {
    return parsingBoolean(...expression).map((value) => !value);
}

export { AND, NAND, OR, NOR, XOR, XNOR, NOT };