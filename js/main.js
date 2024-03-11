/*-----------------------------------------------------------------
Challenge: 09-charCount
Difficulty: Basic
Prompt:
- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be count too.
Examples:
charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount(string) {
    const count = {};
    
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      
      if (count[char] !== undefined) {
        count[char]++;
      } else {
        count[char] = 1;
      }
    }
    
    return count;
  }


/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding
Difficulty: Basic
Prompt:
- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
Examples:
formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding(number, character, length) {
    const numString = number.toString();
// converts the number to a string and then checks if its length is less than the specified length. 
    if (numString.length >= length) {
        return numString;
    }

    const paddingLength = length - numString.length;
    const padding = char.repeat(paddingLength);

    return padding + numString;
}

/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

function isPalindrome(str) {
    // Check if the string is equal to its reverse
    return str === str.split('').reverse().join('');
  }

//   Challenge: 12-hammingDistance
// Difficulty: Intermediate
// Prompt:
// In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
// - Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
// - The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
// - If the strings are not of the same length, the function should return NaN.
// Examples:
// hammingDistance('abc', 'abc'); //=> 0
// hammingDistance('a1c', 'a2c'); //=> 1
// hammingDistance('!!!!', '****'); //=> 4
// hammingDistance('abc', 'ab'); //=> NaN
// -----------------------------------------------------------------*/
// // Your solution for 12-hammingDistance here:

function hammingDistance(str1, str2) {
  // Check if the strings have equal length
  if (str1.length !== str2.length) {
      return NaN;
  }

  let distance = 0;
  // Iterate over each character in the strings
  for (let i = 0; i < str1.length; i++) {
      // Compare characters at the same position
      if (str1[i] !== str2[i]) {
          distance++;
      }
  }
  return distance;
}

// Challenge: 13-mumble
// Difficulty: Intermediate
// Prompt:
// - Write a function called mumble that accepts a single string argument.
// - The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
// - Examples describe it best..
// Examples:
// mumble('X'); //=> 'X'
// mumble('abc'); //=> 'a-bb-ccc'
// mumble('121'); //=> '1-22-111'
// mumble('!A 2'); //=> '!-AA-   -2222'
// -----------------------------------------------------------------*/
// // Your solution for 13-mumble here:

function mumble(str) {
// Create an array to store the repeated characters
let result = []

//Iterate over each character in the stri g
for (let i = 0; i < str.length; i++) {
  //Repeat i+1 times and push to array 
  result.push(str[i].repeat(i + 1));
}
}

// Challenge: 14-fromPairs
// Difficulty: Intermediate
// Prompt:
// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.
// Examples:
// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
// -----------------------------------------------------------------*/
// // Your solution for 14-fromPairs here:

function fromParis(arr) {
    const obj = {};

  for (const pair of arr) {
    const [key, value] = pair;
    obj[key] = value;
}
  return obj;
}

// Challenge: 15-mergeObjects
// Difficulty:  Intermediate
// Prompt:
// - Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
// - If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
// Examples:
// mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
// -----------------------------------------------------------------*/
// // Your solution for 15-mergeObjects here:

function mergeObjects(...objects) {
// Initialize empty object to store merged result
  const merged = {};
// Iterate over each object in arguments
  for (const obj of objects) {
    // Iterate over each property of object
      for (const [key, value] of Object.entries(obj)) {
        merged[key] = vaule;
      }
  }
return merged;
}
