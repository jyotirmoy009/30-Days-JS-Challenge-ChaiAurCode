console.log("Day-21")


// Activity:1 Two sum.
// Task:1 Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
function twoSum(nums, target) {
    const numToIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndexMap.has(complement)) {
            const complementIndex = numToIndexMap.get(complement);
            return [complementIndex, i];
        }
        numToIndexMap.set(nums[i], i);
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log('Indices of the two numbers:', result);


// Activity:2 Reverse integer.
// Task:2
/* Write a function that takes an integer and returns it with its digit reversed. */
/* Handle edge cases like negative numbers and numbers ending in zero. */
/* Log the reversed integers for a few test cases. */

function reverseNum(num) {
    const opration = JSON.stringify(num)

    let numStr = ""
    if (opration[opration.length - 1] === "0") {
        numStr = opration.slice(0, -1)
    } else {
        numStr = opration
    }


    const breakNum = opration.split("").reverse()
    for (let i = 0; i < breakNum.length; i++) {
        if (breakNum[i] != 0) {
            breakNum.splice(0, i)
            break
        }
    }
    let reversedInt = "";
    const reversedIntArray = []
    breakNum.map((e) => {
        if (e == '-') {
            reversedIntArray.unshift('-')
        } else {
            reversedIntArray.push(e)
        }

    })
    reversedIntArray.map((e) => reversedInt += e)

    return Number(reversedInt)
}

console.log(reverseNum(-94))


// Activity-3: Palindrome Number
// Task:3 Solve the palindrome Number problem in leetcode.
/* Write a function that takes an integer and returns true if it is palindrome, and false statement. */
/* Log the result for a few taste cases, including edge cases like negative numbers. */

function checkPalindrome(num) {
    let reverseNum = JSON.stringify(num)
    let numArr = [];
    let newNum = ""

    reverseNum.split("").reverse().map((e) => {
        if (e === "-") { numArr.unshift("-") }
        else {
            numArr.push(e)
        }
    })
    numArr.map((e) => newNum += e)

    return Number(newNum) === num ? `${num} is a Palindrome number.` : `${num} is not a Palindrome number.`
}

console.log(checkPalindrome(-44))


// Activity-4 Merge two sorted lists.
// Task:4 Solve the "merge two sorted lists" problem on leetcode.
/* Write a function that takes two sorted linked lists and returns a new sorted list by merging them. */
/* Create a few test cases with linked lists and log the merged list. */

let arr = [4, 4, 4, 4, 8, 1, 9, 2, 10, 12, 3, 6, 15, 14, 23]

function mergeLinkedList(arr) {
    let newArr = []
    let sortedArr = []
    newArr.push(...arr)
    for (let i = 0; i < arr.length; i++) {
        let sortNum = newArr[0]
        for (let j = 0; j < newArr.length; j++) {
            if (sortNum < newArr[j]) {
                sortNum = sortNum
            } else if (sortNum == newArr[j]) {

            } else {
                sortNum = newArr[j]
            }

        }

        newArr.splice(newArr.indexOf(sortNum), 1)
        sortedArr.push(sortNum)
    }

    return sortedArr
}






console.log(mergeLinkedList(arr))