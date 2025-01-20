const cartCounter = document.querySelector('.cart-counter');
let cartItemCount = 0; 

const updateCartCounter = () => {
  cartCounter.textContent = cartItemCount;
};

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartItemCount++;
    updateCartCounter();
  });
});