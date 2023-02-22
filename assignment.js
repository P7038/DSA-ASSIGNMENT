// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// function findPairs(arr, targetSum) {
//     const hashTable = {};
//     const pairs = [];

//     for (let i = 0; i < arr.length; i++) {
//         const complement = targetSum - arr[i];

//         if (complement in hashTable) {
//             pairs.push([arr[i], complement]);
//         }

//         hashTable[arr[i]] = i;
//     }

//     return pairs;
// }

// // Example usage:
// const arr = [3, 1, 5, 8, 2, 7, 5,4,6];
// const targetSum = 10;
// const pairs = findPairs(arr, targetSum);
// console.log(pairs);



// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array?

// function reverseArrayInPlace(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         const temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;

//         left++;
//         right--;
//     }

//     return arr;
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arr);
// console.log(arr); // Output: [5, 4, 3, 2, 1]




// Q3. Write a program to check if two strings are a rotation of each other?


// function areStringsRotations(str1, str2) {
//     if (str1.length !== str2.length) {
//       return false;
//     }

//     const concatenatedString = str1 + str1;

//     if (concatenatedString.includes(str2)) {
//       return true;
//     }

//     return false;
//   }

//   // Example usage:
//   const str1 = "hello";
//   const str2 = "lohel";
//   console.log(areStringsRotations(str1, str2)); // Output: true




//   Q4. Write a program to print the first non-repeated character from a string?



// function firstNonRepeatedChar(str) {
//     const freq = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (freq[char] === undefined) {
//             freq[char] = 1;
//         } else {
//             freq[char]++;
//         }
//     }

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (freq[char] === 1) {
//             return char;
//         }
//     }

//     return null;
// }


// const str = "hello world";
// console.log(firstNonRepeatedChar(str)); // Output: "h"





// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


// function towerOfHanoi(n, fromRod, toRod, auxRod) {
//     if (n === 1) {
//         console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//         return;
//     }

//     towerOfHanoi(n - 1, fromRod, auxRod, toRod);

//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

//     towerOfHanoi(n - 1, auxRod, toRod, fromRod);
// }

// // Example usage:
// towerOfHanoi(4, "A", "C", "B");


// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// function postfixToPrefix(postfix) {
//     const stack = [];

//     for (const char of postfix) {
//         if (char.match(/[a-z]/i)) {
//             stack.push(char);
//         } else {
//             const operand1 = stack.pop();
//             const operand2 = stack.pop();
//             stack.push(char + operand2 + operand1);
//         }
//     }

//     return stack.pop();
// }
// const postfix = "abc*+de/f*g*+";
// const prefix = postfixToPrefix(postfix);
// console.log(prefix); 


// Q7. Write a program to convert prefix expression to infix expression.
// function prefixToInfix(prefix) {
//     const stack = [];

//     for (let i = prefix.length - 1; i >= 0; i--) {
//       const char = prefix[i];
//       if (char.match(/[a-z]/i)) {
//         stack.push(char);
//       } else {
//         const operand1 = stack.pop();
//         const operand2 = stack.pop();
//         const expression = `(${operand1}${char}${operand2})`;
//         stack.push(expression);
//       }
//     }

//     return stack.pop();
//   }
//   const prefix = "+*+abc/def*g";
//   const infix = prefixToInfix(prefix);
//   console.log(infix); // ((a+b)*(c+(d/e))+f*g)

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

// function areBracketsClosed(code) {
//     const stack = [];
//     const openingBrackets = "([{";
//     const closingBrackets = ")]}";

//     for (const char of code) {
//       if (openingBrackets.includes(char)) {
//         stack.push(char);
//       } else if (closingBrackets.includes(char)) {
//         const lastOpening = stack.pop();
//         const expectedClosing = closingBrackets[openingBrackets.indexOf(lastOpening)];
//         if (char !== expectedClosing) {
//           return false;
//         }
//       }
//     }

//     return stack.length === 0;
//   }
//   const code1 = "function foo() { return (1 + 2) * 3; }";
//   console.log(areBracketsClosed(code1)); // true

//   const code2 = "if (x > y) { console.log(x); } else { console.log(y);";
//   console.log(areBracketsClosed(code2)); // false

// Q9. Write a program to reverse a stack.
// function reverseStack(stack) {
//     const reversed = [];

//     while (stack.length > 0) {
//       reversed.push(stack.pop());
//     }

//     return reversed;
//   }
//   const stack = [1, 2, 3, 4, 5];
//   const reversed = reverseStack(stack);
//   console.log(reversed); // [5, 4, 3, 2, 1]


// Q10. Write a program to find the smallest number using a stack.

const stack = [5, 3, 4, 2,1];
function findSmallestNumber(stack) {
    let smallest = stack[0];
    for (const num of stack) {
        if (num < smallest) {
            smallest = num;
        }
    }
    
    // console.log(smallest)
    return smallest;
}
const smallest = findSmallestNumber(stack);
console.log(smallest); 
