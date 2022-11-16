// 1. isPrime - Returns true or false, indicating whether the given number is prime.

// variant 1:

const isPrime1 = number => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1)
    if (number % i === 0) return false;

  return true;
};

// variant 2:
const isPrime2 = (num, x = 2) => {
  if (num === x) return true;

  return num <= 1 || num % x === 0 ? false : isPrime2(num, x + 1);
};

// variant 3:

const isPrime = (num, x = 2) => {
  if (num <= 1) return false;
  let y = Math.floor(Math.sqrt(num));

  if (num === 2 || x > y) return true;

  return num % x === 0 ? false : isPrime(num, x + 1);
};

// isPrime(0); // false
// isPrime(1); // false
// isPrime(17); // true
// isPrime(10000000000000); // false

// 2. factorial - Returns a number that is the factorial of the given number.

const factorial = num => {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

// 3. fib - Returns the nth Fibonacci number.

// variant 1:

const fib1 = num => {
  return num <= 1 ? num : fib1(num - 1) + fib1(num - 2);
};

// variant 2:

const fib = num => {
  if (num <= 1) return num;

  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i += 1) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// fib(0); // 0
// fib(1); // 1
// fib(10); // 55
// fib(20); // 6765

// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = arr => {
  return !arr
    .map((el, ind, arr) => (arr.length !== ind + 1 ? el <= arr[ind + 1] : true))
    .includes(false);
};

// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false

// 5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).

const reverse = str => {
  return str.length > 0
    ? str.split('').reduce((prevSymbol, symbol) => symbol + prevSymbol)
    : '';
};

// reverse('')                         // ''
// reverse('abcdef')                   // 'fedcba'

// 6. indexOf - Implement the indexOf function for arrays.

const indexOf = (arr, num) => {
  return arr.reduce((prevValue, el, ind) => {
    return el === num ? (prevValue = ind) : prevValue;
  }, -1);
};

// indexOf([1, 2, 3], 1)               // 0
// indexOf([1, 2, 3], 4)               // -1

// 7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).

const isPalindrome = str => {
  const trimStr = str.split(' ').join('').toLowerCase();
  const length = Math.floor(trimStr.length / 2);
  if (length <= 1) return true;
  const start = trimStr.slice(0, length);
  const finish = trimStr.slice(-length);
  const reverseFinish = finish
    .split('')
    .reduce((prevSymbol, symbol) => symbol + prevSymbol);

  return start === reverseFinish ? true : false;
};

// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true

//8. missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.

const missing = array => {
  const max = Math.max(...array);
  const newArr = [];
  for (let i = 1; i <= max; i += 1) {
    newArr.push(i);
  }

  const result = newArr.filter(a => array.indexOf(a) === -1);

  return result[0];
};

// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

//9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.

const isBalanced = arr => {
  const open = '{';
  const close = '}';

  const newArr = arr.split('').filter(el => el === open || el === close);

  if (
    newArr.length % 2 !== 0 ||
    newArr[0] === close ||
    newArr[newArr.length - 1] === open
  )
    return false;

  const newArrLenghtHf = newArr.length / 2;

  const leftArr = newArr.slice(0, newArrLenghtHf).every(el => el === open);

  const rightArr = newArr.slice(-newArrLenghtHf).every(el => el === close);

  return leftArr && rightArr ? true : false;
};

// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false
