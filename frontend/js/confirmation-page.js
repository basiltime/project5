let id = document.getElementById('id')
let price = document.getElementById('price')
id.textContent = localStorage.getItem('id');
price.textContent = localStorage.getItem('price')
localStorage.clear();
document.getElementById('cartQty').classList.remove('d-flex');
document.getElementById('cartQty').classList.add('d-none');

