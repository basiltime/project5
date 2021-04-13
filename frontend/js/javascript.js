const norbertName = document.getElementsByClassName('name')[0];
const norbertDescription = document.getElementsByClassName('description')[0];
const norbertPrice = document.getElementsByClassName('price')[0];
const norbertImage = document.getElementsByClassName('image')[0];

const arnoldName = document.getElementsByClassName('name')[1];
const arnoldDescription = document.getElementsByClassName('description')[1];
const arnoldPrice = document.getElementsByClassName('price')[1];
const arnoldImage = document.getElementsByClassName('image')[1];

const lennyAndCarlName = document.getElementsByClassName('name')[2];
const lennyAndCarlDescription = document.getElementsByClassName('description')[2];
const lennyAndCarlPrice = document.getElementsByClassName('price')[2];
const lennyAndCarlImage = document.getElementsByClassName('image')[2];

const gustavName = document.getElementsByClassName('name')[3];
const gustavDescription = document.getElementsByClassName('description')[3];
const gustavPrice = document.getElementsByClassName('price')[3];
const gustavImage = document.getElementsByClassName('image')[3];

const garfunkleName = document.getElementsByClassName('name')[4];
const garfunkleDescription = document.getElementsByClassName('description')[4];
const garfunklePrice = document.getElementsByClassName('price')[4];
const garfunkleImage = document.getElementsByClassName('image')[4];
//Prepare api request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
    //Creates error message
    if (apiRequest.status == 404) {
      alert("We're sorry! The page you're looking for can't be found. There seems to be a problem on our end.")
    } else if (apiRequest.status == 500) {
      alert("Hmm, something went wrong. The server could not be reached. Please try again in a few minutes, and we'll work to fix the problem.")
    } else {
      //Parses JSON response objects to text and displays requested information
      response = JSON.parse(apiRequest.response);

      //Stores each item object into a variable      
      let norbert = response[0];
        norbertName.textContent = norbert.name;
        norbertDescription.textContent = norbert.description;
        norbertPrice.textContent = "$" + norbert.price/100;
        norbertImage.src = norbert.imageUrl;
        

      let arnold = response[1];
        arnoldName.textContent = arnold.name;
        arnoldDescription.textContent = arnold.description;
        arnoldPrice.textContent = "$" + arnold.price/100;
        arnoldImage.src = arnold.imageUrl;
        

      let lennyAndCarl = response[2];
        lennyAndCarlName.textContent = lennyAndCarl.name;
        lennyAndCarlDescription.textContent = lennyAndCarl.description;
        lennyAndCarlPrice.textContent = "$" + lennyAndCarl.price/100;
        lennyAndCarlImage.src = lennyAndCarl.imageUrl;
        

      let gustav = response[3];
        gustavName.textContent = gustav.name;
        gustavDescription.textContent = gustav.description;
        gustavPrice.textContent = "$" + gustav.price/100;
        gustavImage.src = gustav.imageUrl;
        

      let garfunkle = response[4];
        garfunkleName.textContent = garfunkle.name;
        garfunkleDescription.textContent = garfunkle.description;
        garfunklePrice.textContent = "$" + garfunkle.price/100;
        garfunkleImage.src = garfunkle.imageUrl;

     
      }
  }
};

window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
})
;
 


//////////////////////////////////////////////////////////////////////////////////////////////////////


