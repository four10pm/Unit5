// Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. 
// Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. 
// To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. 
// Invoke the inorder function to check the output [4,2,5,1,3]. 

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
        }
        else { this.insertNode(this.root, newNode) }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else { this.insertNode(node.left, newNode) }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else { this.insertNode(node.right, newNode) }
        }
    }

    result = []

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            this.result.push(node.data)
            this.inorder(node.right)
        }
    }

    getData(node) {
        if (node !== null) {
            this.getData(node.left)
            this.getData(node.right)
        }
    }
}

let BST = new BinarySearchTree
BST.insert(4)
BST.insert(2)
BST.insert(5)
BST.insert(1)
BST.insert(3)

BST.inorder(BST.root)
console.log(BST.result, "BST")

let same = new BinarySearchTree
same.insert(5)
same.insert(4)
same.insert(3)
same.insert(2)

// same.inorder(same.root)
console.log(same.result, "same")
// console.log("root", same.root)

const isSameTree = (tree1, tree2) => {
    tree1.inorder(tree1.root)
    tree2.inorder(tree2.root)
    if (tree1.result !== null && tree2.result !== null) {
        console.log("start")
        if (tree1.root.data === tree2.root.data) {
            console.log("root")
            let ans = traverse(tree1.root, tree2.root)
            console.log("ans", ans)
            return (ans)
        } else return false
    } else return false
}

const traverse = (node1, node2) => {
    if (node1.data === node2.data) {
        if (!node1.left && !node1.right) {
            console.log("step1")
            console.log(!node2.left && !node2.right)
            return (!node2.left && !node2.right)
        }
            else if (node1.left?.data === node2.left?.data && node1.right?.data === node2.right?.data) {
                console.log("step2")
                let eqLeft = false
                let eqRight = false
                if (node1.left && node2.left) {
                    console.log("left")
                    eqLeft = traverse (node1.left, node2.left)
                }
                if (node1.right && node2.right) {
                    console.log("right")
                    eqRight = traverse (node1.right, node2.right)
                }
                return eqLeft && eqRight
            }
        } else return false
    } 

let same1 = new BinarySearchTree
same1.insert(1)
same1.insert(2)
same1.insert(3)

let same2 = new BinarySearchTree
same2.insert(1)
same2.insert(2)
same2.insert(3)

console.log("return", isSameTree(same1, same2))
console.log("return", isSameTree(BST, same))

// this works if the tree is balanced ([2, 1, 3] distributes evenly) but not if it is unbalanced ([1, 2, 3] creates only right nodes))

// QUESTION 2
// Create a Node class in JavaScript to build parts of a binary tree. 
// Then, make an 'isSameTree' function. 
// This function checks two binary trees and tells if they are the same or not. 
// Test your function by making two binary trees and comparing them. 
// For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. 

// QUESTION 3
// Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. 
// For complete trees, it uses the formula 2^h - 1. 
// Verify the function using a given root tree. 
// For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.