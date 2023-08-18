import { AND, NAND, NOR, OR, XOR, XNOR, NOT } from './index'

describe('AND', () => {
  // Test that the AND function returns true when given two true values
  it('should return true when given two true values', () => {
    const result = AND(true, true)
    // Assert
    expect(result).toEqual(true)
  })

  // Test that the AND function returns true when given three true values
  it('should return true when given three true values', () => {
    // Arrange
    const expression = [true, true, true]

    // Act
    const result = AND(...expression)

    // Assert
    expect(result).toBe(true)
  })

  // Test that the AND function returns true when there is only one true value in the expression.
  it('should return true when there is only one true value in the expression', () => {
    expect(AND(true)).toBe(true)
  })

  // Test that the AND function returns false when there is at least one false value in the expression
  it('should return false when there is at least one false value in the expression', () => {
    expect(AND(true, true, false)).toBe(false)
    expect(AND(true, false, true)).toBe(false)
    expect(AND(false, true, true)).toBe(false)
    expect(AND(false, false, false)).toBe(false)
  })

  // Test that the AND function returns true when all values in the expression are true, and false otherwise.
  it('should return true when all values are true', () => {
    const result = AND(true, true, true, true, true)
    expect(result).toBe(true)
  })

  // Test that the AND function returns false when there are multiple false values in the expression
  it('should return false when there are multiple false values', () => {
    expect(AND(false, false, false)).toBe(false)
    expect(AND(false, true, false)).toBe(false)
    expect(AND(true, false, false)).toBe(false)
    expect(AND(false, false, true)).toBe(false)
    expect(AND(false, true, true)).toBe(false)
    expect(AND(true, false, true)).toBe(false)
    expect(AND(true, true, false)).toBe(false)
  })

  // Test that the AND function returns true when all input values are true, regardless of their order.
  it('should return true when all input values are true', () => {
    expect(AND(true, true, true)).toBe(true)
    expect(AND(true, true, false)).toBe(false)
    expect(AND(false, true, true)).toBe(false)
    expect(AND(true, false, true)).toBe(false)
    expect(AND(false, false, false)).toBe(false)
  })

  // Test that the 'AND' function returns true only if all the input values are true, and false otherwise.
  it('should return true when all input values are true', () => {
    expect(AND(true, true, true)).toBe(true)
    expect(AND(true, true, false)).toBe(false)
    expect(AND(true, false, true)).toBe(false)
    expect(AND(false, true, true)).toBe(false)
    expect(AND(false, false, false)).toBe(false)
  })
})

