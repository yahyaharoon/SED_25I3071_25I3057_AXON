// -------------------- Home Navigation --------------------
document.querySelector('.main-logo').addEventListener('click', function() {
    alert("Going to Home Page!");
    // You can replace alert with: window.location.href = "index.html";
});

document.querySelector('.main-nav ul li a.active').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default link for demo
    alert("Home link clicked!");
    // You can replace alert with: window.location.href = "index.html";
});

// -------------------- Add to Cart Buttons --------------------
const addCartButtons = document.querySelectorAll('.product-btn');

addCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Product added to cart!");
    });
});

// -------------------- Header Functional Buttons --------------------
const searchBtn = document.querySelector('.search-btn');
const cartBtn = document.querySelector('.cart-btn');
const profileBtn = document.querySelector('.profile-btn');

searchBtn.addEventListener('click', () => {
    alert("Search button clicked!");
});

cartBtn.addEventListener('click', () => {
    alert("Cart button clicked!");
});

profileBtn.addEventListener('click', () => {
    alert("Profile button clicked!");
});
