//Prepare api request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
    //Creates error message
    if (apiRequest.status == 404) {
      alert("We're sorry! The page you're looking for can't be found.")
    } else if (apiRequest.status == 500) {
      alert("Server error. We're working quickly to resolve the issue, please try again later.")
    } else {
      //Parses JSON response objects to text and displays requested information
      response = JSON.parse(apiRequest.response);

    // Stores each item object into a variable      

    const norbertName = document.getElementById('norbert-name').textContent=response[0].name;
    const norbertDescription = document.getElementById('norbert-description').textContent=response[0].description;
    const norbertPrice = document.getElementById('norbert-price').textContent='$'+response[0].price/100;
    const norbertImage = document.getElementById('norbert-image').src=response[0].imageUrl;
    // practice const norbert = response[0]._id;
    // practice console.log(norbert);

    const arnoldName = document.getElementById('arnold-name').textContent=response[1].name;
    const arnoldDescription = document.getElementById('arnold-description').textContent=response[1].description;
    const arnoldPrice = document.getElementById('arnold-price').textContent='$'+response[1].price/100;
    const arnoldImage = document.getElementById('arnold-image').src=response[1].imageUrl;
    
    const lennyAndCarlName = document.getElementById('lennyandcarl-name').textContent=response[2].name;
    const lennyAndCarlDescription = document.getElementById('lennyandcarl-description').textContent=response[2].description;
    const lennyAndCarlPrice = document.getElementById('lennyandcarl-price').textContent='$'+response[2].price/100;
    const lennyAndCarlImage = document.getElementById('lennyandcarl-image').src=response[2].imageUrl;

    const gustavName =document.getElementById('gustav-name').textContent=response[3].name;
    const gustavDescription = document.getElementById('gustav-description').textContent=response[3].description;
    const gustavPrice = document.getElementById('gustav-price').textContent='$'+response[3].price/100;
    const gustavImage = document.getElementById('gustav-image').src=response[3].imageUrl;
    
    const garfunkleName = document.getElementById('garfunkle-name').textContent=response[4].name;
    const garfunkleDescription = document.getElementById('garfunkle-description').textContent=response[4].description;
    const garfunklePrice = document.getElementById('garfunkle-price').textContent='$'+response[4].price/100;
    const garfunkleImage = document.getElementById('garfunkle-image').src=response[4].imageUrl;
    
    }
  }
};

window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
})
;
 


//////////////////////////////////////////////////////////////////////////////////////////////////////


const norbertQueryString = '_id=5be9c8541c9d440000665243';
const myUrlSearchParams = new URLSearchParams(norbertQueryString);



console.log(myUrlSearchParams);
