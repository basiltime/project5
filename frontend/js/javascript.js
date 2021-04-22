//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////  LIST VIEW PAGE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            document.getElementsByClassName('name')[index].textContent = item.name;
            document.getElementsByClassName('description')[index].textContent = item.description;
            document.getElementsByClassName('price')[index].textContent = `$${item.price/100}`;
            document.getElementsByClassName('image')[index].src = item.imageUrl;
            buttons[index].setAttribute('name', `${item._id}`);

        })
    }
    
  }
};


window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
})
;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////  SINGLE PRODUCT PAGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let apiRequest2 = new XMLHttpRequest();
apiRequest2.onreadystatechange = () => {
  if (apiRequest2.readyState === 4) {
    //Creates error message
    if (apiRequest2.status == 404) {
      alert("We're sorry! The page you're looking for can't be found.")
    } else if (apiRequest2.status == 500) {
      alert("Server error. We're working quickly to resolve the issue, please try again later.")
    } else {
      //Parses JSON response objects to text and displays requested information
      response = JSON.parse(apiRequest2.response);


      console.log(response.name);
      
      // I expected the below code to work, but it doesn't. Figure out how to get my response to actually appear as content in single-item.html.
  
      // document.getElementById('name').textContent = 'hello';
    
            

    }
  }
};





// A loop for adding an event listener to each button

let buttons= document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++ ) {
  document.getElementsByClassName('btn')[i].addEventListener('click', ($event) => {
    apiRequest2.open('GET', `http://localhost:3000/api/teddies/${buttons[i].getAttribute('name')}`);
    apiRequest2.send();
 
  });
}











