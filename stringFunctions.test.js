const stringFunctions = require('./stringFunctions');

//reverse string

test("reverse ydah => hady", () => {
    expect(stringFunctions.reverseString('ydah')).toBe('hady');
})

//for integers (invalid input)
test("reverse 12 => null", () => {
    expect(stringFunctions.reverseString(12)).toBe(null);
})

//palindrome

test("check palindrome racecar => true", () => {
    expect(stringFunctions.isPalindrome('racecar')).toBe(true);
})

test("check palindrome person => false", () => {
    expect(stringFunctions.isPalindrome('person')).toBe(false);
})

//for integers (invalid input)
test("check palindrome 12 => null", () => {
    expect(stringFunctions.isPalindrome(12)).toBe(false);
})