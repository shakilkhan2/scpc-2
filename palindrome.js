
// Problem:  Write a code to calculate if the string is palindrome ?

function isPalindrome(value) {
    // Convert the input value to a string and remove spaces and punctuation
    const firstValue = value.toString().toLowerCase().replace(/[^a-zA-Z]/g, '');
    const secondValue = value.toString().split('').reverse().join('').toLowerCase().replace(/[^a-zA-Z]/g, '');
  
    if (firstValue === secondValue) {
      return 'Palindrome';
    } else {
      return 'Not Palindrome';
    }
  }
  
  console.log(isPalindrome("Mr. Owl ate my metal worm.")); 
  
  
  // Mr. Owl ate my metal worm.
  // .replace(/[^a-zA-Z]/g, '')   regular expression
  // 12321, 456654, 789987
  // madam, level, radar
  // A man, a plan, a canal, Panama!, Was it a car or a cat I saw?