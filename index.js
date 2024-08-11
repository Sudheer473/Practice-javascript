// Function for problem 1
function sumOfFirstNNaturalNumbers(N) {
    var sum = 0;
    for (i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
var N = 5;
console.log(sumOfFirstNNaturalNumbers(N)); // Output: 15



// Function for problem 2
function countEvenNumbers(arr) {
    var evenCount = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        }
    }

    return evenCount;
}
arr = [1, 2, 3, 4, 5, 6];
result = countEvenNumbers(arr);
console.log("Number of even numbers:", result);  // Output: 3


// Function for problem 3
function reverseArray(arr) {
    var reversedArray = [];
    for (i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - 1 - i];
    }
    return reversedArray;
}
arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]




// Function for problem 4
function sumArrayElements(arr) {
    var sum = 0;
    for (i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
arr = [1, 2, 3, 4, 5];
result = sumArrayElements(arr);
console.log("Sum of array elements:", result);  // output: 15



// Function for problem 5
function factorial(M) {
    var result = 1;
    for (let i = 2; i <= M; i++) {
        result *= i;
    }
    return result;
}
var M = 4;
console.log(factorial(M));  // Output: 24



// Function for problem 6
function findMax(arr) {
    var arr = [1, 3, 7, 2, 5];
    if (arr.length === 0) {
        return undefined;
    }
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));  // Output: 7



// Function for problem 7
function countOddNumbers(arr) {
    var count = 0;
    var arr = [1, 2, 3, 4, 5, 6];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
console.log(countOddNumbers(arr));  // Output: 3





