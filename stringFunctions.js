//reverse
function reverseString(str){
    if(typeof str !== 'string'){
        return null;
    }
    return str.split("").reverse().join("");
}

//palindrome
function isPalindrome(str){
    if(typeof str !== 'string'){
        return null;
    }
    else if(str.split("").reverse().join("") === str){
        return true;
    }
    return false;
}

module.exports = {reverseString, isPalindrome};