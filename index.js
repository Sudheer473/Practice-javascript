// Function for Problem 1
function sumOfFirstNNaturalNumbers(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
N = 5;
console.log(sumOfFirstNNaturalNumbers(N)); //Output: 15



// Function for problem 2
function countEvenNumbers(arr) {
    let evenCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        }
    }

    return evenCount;
}
arr = [1, 2, 3, 4, 5, 6];
result = countEvenNumbers(arr);
console.log("Number of even numbers:", result);  // Output: 3



// Function for problem 4
function sumArrayElements(arr) {
    let sum = 0;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add each element to the sum
    }

    return sum;
}
arr = [1, 2, 3, 4, 5];
result = sumArrayElements(arr);
console.log("Sum of array elements:", result);  // output: 15



// Function for problem 5
function factorial(N) {
    if (N === 0 || N === 1) {

        return 1;
    }
    return N * factorial(N - 1);
}
N = 4;
console.log(factorial(N));  // Output: 24


// Function for problem 6
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
arr = [1, 3, 7, 2, 5];
console.log(findMax(arr));  // Output: 7



// Function for problem 7
function countOddNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
arr = [1, 2, 3, 4, 5, 6];
console.log(countOddNumbers(arr));  // Output: 3