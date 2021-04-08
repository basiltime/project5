const crossTableName = document.getElementsByClassName('name')[0];
const crossTableDescription = document.getElementsByClassName('description')[0];
const crossTablePrice = document.getElementsByClassName('price')[0];
const crossTableImage = document.getElementsByClassName('image')[0];

const coffeeTableName = document.getElementsByClassName('name')[1];
const coffeeTableDescription = document.getElementsByClassName('description')[1];
const coffeeTablePrice = document.getElementsByClassName('price')[1];
const coffeeTableImage = document.getElementsByClassName('image')[1];

const diningTableName = document.getElementsByClassName('name')[2];
const diningTableDescription = document.getElementsByClassName('description')[2];
const diningTablePrice = document.getElementsByClassName('price')[2];
const diningTableImage = document.getElementsByClassName('image')[2];

const benchName = document.getElementsByClassName('name')[3];
const benchDescription = document.getElementsByClassName('description')[3];
const benchPrice = document.getElementsByClassName('price')[3];
const benchImage = document.getElementsByClassName('image')[3];

const vintageChairName = document.getElementsByClassName('name')[4];
const vintageChairDescription = document.getElementsByClassName('description')[4];
const vintageChairPrice = document.getElementsByClassName('price')[4];
const vintageChairImage = document.getElementsByClassName('image')[4];
// Prepare api request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) {
    // Creates error message
    if (apiRequest.status == 404) {
      alert("We're sorry! The page you're looking for can't be found. There seems to be a problem on our end.")
    } else if (apiRequest.status == 500) {
      alert("Hmm, something went wrong. The server could not be reached. Please try again in a few minutes, and we'll work to fix the problem.")
    } else {
      // Parses JSON response objects to text and displays requested information
      response = JSON.parse(apiRequest.response);
      // Stores each item object into a variable      
      let crossTable = response[0];
        crossTableName.textContent = `${crossTable.name}`;
        crossTableDescription.textContent = `${crossTable.description}`;
        //crossTableImage.innerHTML = ;
        crossTablePrice.textContent = `${crossTable.price}`;
      let coffeeTable = response[1];
        coffeeTableName.textContent = `${coffeeTable.name}`;
        coffeeTableDescription.textContent = `${coffeeTable.description}`;
        //crossTableImage.innerHTML = ;
        coffeeTablePrice.textContent = `${coffeeTable.price}`;
      let diningTable = response[2];
        diningTableName.textContent = `${diningTable.name}`;
        diningTableDescription.textContent = `${diningTable.description}`;
        //crossTableImage.innerHTML = ;
        diningTablePrice.textContent = `${diningTable.price}`;
      let bench = response[3];
        benchName.textContent = `${bench.name}`;
        benchDescription.textContent = `${bench.description}`;
        //crossTableImage.innerHTML = ;
        benchPrice.textContent = `${bench.price}`;
      let vintageChair = response[4];
        vintageChairName.textContent = `${vintageChair.name}`;
        vintageChairDescription.textContent = `${vintageChair.description}`;
        //crossTableImage.innerHTML = ;
        vintageChairPrice.textContent = `${vintageChair.price}`;
      
      }
     
  }
  
};





window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/furniture');
  apiRequest.send();
});
 



