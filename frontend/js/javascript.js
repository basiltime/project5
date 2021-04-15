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
    

        names = document.getElementsByClassName('name');
        descriptions = document.getElementsByClassName('description');
        prices = document.getElementsByClassName('price');
        images= document.getElementsByClassName('image');
        
        response.forEach((item, index) => {
            names[index].textContent = item.name;
            descriptions[index].textContent = item.description;
            prices[index].textContent = item.price;
            images[index].src = item.imageUrl;
        });

    }
  }
};

window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
})
;
 


//////////////////////////////////////////////////////////////////////////////////////////////////////












