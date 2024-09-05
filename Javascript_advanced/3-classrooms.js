function createClassRoom(numbersOfStudents) {
    // Function to create a closure for the seat number
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    // Create an array to hold the students
    let students = [];
  
    // Loop through the number of students and add the seat functions to the array
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Return the array of functions
    return students;
  }
  
  // Create a classroom with 10 students
  const classRoom = createClassRoom(10);
  
  // Testing the output
  console.log(classRoom[0]());
  console.log(classRoom[3]()); 
  console.log(classRoom[9]()); 
  