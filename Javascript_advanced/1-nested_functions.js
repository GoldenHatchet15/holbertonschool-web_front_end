// Declare globalVariable
const globalVariable = 'Welcome';

function outer() {
  // Alert the content of globalVariable
  alert(globalVariable);
  
  // Declare course variable
  const course = 'Holberton';

  function inner() {
    // Alert the content of globalVariable and course concatenated
    alert(globalVariable + ' ' + course);
    
    // Declare exclamation variable
    const exclamation = '!';

    function inception() {
      // Alert the content of globalVariable, course, and exclamation concatenated
      alert(globalVariable + ' ' + course + exclamation);
    }
    
    // Call inception function
    inception();
  }

  // Call inner function
  inner();
}

// Call outer function
outer();
