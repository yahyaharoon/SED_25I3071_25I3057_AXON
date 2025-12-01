// Quantity increment/decrement
const decBtn = document.querySelector('.dec-btn');
const incBtn = document.querySelector('.inc-btn');
const quantityValue = document.querySelector('.quantity-value');

let quantity = 1;

decBtn.addEventListener('click', () => {
    if(quantity > 1){
        quantity--;
        quantityValue.textContent = quantity;
    }
});

incBtn.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
});

// Tab switching
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Add to cart button click
const addCartBtn = document.querySelector('.btn-add-cart');
addCartBtn.addEventListener('click', () => {
    alert(`Added ${quantity} item(s) of Creatine Powder to the cart!`);
});
