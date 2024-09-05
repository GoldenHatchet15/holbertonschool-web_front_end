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
  
  // Measure execution time for 100 iterations, using setTimeout to change the stack order
  setTimeout(function() {
    const startTime = performance.now();
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
    const endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
  }, 0);
  
  // Log message to demonstrate delayed calculation
  console.log("Calculation will happen at the end of the execution stack.");
  