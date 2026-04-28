


// Function 1: calculateTax
// Returns 10% of the amount
function calculateTax(amount) {
    return amount * 0.10;
}

// Function 2: convertToUpperCase
// Converts a string to all capital letters
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
// Compares two numbers and returns the larger one
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Function 4: isPalindrome
// Checks if a word is the same forward and backward (case-insensitive)
function isPalindrome(word) {
    // 1. Convert to lowercase to ignore case sensitivity
    const lowerWord = word.toLowerCase();
    // 2. Reverse the string
    const reversedWord = lowerWord.split('').reverse().join('');
    // 3. Compare and return boolean
    return lowerWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
// Subtracts the discount percentage from the original price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };