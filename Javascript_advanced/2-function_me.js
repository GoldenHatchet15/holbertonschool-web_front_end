// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // Return a closure that displays an alert
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create the three variables by calling welcomeMessage
  const guillaume = welcomeMessage('Guillaume');
  const alex = welcomeMessage('Alex');
  const fred = welcomeMessage('Fred');
  
  // Now you call the functions to test
  guillaume();
  alex();
  fred();
  