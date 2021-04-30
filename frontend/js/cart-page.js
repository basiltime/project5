let totalDollarAmt = 0;
let myCart = localStorage;

  // Loop through localStorage, adding an event listener to call the GET api and populate the table with 
  // cart values.

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); // item id
    let values = parseInt(localStorage.getItem(key)); // item quantity


    window.addEventListener('load', (id) => {
        apiRequest2.open('GET', `http://localhost:3000/api/teddies/${key}`);
        apiRequest2.send();
    });


    let apiRequest2 = new XMLHttpRequest();
    apiRequest2.onreadystatechange = () => {
    if (apiRequest2.readyState === 4) {
        if (apiRequest2.status == 404) { //Creates error message
        alert("We're sorry! The page you're looking for can't be found.")
        } else if (apiRequest2.status == 500) {
        alert("Server error. We're working quickly to resolve the issue, please try again later.")
        } else {

        //Parses JSON response objects to text and displays requested information
        response = JSON.parse(apiRequest2.response);
        



        // Total Price Calculation
        totalDollarAmt = totalDollarAmt + response.price * values/100;
        let cartTotal = document.getElementById('cart-total');
        cartTotal.textContent= `$${totalDollarAmt}`;
        

        // If item is in cart, display in table
        if (values !== 0) {
        let table = document.getElementById("myTable");
        let row = table.insertRow(1);
        let cell1= row.insertCell(0);
        let cell2= row.insertCell(1);
        let cell3= row.insertCell(2);
        let cell4= row.insertCell(3);

        cell1.textContent = response.name; 
        cell2.textContent = values; // quantity
        cell3.textContent = `$${response.price/100}`;
        cell4.textContent = `$${response.price/100 * values}`; // quantity
        }
        }
    }
    };

  }
  


// Update quantity displayed in cart icon in navbar

  function updateCart() {
    let totalQty = 0;
  
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); // stores each key in the variable
    let values = parseInt(localStorage.getItem(key));
    totalQty= values + totalQty;
  }
  
  return document.getElementById('cartQty').textContent= totalQty;
  }
  
  updateCart();


// Form Validation


let submitButton = document.getElementById('submit-button');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let address = document.getElementById('address');
let city = document.getElementById('city');
let email = document.getElementById('email');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  let productsArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let item = localStorage.key(i); // item id
    productsArray.push(item);
    
  }
  let contactData = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
  }

let data = {
  contact: contactData,
  products: productsArray
}
  
  const xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'http://localhost:3000/api/teddies/order');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.responseType = 'json';
  xhr.send(JSON.stringify(data));
   
  xhr.onload = () => {
    console.log(xhr.response);
  };

});











