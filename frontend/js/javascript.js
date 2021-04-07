
const demo = document.getElementById('demo');

// Access DOM elements
const reportSection = document.getElementById('weather-report');


// Prepare api request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
    // Creates error message
    if (apiRequest.status == 404) {
      alert("Error- no items found")
    } else {
      // Parses JSON response objects to text and displays requested information
      const response = JSON.parse(apiRequest.response);
      demo.textContent= response;
    
        let firstItem = response[0];
        console.log(firstItem.name);
        console.log(firstItem.description);
        console.log(firstItem.imageUrl);
    }
  }
  
};
/* 
 * Capture and handle form submit event
 * Prevent default behaviour, prepare and send API request
*/
window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/furniture');
  apiRequest.send();
});
 


