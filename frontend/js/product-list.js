window.addEventListener('load', () => {
  apiRequestList.open('GET', 'http://localhost:3000/api/teddies');
  apiRequestList.send();
});

let apiRequestList = new XMLHttpRequest();


apiRequestList.onreadystatechange = () => {
  if (apiRequestList.readyState === 4) { // If API finishes loading stages
    
    if (apiRequestList.status == 404) { //Creates error message
      alert("We're sorry! The page you're looking for can't be found.")
    } else if (apiRequestList.status == 500) {
      alert("Server error. We're working quickly to resolve the issue, please try again later.")
    } else { //Parses JSON response objects to text and displays requested information
      
      response = JSON.parse(apiRequestList.response);
        buttons= document.getElementsByClassName('btn');
        
        response.forEach((item, index) => {
            id = item._id;
            document.getElementsByClassName('name')[index].textContent = item.name;
            document.getElementsByClassName('description')[index].textContent = item.description;
            document.getElementsByClassName('price')[index].textContent = `$${item.price/100}`;
            document.getElementsByClassName('image')[index].src = item.imageUrl;
            buttons[index].setAttribute('href', `frontend/pages/single-item.html?id=${id}`);
            
        })
    }
    
  }
};


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














