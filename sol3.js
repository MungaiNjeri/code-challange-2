function isPrime(num) {
    if (num <= 1) {
        return false;
    }
   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }    
    }
   
    return true;
}

function getPrimeNumbers(arr) {
    const primeNumbers = [];
  
    for (let num of arr) {
        if (isPrime(num)) {
            primeNumbers.push(num); 
        }
    }
    
    return primeNumbers;
}

const arr = [61, 2, 3, 4, 5, 6, 29, 8, 23, 17];
console.log(getPrimeNumbers(arr));



//First, we make sure n is greater than 1 because 1 is not considered a prime number
//we start from 2 and go up to the square root of n
//For each number i in this range, we check if n is divisible by i.
//If n is divisible by any number in this range (other than 1 and itself), then it's not a prime number.
// Helper function to check if a number is prime