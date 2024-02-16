// question 1
// Determine the validity of an input string s, which consists solely of the characters (, ), {, }, [, and ]. 
// You need to check the following conditions: 
// The opening brackets: 
// - Must match with the corresponding closing brackets of the same type 
// - Must be closed in the correct order 
// - Should have a corresponding opening bracket of the same type 
// Ex. Input: s = "()" Output: true 

let string1 = "()"
let string2 = "{}()[]"
let string3 = "({[]})"
let string4 = "({}[])"
let string5 = "({}[)]"
let string6 = "("

let parenthesis = "("
let bracket = "["
let curly = "{"
let parclose = ")"
let bracketclose = "]"
let curlyclose = "}"
let enders = [")", "]", "}"]
// enders.pop("closer") -> if enders.includes(array[j]), false 

const checker = (array) => {
    let checked = []
    for (let i = 0; i < array.length; i++) {
        const openclose = (opener, closer) => {
            if (array[i] === opener) {
                checked.push(array[i])
                for (let j = 0; j < array.length; j++) {
                    if (array[j] === closer) {
                        checked.push(array[j])
                    }
                }
            }
        }
        openclose("(", ")")
        openclose("{", "}")
        openclose("[", "]")
    }
    return (checked.length % 2 === 0)
}

console.log(checker(string5))

class Stack {
    constructor() {
        this.items = []
    }
    push(array) {
        this.items.push(array)
    }
}

// let stack1  = new Stack(array1) 
// console.log(stack1)







// QUESTION 2
// There are n people in a line waiting to purchase tickets, with the 0th person at the front and the (n - 1)th person at the back. 
// You are given a 0-indexed integer array of tickets of length n, where tickets[I] represents the number of tickets that the ith person wishes to purchase. 
// Each person purchases a ticket in exactly one second. 
// A person can only purchase one ticket at a time and must return to the end of the line (which happens instantly) to purchase additional tickets. 
// If a person has no more tickets to buy, he or she will leave the line. 
// Return the time spent for the individual at position k (0-indexed) to finish buying tickets. 
// Example: Input: tickets = [2,3,2], k = 2 Output: 6

// let tickets = [2, 3, 2] -> going through the array once takes 3 seconds because there are 3 people
// tickets turn 1 -> [1, 2, 1] -> going through the array twice takes 3*2 seconds because there are 3 people, twice
// tickets turn 2 -> [0, 1, 0] -> going through the array three times, take 7 seconds, because on the third round only one person remains

let tickets1 = [2, 3, 2]
let k1 = 2
let tickets2 = [2, 2, 2]
let k2 = 1

const checker2 = (array, k) => {
    let wait = 0
    let i = 0
    while (true) {
        if (i === k && array[k] === 1) { return wait + 1 }
        if (array[i] > 0) {
            wait++
            array[i]--
        }
        if (i === array.length - 1) {
            i = 0
        } else (i++)
    }
}
console.log(checker2(tickets1, k1))
console.log(checker2(tickets2, k2))

// QUESTION 3
// You are given an array heights representing the heights of students in a class. 
// The students are standing in a line, and their heights are listed in the order they appear from left to right. 
// The school wants to arrange the students in a non-decreasing order by their heights. 
//However, when they rearrange the students, a few may end up in different positions from their original positions.

// You need to write a function heightChecker(heights) that determines the minimum number of students who are not standing in the correct positions after the rearrangement. 
// Implement the function heightChecker and return the minimum number of students who are not positioned correctly.

// ex. Input: heights = [1,1,4,2,1,3] Output: 3

let heights1 = [1, 1, 4, 2, 1, 3]
let heights2 = [1, 4, 3, 1, 2, 1]

const heightChecker = (array) => {
    let newArray = [...array]
    newArray.sort() 
    let count = 0
    for (let i=0 ; i < array.length; i++) {
        if (array[i] !== newArray[i]) {count++}
    }
    return count;
}

console.log(heightChecker(heights2))

// Input: deck = [17,13,11,2,3,5,7]
// Output: [2,13,3,11,5,17,7]

// 1: [2] [3, 11, 5, 17, 7, 13]
// 2: [2, 3] [5, 17, 7, 13, 11]
// 3: [2, 3, 5] [7, 13, 11, 17]
// 4: [2, 3, 5, 7] [11, 17, 13]
// 5: [2. 3. 5. 7, 11] [13, 17]
// 6: [2, 3, 5, 7, 11, 13] [17]
// 7: [2. 3. 5. 7. 11. 13. 17]

let deck = [17,13,11,2,3,5,7]
let newDeck = [...deck] 
const sorter = (array) => {
    for (i>0; i < array.length; i++) {
        newDeck.push(array[i])
        if 
    }
}