describe('NAND', () => {
    // Test that the NAND function returns true when all inputs are false
    it('should return true when all inputs are false', () => {
        expect(NAND(false, false)).toBe(true)
        expect(NAND(false, false, false)).toBe(true)
        expect(NAND(false, false, false, false)).toBe(true)
    })

    // Test that the NAND function returns false when at least one input is true
    it('should return false when at least one input is true', () => {
        expect(NAND(true, true)).toBe(false)
    })

    // Test that the NAND function returns true when given one input that is true
    it('should return true when given one input that is true', () => {
        expect(NAND(false)).toBe(true)
        expect(NAND(true, false)).toBe(true)
        expect(NAND(false, true)).toBe(true)
        expect(NAND(true, true)).toBe(false)
    })

    // Test that the NAND function returns true when given one input that is false
    it('should return true when given one false input', () => {
        expect(NAND(false)).toBe(true)
        expect(NAND(true)).toBe(false)
        expect(NAND(false, true)).toBe(true)
        expect(NAND(true, false)).toBe(true)
        expect(NAND(false, false)).toBe(true)
        expect(NAND(true, true)).toBe(false)
    })

    // Test that the NAND function returns false when given only true inputs
    it('should return false when given only true inputs', () => {
        expect(NAND(true)).toBe(false)
        expect(NAND(true, true)).toBe(false)
        expect(NAND(true, true, true)).toBe(false)
    })

    // Test that the NAND function works correctly with any number of inputs
    it('should return the correct result when given any number of inputs', () => {

        // Test case 2: 1 input
        expect(NAND(true)).toBe(false)
        expect(NAND(false)).toBe(true)

        // Test case 3: 2 inputs
        expect(NAND(true, true)).toBe(false)
        expect(NAND(true, false)).toBe(true)
        expect(NAND(false, true)).toBe(true)
        expect(NAND(false, false)).toBe(true)

        // Test case 4: 3 inputs
        expect(NAND(true, true, true)).toBe(false)
        expect(NAND(true, true, false)).toBe(true)
        expect(NAND(true, false, true)).toBe(true)
        expect(NAND(true, false, false)).toBe(true)
        expect(NAND(false, true, true)).toBe(true)
        expect(NAND(false, true, false)).toBe(true)
        expect(NAND(false, false, true)).toBe(true)
        expect(NAND(false, false, false)).toBe(true)

        // Add more test cases for higher number of inputs if needed
    })

    // Test that the NAND function returns true when given only false inputs
    it('should return true when given only false inputs', () => {
        expect(NAND(false, false, false)).toBe(true)
        expect(NAND(false, false)).toBe(true)
        expect(NAND(false)).toBe(true)
    })

    // Test that the NAND function returns true when given undefined inputs
    it('should return true when given undefined inputs', () => {
        expect(NAND(undefined)).toBe(true)
        expect(NAND(undefined, undefined)).toBe(true)
        expect(NAND(undefined, undefined, undefined)).toBe(true)
    })
})

describe('OR', () => {
    // Test that the OR function returns true when given two true values as arguments.
    it('should return true when given two true values', () => {
        expect(OR(true, true)).toBe(true)
    })

    // Test that the OR function returns true when there are multiple true values in the input array
    it('should return true when there are multiple true values', () => {
        expect(OR(true, true, true)).toBe(true)
    })

    // Test that the OR function returns true if at least one of the boolean values is true, and false otherwise.
    it('should return true when at least one boolean value is true', () => {
        expect(OR(true, false, false)).toBe(true)
        expect(OR(false, true, false)).toBe(true)
        expect(OR(false, false, true)).toBe(true)
        expect(OR(true, true, false)).toBe(true)
        expect(OR(true, false, true)).toBe(true)
        expect(OR(false, true, true)).toBe(true)
        expect(OR(true, true, true)).toBe(true)
        expect(OR(false, false, false)).toBe(false)
    })
})

describe('NOR', () => {
    // Test that NOR function returns true when both input expressions are false.
    it('should return true when both input expressions are false', () => {
        expect(NOR(false, false)).toBe(true)
    })

    // Test that NOR function returns false when given false and true as arguments.
    it('should return false when given false and true', () => {
        expect(NOR(false, true)).toBe(false)
    })

    // Test that the NOR function returns false when given the arguments true and false.
    it('should return false when given true and false', () => {
        expect(NOR(true, false)).toBe(false)
    })

    // Test that NOR function returns false when both input expressions are true.
    it('should return false when both input expressions are true', () => {
        expect(NOR(true, true)).toBe(false)
    })

    // Test that NOR() returns true
    it('should return true when NOR() is called', () => {
        expect(NOR()).toBe(true)
    })

    // Test that NOR(false) returns true.
    it('should return true when input is false', () => {
        expect(NOR(false)).toBe(true)
    })

    // Test that the NOR function returns false when the input is true.
    it('should return false when input is true', () => {
        expect(NOR(true)).toBe(false)
    })
})

