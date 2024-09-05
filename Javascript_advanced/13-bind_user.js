// Define the user object
const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
  };
  
  // Define the logWelcomeUser function
  function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
  }
  
  // Bind logWelcomeUser function to the user object
  const bindLogWelcomeUser = logWelcomeUser.bind(user);
  
  // Call the function with the string 'Welcome'
  bindLogWelcomeUser('Welcome'); // Should log: "Welcome, Buillaume. Your occupation is: Engineer"
  