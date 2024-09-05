// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to count prime numbers from 2 to 100
  function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    return count;
  }
  
  // Measure execution time
  const startTime = performance.now();
  countPrimeNumbers();
  const endTime = performance.now();
  
  // Log execution time
  console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
  