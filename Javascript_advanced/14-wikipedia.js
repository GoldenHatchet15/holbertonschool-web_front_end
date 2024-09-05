// Function to create and append a paragraph element with the data
function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
  }
  
  // Function to query Wikipedia and fetch Stack Overflow article
  function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        const response = JSON.parse(xhr.responseText);
        const pages = response.query.pages;
        const extract = pages[Object.keys(pages)[0]].extract;
        
        // Call the callback with the extract
        callback(extract);
      }
    };
  
    xhr.onerror = function() {
      console.error('Error fetching the data.');
    };
  
    xhr.send();
  }
  
  // Call queryWikipedia with createElement as the callback
  queryWikipedia(createElement);
  