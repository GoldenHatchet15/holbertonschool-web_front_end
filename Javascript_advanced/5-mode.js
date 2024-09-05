// Function to change the style of the page
function changeMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size + 'px';
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    // Define the different modes using changeMode
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    // Add a paragraph to the body
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);
  
    // Add buttons and their event listeners
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    document.body.appendChild(spookyButton);
    spookyButton.addEventListener('click', spooky);
  
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    document.body.appendChild(darkModeButton);
    darkModeButton.addEventListener('click', darkMode);
  
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    document.body.appendChild(screamModeButton);
    screamModeButton.addEventListener('click', screamMode);
  }
  
  // Call the main function to set everything up
  main();
  