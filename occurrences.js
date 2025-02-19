function generateRandomArray(size, min = 1, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? low = mid + 1 : high = mid - 1;
    }
    return -1;
}

function reverseArray(arr) {
    return arr.reverse();
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePrimeNumbers(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

function capitalizeWords(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

function countOccurrences(arr, target) {
    return arr.filter(num => num === target).length;
}

function main() {
    let arr = generateRandomArray(10, 1, 100);
    console.log("Original Array:", arr);
    console.log("Bubble Sort:", bubbleSort([...arr]));
    console.log("Selection Sort:", selectionSort([...arr]));
    console.log("Insertion Sort:", insertionSort([...arr]));
    console.log("Max Element:", findMax(arr));
    console.log("Min Element:", findMin(arr));
    console.log("Sum of Elements:", sumArray(arr));
    console.log("Average of Elements:", averageArray(arr));
    console.log("Primes up to 50:", generatePrimeNumbers(50));
    console.log("Fibonacci Sequence:", generateFibonacci(10));
    console.log("Factorial of 5:", factorial(5));
    console.log("GCD of 56 and 98:", gcd(56, 98));
    console.log("LCM of 15 and 20:", lcm(15, 20));
    console.log("Longest Word:", findLongestWord(["apple", "banana", "strawberry", "kiwi"]));
    console.log("Capitalized Words:", capitalizeWords(["hello", "world"]));
    console.log("Occurrences of 10:", countOccurrences(arr, 10));
}

main();
