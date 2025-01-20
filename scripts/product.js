const addCartButton = document.querySelector('.add-to-cart button');
const cartCounter = document.querySelector('.cart-counter');
const quantityInput = document.getElementById('quantity');
let cartItemCount = 0;

addCartButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  const quantity = parseInt(quantityInput.value); 
  cartItemCount += quantity; 
  cartCounter.textContent = cartItemCount; 
});