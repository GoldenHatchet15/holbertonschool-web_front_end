// Log the start of the execution queue
console.log('Start of the execution queue');

// Set a timeout with a delay of 0 to log the final message
setTimeout(function() {
  console.log('Final code block to be executed');
}, 0);

// Loop through 100 iterations, logging each iteration number
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Log the end of the loop
console.log('End of the loop printing');
