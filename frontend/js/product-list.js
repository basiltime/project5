window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
});

let apiRequest = new XMLHttpRequest();


apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) { // If API finishes loading stages
    
    if (apiRequest.status == 404) { //Creates error message
      alert("We're sorry! The page you're looking for can't be found.")
    } else if (apiRequest.status == 500) {
      alert("Server error. We're working quickly to resolve the issue, please try again later.")
    } else { //Parses JSON response objects to text and displays requested information
      
      response = JSON.parse(apiRequest.response);
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
















