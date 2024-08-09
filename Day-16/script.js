
// Activiy-1: Basic recursion.
// Task:1 Write a recursive funtion to calculate the facorial of number. Log the result for a few tase cases.
function factorial(n) {
    if (n == 0) {
        return 1;
    }
    let fact = factorial(n - 1)
    let result = fact * n
    return result



}
console.log(`Factorial of 5 = ${factorial(5)}`)

// Task:2 Write a recursive funtion to calculate the nth Fibnocci number. Log the result for a few tase cases.

function fabonacci(n) {
    if (n == 1) {
        return 0;
    }
    if (n == 2) {
        return 1
    }
    return fabonacci(n - 2) + fabonacci(n - 1)
}

console.log('Fabonacci number of 4 = ', fabonacci(4));



// Acitivity:2 Recursion with arrays.
// Task:3 Write a recursive function to find the sum of all elements of an array. log the result for a few test case.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0
function sumOfArray(n) {
    if (n === -1) {
        return 0
    }
    sumOfArray(n - 1)
    return sum = sum + array[n]
}
console.log('Sum of array element = ', sumOfArray(array.length - 1))


// Task:4 Write a recursive function to find the maximum element in an array.Log the result for a few test case.
let array2 = [1, 34, 4, 6, 44, 67, 98, 2, 4, 1, 10000, 6766, 34, 54545, 898]
let value = 0

function filterMaxV(n) {
    if (n == -1) {
        return 0
    }
    
    filterMaxV(n - 1)
    if (value < array2[n]) {
        value = array2[n]
    }

    return value;
}
console.log('The highest value in array is = ', filterMaxV(array2.length - 1))



// Activity-3: String manupulation with recursion.
// Task:5 Write a recursion function to reverse a string. log the result for a few test case.

let string = 'String';
let revStringValue = ''

function revString(n) {
    if (n === string.length) {
        return
    }

    revString(n + 1)
    revStringValue += string[n]
    return revStringValue.toLowerCase()
}
console.log(revString(0))


// Task:6 Write a recursive function to chekc if string is a palindrome. log the result for a few test case.
let word = 'deified'
let newWord = ''

function chekcPalindrome(n) {
    if (n === word.length) {
        return
    }

    chekcPalindrome(n + 1)

    newWord += word[n]

    if (word.toLowerCase() === newWord.toLowerCase()) {
        return "The word is palindrome."
    } else {
        return 'The word is not palindrome.'
    }

}

console.log(chekcPalindrome(0))



// Activity-4:Recursive Research.
// Task:7 Write a recursive research function to perform a binary search on a sorted array. Log the index of the target element.
const arr = [1,23,67,88,90,34,900,675]
let highestValue = 0
let minIndex = 0;
let maxIndex = arr.length-1

function findHighestValue(n) {
    if (n == -1) {
        return 0
    }
    
    findHighestValue(n - 1)
    if (highestValue < arr[n]) {
        highestValue = arr[n]
    }

    return highestValue;
}
console.log('The highest value in array is = ', findHighestValue(arr.length - 1))

function binarySearch(n){
 
    if(n==-1){
        return  0
    }
   
    binarySearch(n-1)
    let midIndex = Math.trunc((minIndex + maxIndex) / 2)
    if (arr[midIndex] < highestValue) {
        minIndex = midIndex + 1;
    } else if (arr[midIndex] > highestValue) {
        maxIndex = midIndex - 1;
    } else {
       return `The highest value of in the array is : ${highestValue} and the index of this value is ${midIndex}`
    }


}
console.log(binarySearch(arr.length-1))



// Task:8 Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
    // Base case: If the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case: Check the first element and recurse on the rest
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// Test cases
const arr1 = [1, 2, 3, 4, 2, 2, 5];
const target1 = 2;
console.log(`Occurrences of ${target1} in ${JSON.stringify(arr1)}: ${countOccurrences(arr1, target1)}`);  // Output: 3

const arr2 = [1, 1, 1, 1, 1];
const target2 = 1;
console.log(`Occurrences of ${target2} in ${JSON.stringify(arr2)}: ${countOccurrences(arr2, target2)}`);  // Output: 5

const arr3 = [10, 20, 30, 40];
const target3 = 25;
console.log(`Occurrences of ${target3} in ${JSON.stringify(arr3)}`)



// Activity-5: Tree traversal
// Task:9 Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

 class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    }
  }
  class BSTree {
    constructor() {
      this.root = null;
    }

    isTreeEmpty() {
      return this.root === null;
    }
    makeTree(val) {
      let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(root, newNode) {
      if (root.value > newNode.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
    search(root, val) {
      if (root === null) {
        return false;
      } else if (root.value === val) {
        return true;
      } else if (root.value > val) {
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
    preOrder(root) {
      if (root) {
        console.warn(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
    }

    inOrder(root) {
      if (root) {
        this.inOrder(root.left);
        console.warn(root.value);
        this.inOrder(root.right);
      }
    }

    postOrder(root) {
      if (root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.warn(root.value);
      }
    }

    bfsTraversing() {
      let queue = [];
      queue.push(this.root);
      while (queue.length) {
        let current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        console.warn(current.value);
      }
    }

    minValue(root) {
      if (!root.left) {
        return root.value;
      } else {
        return this.minValue(root.left);
      }
    }

    maxValue(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.maxValue(root.right);
      }
    }

    maxValue(root) {
      if (!root.right) {
        return root.value;
      } else {
        return this.maxValue(root.right);
      }
    }

    removeData(value) {
      this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root,value) {
      if (root === null) {
        return null;
      }
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value= this.minValue(root.right);
        root.right=this.deleteNode(root.right,root.value)
      }
      return root;
    }
  }

  let bst = new BSTree();
  //
  bst.makeTree(20);
  bst.makeTree(10);
  bst.makeTree(5);
  bst.makeTree(11);
  bst.makeTree(30);
  bst.makeTree(40);
  bst.makeTree(23);
  // bst.preOrder(bst.root)
  // bst.inOrder(bst.root)
  // bst.postOrder(bst.root);
  // console.warn(bst.search(bst.root, 11));
  bst.removeData(20);
  // bst.bfsTraversing(bst.root);
  console.warn(bst.root)







