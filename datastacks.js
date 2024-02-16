// Stacks = information storage, first in last out (FILO or LIFO)
// Operations = push (add to top of stack), pop (remove from top of stack), peek, display, count, change, isEmpty, isFull

// 1. Write a code to create a new stack and push each character of the string onto the stack. 
// Then pop each character from the stack to get the reversed string. 
// Input: "abcde"
// Output: "edcba" 

// const stack = new Stack()
// console.log(`Stack after declaration: ${stack}`)
// const inputString = "abcde"

// for (let i=0; i<inputString.length, i++) {
//     stack.push(inputString(i))
//     console.log(`Stack inside the loop: ${stack}`)
// }

// let reverseString = ""
// while (!stack.isEmpty()) {
//     reverseString += stack.pop() 
// }

// // same as above as a string
// const stack2 = [] 

// const inputString2 = "abcde" 
// for (let i=0; i < inputString.length; i++) {
//     stack.push(inputString2[i])
// }
// let reverseString2 = ""
// while (!stack.isEmpty()) {
//     reverseString2 += stack.pop()
// } 

// // same as above with a constructor
// class Stack {
//     constructor() {
//         this.string = ""
//     }
//     push() {
//         this.string.push("abcde")
//     }
//     pop() {
//         if (!this.isEmpty()) {
//             return this.string.pop()
//         } else {
//             return null
//         }
//     }
//     isEmpty() {
//         return this.string.length === 0
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.string[this.string.length -1]
//         } else {
//             return null 
//         }
//     }
// }

// Queues = data storage, first in first out (FIFO)
// Operations - Enqueue (=push), dequeue (=pop), peek or front, isEmpty, isFull, shift, unshift

// 2. Write a code to create a queue and add elements. 
// Remove an element from the front of the queue and view the first element in the queue without removing it. 
// Then check if the queue is empty. 

let queue = []

queue.push(10)
queue.push(20)
queue.push(30)
console.log(queue)

let firstElement = queue.shift()
console.log(firstElement)

console.log(queue[0])

console.log(queue.length === 0) 


// sorting = the process of arranging a collection of items or data elements in a particular order
// sorting algorithms = allow for efficient searching, organization, and analysis of data

// insertion sort = basic sorting algorithm that constructs the sorted array by comparing and inserting elements one at a time = good for small amounts of data only
// [4, 2, 6, 0] -> swap 2 & 4 [2, 4, 6, 0] -> swap 0 one-by-one until it's at the beginning [2, 4, 0, 6] [2, 0, 4, 6] [0, 2, 4, 6]

// selection sort = basic sorting algorithm that separates the input list into two sections, sorted part at the start & unsorted part at the end = still goes one at a time so good for small amounts of data only
// [7, 5, 4, 2] -> [2] [5, 4, 7] -> [2, 4] [5, 7] -> [2, 4, 5, 7]

// bubble sort = sorting algorithm that compares adjacent elements and swaps if necessary
// [6, 2, 8, 4, 10] -> [2, 6, 8, 4, 10] -> [2, 6, 4, 8, 10] -> [2, 4, 6, 8, 10]
function bubbleSort(arr) {
    let len = arr.length
    for (let i=0; i<len -1; i++) {
        for (let j=0; j<len -i -1; j++) {
            // swap adjacent elements if they are in the wrong order
            if (arr[j] > arr[j+1]) { //are the indexes in the correct order?
                let temp=arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                console.log(arr)
            }
        }
    }
}
const array = [5, 4, 9, 2, 0]
bubbleSort(array)
// Space complexity = measures how efficiently an algorithm utilizes memory, quanitfies the extra memory needed by algorithm 
// Time complexity = measure of how long an algorithm takes to run based on the input's length
// Big O notation = time complexity expression = upper limit of run time  (https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)
// O(log n), O(1) = time stays constant as length grows () -> green
// O(n) = time grows lineally as input length grows (loops) -> yellow
// O(n log n) = time grows logarithmically as input length grows (loops within loops)-> orange
// O(n^2), O(2^n), O(n!) = time grows exponentially/quadratically as input length grows -> red
