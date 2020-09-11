/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  if (array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += arraySum(array[i]);
    } else {
      sum += array[i];
    }
  }
  return sum;
};

// 4. Check if a number is even.
let isEven = function(n) {
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
  if (n === 0) return 0;
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }
  return (Math.abs(n) - 1) + sumBelow(Math.abs(n) - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
  if (x + 1 === y || x - 1 === y || x === y) {
    return [];
  }
  if (x > y) {
    const num = range(x - 1, y);
    num.unshift(x - 1);
    return num;
  } else {
    const num = range(x + 1, y);
    num.unshift(x + 1);
    return num;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp < 0) {
    return parseFloat((1 / base * exponent(base, exp + 1)).toFixed(5));
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
  if (n === 1) return true;
  if (n === 0) return false;
  if (n !== parseInt(n)) return false;
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  return reverse(string.substring(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function(string) {
  string = string.toLowerCase();
  if (string[0] !== string[string.length - 1]) return false;
  if (string.length === 0 || string.length === 1) return true;
  const trimString = string.substring(1, string.length -1)
  return palindrome(trimString);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  if (!y) return NaN;
  if (y < 0) return modulo(x, -y);
  if (x < 0) return -modulo(-x, y);
  if (x < y) return x;
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {
  if (!x || !y) return 0;
  if (y < 0) {
    return -x + multiply(x, y + 1);
  } 
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
  if (!y) return NaN;
  if (x < 0) return -divide(-x, y);
  if (y < 0) return -divide(x, -y);
  if (x < y) return 0;
  return 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
  if (x < 0 || y < 0) return null;
  if (!y) return x;
  return gcd(y, (x % y))
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) return false;
  if (str1 === '' && str2 === '') return true;
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
  if (str === '') return [];
  return Array.from(str[0]).concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
let reverseArr = function(array) {
  if (array.length === 0) return [];
  return Array.from(reverseArr(array.slice(1))).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
  if (!length) return [];
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {
  if (n === 1) return '1';
  let fizzOrBuzz;
  if (n % 3 === 0 && n % 5 === 0) {
    fizzOrBuzz = 'FizzBuzz';
  } else if (n % 3 === 0) {
    fizzOrBuzz = 'Fizz';
  } else if (n % 5 === 0) {
    fizzOrBuzz = 'Buzz';
  } else {
    fizzOrBuzz = n.toString();
  }
  return Array.from(fizzBuzz(n - 1)).concat(fizzOrBuzz);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
  if (!array.length) return 0;
  let occurrences = 0;
  if (array[0] === value) {
    occurrences++;
  }
  return occurrences + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
  if (array.length < 1) return [];
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function(obj, key) {
  let count = 0;
  for (let x in obj) {
    if (typeof obj[x] === 'object') {
      count += countKeysInObj(obj[x], key);
    }
    if (x === key) {
      count++;
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value) {
  let count = 0;
  for (let x in obj) {
    const val = obj[x];
    if (typeof obj[x] === 'object') {
      count += countValuesInObj(obj[x], value);
    }
    if (val === value) {
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {
  for (let key in obj) {
    const value = obj[key];
    if (key === oldKey) {
      obj[newKey] = value;
      delete obj[oldKey];
    }
    if (typeof value === 'object') {
      replaceKeysInObj(value, oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function(n) {
  if (n < 0 || !n) return null;
  if (n === 1) return [0, 1];
  let fibNums = fibonacci(n - 1);
  fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  return fibNums;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
  if (n < 0) return null;
  if (!n) return 0;
  if (n === 1) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(array) {
  if (!array.length) return [];
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
  if (!array.length) return [];
  const capital = array[0][0].toUpperCase() + array[0].slice(1);
  return [capital].concat(capitalizeFirst(array.slice(1)));
}

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(array) {
  let flatArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArr = flatArr.concat(flatten(array[i]));
    } else {
      flatArr.push(array[i]);
    }
  }
  return flatArr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, obj) {
  if (!obj) return letterTally(str, {});
  if (!str.length) return obj;
  if (!obj[str[0]]) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
  // make copy of list
  let compressed = list.slice();
  // base case - if list length is less than or equal to 1 return list
  if (list.length <= 1) return list;
  // if the first element is equal to the second element, take off first element recurse
  if (compressed[0] === compressed[1]) {
    return compress(compressed.slice(1));
  }
  // otherwise if it isnt equal, take the first element and concatenate with the rest of the list
  return [compressed.shift()].concat(compress(compressed));
}

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {
  if (!array.length) return array;
  return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
  if (array.length <= 1) return array;
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1));
  }
  return [array.shift()].concat(minimizeZeroes(array));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
  if (!array.length) return array;
  let transformedElement = array[0];
  if (array.length % 2 === 0) {
    transformedElement = Math.abs(transformedElement);
  } else if (array[0] > 0) {
    transformedElement = transformedElement * -1;
  }
  return [transformedElement].concat(alternateSign(array.slice(1)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
  const nums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  if (!str.length) return str;
  let firstChar = str[0];
  const convertStr = Number.parseInt(firstChar);
  if (Number.isInteger(convertStr)) {
    return nums[convertStr] + numToText(str.substring(1));
  }
  return firstChar + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
// was only able to pass all tests AFTER using a closure -- part2.js was not passing in 'tags' variable as a parameter
let tagCount = function(tag, node) {
  if (!node) {
    node = document.getElementById('tagCountTest');
  }
  const fn = (t, n) => {
    if (!n) return 0;
    let count = 0;
    if (n.nodeName.toLowerCase() === tag) {
      count++;
    }
    n.childNodes.forEach(x => {
      count += tagCount(tag, x);
    });
    return count;
  }
  return fn(tag, node);
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
  if (min === undefined && max === undefined) {
    min = 0;
    max = array.length;
  }
  const middleIndex = Math.floor((min + max) / 2);
  const middleElement = array[middleIndex];
  if (middleElement === target) return middleIndex;
  if (min >= max) return null;
  if (middleElement > target) {
    return binarySearch(array, target, min, middleIndex);
  }
  return binarySearch(array, target, middleIndex + 1, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
  const merge = (leftArr, rightArr) => {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      console.log(leftArr, rightArr)
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  };
  if (array.length <= 1) return array;
  let min = 0;
  let max = array.length;
  const middleIndex = Math.floor((min + max) / 2);
  let firstHalf = array.slice(min, middleIndex);
  let secondHalf = array.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
  let obj = {};
  if (typeof input !== 'object' || input === null) return input;
  if (Array.isArray(input)) {
    obj = [];
  } 
  for (let key in input) {
    const val = input[key];
    obj[key] = clone(val);
  }
  return obj;
};
