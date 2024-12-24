# Case-Insensitive Search Bug in MongoDB

This repository demonstrates a common bug in MongoDB when performing case-insensitive searches using regular expressions. The original code uses a regular expression with the `i` flag for case-insensitive matching, which may lead to unexpected behavior or performance degradation due to index ineffectiveness.

## Bug

The `bug.js` file shows how a simple case-insensitive search can cause performance issues if not handled correctly.

## Solution

The `bugSolution.js` file demonstrates the correct way to perform case-insensitive searches, utilizing MongoDB's built-in case-insensitive indexing and query operators for optimal performance and accuracy.
