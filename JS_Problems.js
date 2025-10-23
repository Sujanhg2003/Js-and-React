// reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Find the Largest of Three Numbers
function largest(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}
console.log("Largest:", largest(12, 45, 25));

// Fabonacci Series
function fibonacci(n) {
  let a = 0, b = 1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
fibonacci(5);

// Sum of all elements in array
let arr = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum =", sum);

// OR 
let total = arr.reduce((acc, val) => acc + val, 0);
console.log("Sum using reduce =", total);

// Count Vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Education"));

// palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 

// remove duplicated from array
const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(numbers)];
console.log(unique);

// factorial 

function factorial(n){
    if(n<=1) return 1;
    else{
        return n* factorial(n-1);
    }
}

console.log(factorial(5));

// count occurences of each characters

function countChar(str){
    const count={}
    for (let char of str){
        count[char] = (count[char] ||0)+1;
    }
    return count;
}

console.log(countChar("javascript"));