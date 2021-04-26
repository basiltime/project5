// Get the items's ID from the URL string
const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");


// Event listener to send GET request on load
window.addEventListener('load', (itemId) => {
  apiRequest2.open('GET', `http://localhost:3000/api/teddies/${id}`);
  apiRequest2.send();
});


// GET request body
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

      // Populate the DOM with name, price, image and description
      document.getElementById('name').textContent=response.name;
      document.getElementById('price').textContent=`$${response.price/100}`;
      document.getElementById('image').setAttribute('src', response.imageUrl);
      document.getElementById('description').textContent=response.description;

  /*
  Improve this code by making into a loop
  */
      document.getElementById('option1').textContent = response.colors[0];
      document.getElementById('option2').textContent = response.colors[1];
      document.getElementById('option3').textContent = response.colors[2];
    }
  }
};


const addToCart = itemID => {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, 1)
    console.log(localStorage)
    } else {
      let addOne = parseInt(localStorage.getItem(id)) +1;
      localStorage.setItem(id, addOne);
      console.log(localStorage)
    }
  }

const removeItem = itemID => {
  let minusOne = parseInt(localStorage.getItem(id)) -1;

      if (parseInt(localStorage.getItem(id)) >= 1 ) {
      localStorage.setItem(id, minusOne);
      console.log(localStorage);
      } else {
      localStorage.removeItem(id);
      console.log(localStorage)
      }
}
 

// Add to Cart event listener
document.getElementById('addToCartBtn').addEventListener('click', ($event) => {
  $event.preventDefault();
  addToCart(id);

});


// Remove item event listener
document.getElementById('removeItemBtn').addEventListener('click', ($event) => {
  $event.preventDefault();
  removeItem(id);

});


////////////////////////////////////////////////////////////////////////
// Write logic to add the total number of items in the cart here
////////////////////////////////////////////////////////////////////////
document.getElementById('cartQty').textContent= localStorage.length;