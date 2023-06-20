//add
function add(a, b){
    return a + b;
}

//subtract
function subtract(a, b){
    return a - b;
}

//multiply
function multiply(a, b){
    return a * b;
}

//divide
function divide(a, b){
    if(b === 0){
        return null;
    }
    return a/b;
}

module.exports = {add, subtract, multiply, divide};