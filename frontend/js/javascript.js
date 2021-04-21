

//Prepare api request
let apiRequest = new XMLHttpRequest();
apiRequest.onreadystatechange = () => {
  if (apiRequest.readyState === 4) { // If API finishes loading stages
    
    if (apiRequest.status == 404) { //Creates error message
      alert("We're sorry! The page you're looking for can't be found.")
    } else if (apiRequest.status == 500) {
      alert("Server error. We're working quickly to resolve the issue, please try again later.")
    } else { //Parses JSON response objects to text and displays requested information
      
      response = JSON.parse(apiRequest.response);
  
        response.forEach((item, index) => {
            document.getElementsByClassName('name')[index].textContent = item.name;
            document.getElementsByClassName('description')[index].textContent = item.description;
            document.getElementsByClassName('price')[index].textContent = `$${item.price/100}`;
            document.getElementsByClassName('image')[index].src = item.imageUrl;
        });
    }
  }
};

window.addEventListener('load', () => {
  apiRequest.open('GET', 'http://localhost:3000/api/teddies');
  apiRequest.send();
})
;




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let apiRequest2 = new XMLHttpRequest();
// apiRequest2.onreadystatechange = () => {
//   if (apiRequest2.readyState === 4) {
//     //Creates error message
//     if (apiRequest2.status == 404) {
//       alert("We're sorry! The page you're looking for can't be found.")
//     } else if (apiRequest2.status == 500) {
//       alert("Server error. We're working quickly to resolve the issue, please try again later.")
//     } else {
//       //Parses JSON response objects to text and displays requested information
//       response = JSON.parse(apiRequest2.response);
    
//         // API WILL RETURN ** ONE ** response object based on the url 


   
//             console.log(response);
       
//       //WRITE CODE HERE TO POPULATE SINGLE-ITEM.HTML WITH CONTENT 
            

//     }
//   }
// };



//generate an ID variable when button is clicked!!!




// When button is clicked, the value of ID is appeneded to the end of the URL insise the GET request. 
// Depending on the ID, different content will be rendered on the page.

// document.getElementByClassName('btn').addEventListener('click', ($event) => {
//   let id = $event.target._id;
//   // apiRequest2.open('GET', `http://localhost:3000/api/teddies/${id}`);
//   // apiRequest2.send();
//   console.log(id);
// });






