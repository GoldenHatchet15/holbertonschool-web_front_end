// Define the roomDimensions object
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
      return this.width * this.length;
    }
  };
  
  // Bind the getArea function to the roomDimensions object
  const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
  
  // Testing the bound function
  console.log(boundGetArea()); // Should return 5000
  