describe('XOR', () => {
    // Test that the XOR function returns false when given two false values as arguments.
    it('should return false when given two false values', () => {
        expect(XOR(false, false)).toBe(false)
    })

    // Test that the XOR function returns true when there is exactly one true value in the expression array and false otherwise.
    it('should return true when there is exactly one true value in the expression array', () => {
        expect(XOR(true, false)).toBe(true)
    })

    // Test that the XOR function returns false when given three false values
    it('should return false when given three false values', () => {
        expect(XOR(false, false, false)).toBe(false)
    })

    // Test that the XOR function returns false when given an empty input
    it('should return false when given an empty input', () => {
        expect(XOR()).toBe(false)
    })

    // Test that the XOR function returns the correct result when given one input value.
    it('should return true when the input value is true', () => {
        expect(XOR(true)).toBe(true)
    })

    // Test that the XOR function returns false when all input values are false.
    it('should return false when all input values are false', () => {
        expect(XOR(false, false, false)).toBe(false)
    })

    // Test that the XOR function returns false when all input values are true.
    it('should return false when all input values are true', () => {
        expect(XOR(true, true, true)).toBe(false)
    })

    // Test that the XOR function correctly handles a large number of input values
    it('should return true when there is exactly one true value in the input', () => {
        // Generate a large number of input values
        const input = Array.from({ length: 10000 }, () => Math.random() < 0.5)

        // Call the XOR function with the input values
        const result = XOR(...input)

        // Count the number of true values in the input
        const trueCount = input.filter((value) => value === true).length

        // Assert that the result is true if and only if there is exactly one true value in the input
        expect(result).toBe(trueCount === 1)
    })

    // Test that the XOR function returns true when there is exactly one true value in the input array, and false otherwise.
    it('should return true when there is exactly one true value in the input array', () => {
        expect(XOR(true)).toBe(true)
        expect(XOR(false)).toBe(false)
        expect(XOR(true, false)).toBe(true)
        expect(XOR(false, false)).toBe(false)
        expect(XOR(true, true)).toBe(false)
        expect(XOR(true, false, true)).toBe(false)
        expect(XOR(true, false, false)).toBe(true)
        expect(XOR(true, true, true)).toBe(false)
    })

    // Test that the XOR function returns the expected result when input values are null or undefined
    it('should return false when input values are null or undefined', () => {
        expect(XOR(null)).toBe(false)
        expect(XOR(undefined)).toBe(false)
        expect(XOR(null, null)).toBe(false)
        expect(XOR(undefined, undefined)).toBe(false)
        expect(XOR(null, undefined)).toBe(false)
        expect(XOR(undefined, null)).toBe(false)
    })
})

describe('XNOR', () => {
    // Test that XNOR function returns true when both input parameters are true.
    it('should return true when both input parameters are true', () => {
        expect(XNOR(true, true)).toBe(true)
    })

    // Test that XNOR function returns true when both input values are false.
    it('should return true when both input values are false', () => {
        expect(XNOR(false, false)).toBe(true)
    })

    // Test that XNOR function returns false when given true and false as arguments.
    it('should return false when given true and false', () => {
        expect(XNOR(true, false)).toBe(false)
    })

    // Test that XNOR function returns false when given false and true as arguments.
    it('should return false when given false and true as arguments', () => {
        expect(XNOR(false, true)).toBe(false)
    })

    // Test that XNOR function returns true when both arguments are null.
    it('should return true when both arguments are null', () => {
        expect(XNOR(null, null)).toBe(true)
    })

    // Test that XNOR function returns true when both arguments are undefined.
    it('should return true when both arguments are undefined', () => {
        expect(XNOR(undefined, undefined)).toBe(true)
    })

    // Test that XNOR function returns false when the input is true and null.
    it('should return false when input is true and null', () => {
        expect(XNOR(true, null)).toBe(false)
    })

})

describe('NOT', () => {
    // Test that the NOT function returns an array of boolean values where each value is the negation of the corresponding value in the input expression array when a single true value is passed as input.
    it('should return an array of negated boolean values when a single true value is passed as input', () => {
      const result = NOT(true);
      expect(result).toEqual([false]);
    });

    // Test that the NOT function correctly negates each boolean value in the input expression array
    it('should correctly negate each boolean value in the input expression array', () => {
      // Arrange
      const expression = [true, false, true, false];

      // Act
      const result = NOT(...expression);

      // Assert
      expect(result).toEqual([false, true, false, true]);
    });

});
