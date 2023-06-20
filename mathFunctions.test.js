const mathFunctions = require('./mathFunctions')

describe('Math functions that return the value of the operation', () => {
    //add
    test("add(1,2) => 3", () => {
      expect(mathFunctions.add(1,2)).toBe(3);
    })

    //subtract
    test("subtract(5,2) => 3", () => {
        expect(mathFunctions.subtract(5,2)).toBe(3);
      })
    
    //multiply
    test("multiply(5,2) => 10", () => {
        expect(mathFunctions.multiply(5,2)).toBe(10);
      })

    //divide
    test("divide(10,2) => 5", () => {
        expect(mathFunctions.divide(10,2)).toBe(5);
      })

    //test for dividing by zero
    test("divide(10,0) => null", () => {
        expect(mathFunctions.divide(10,0)).toBe(null);
      })

  })