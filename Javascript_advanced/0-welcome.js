function welcome(firstName, lastName) {
    // Declare fullName variable
    const fullName = firstName + ' ' + lastName;
    
    // Define displayFullName function
    function displayFullName() {
      // Display alert with fullName
      alert('Welcome ' + fullName + '!');
    }
    
    // Call displayFullName function
    displayFullName();
  }
  
  // To test, call the function:
  welcome('Holberton', 'School');