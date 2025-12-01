// AXON Product Listing - JavaScript Interactivity
// Phase 5: JavaScript Alerts & Console Integration

// ==================== SEARCH FUNCTIONALITY ====================
const searchInput = document.querySelector('.search-container input');
const searchIcon = document.querySelector('.icon-search');

// Console Log #1: Search queries
searchInput.addEventListener('input', function() {
  console.log('Search query entered:', this.value);
  console.log('Search timestamp:', new Date().toLocaleTimeString());
});

// Alert #1: Search submission
searchIcon.addEventListener('click', function() {
  const query = searchInput.value.trim();
  if (query === '') {
    alert('Please enter a search term to find products.');
  } else {
    alert(`Searching for: "${query}"\n\nResults will be displayed shortly!`);
    console.log('Search initiated for:', query);
    // Clear search after submission
    searchInput.value = '';
  }
});

// Allow Enter key for search
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    searchIcon.click();
  }
});

// ==================== CART FUNCTIONALITY ====================
const cartIcon = document.querySelector('.icon-cart');
let cartCount = 0;

cartIcon.addEventListener('click', function() {
  console.log('Cart icon clicked. Current items in cart:', cartCount);
  if (cartCount === 0) {
    alert('Your cart is empty!\n\nBrowse our products and add items to get started.');
  } else {
    alert(`You have ${cartCount} item(s) in your cart.\n\nProceed to checkout?`);
  }
});

// ==================== PRODUCT CARD INTERACTIONS ====================
const productCards = document.querySelectorAll('.card');

productCards.forEach((card, index) => {
  const productName = card.querySelector('.name').textContent;
  const productPrice = card.querySelector('.price').textContent;
  const productImage = card.querySelector('img');
  
  // Console Log #2: Product interactions
  card.addEventListener('click', function(e) {
    // Don't trigger if clicking the price button
    if (!e.target.classList.contains('price')) {
      console.log('Product viewed:', {
        name: productName,
        price: productPrice,
        index: index + 1
      });
    }
  });
  
  // Hover effect logging
  card.addEventListener('mouseenter', function() {
    console.log('User hovering over:', productName);
  });
  
  // Add to cart functionality on price button
  const priceButton = card.querySelector('.price');
  priceButton.style.cursor = 'pointer';
  
  // Alert #2: Add to cart confirmation
  priceButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent card click event
    
    const confirmAdd = confirm(`Add ${productName} to cart?\n\nPrice: ${productPrice}\n\nClick OK to confirm.`);
    
    if (confirmAdd) {
      cartCount++;
      alert(`✓ ${productName} added to cart successfully!\n\nTotal items: ${cartCount}`);
      console.log('Product added to cart:', {
        name: productName,
        price: productPrice,
        cartTotal: cartCount
      });
    } else {
      console.log('User cancelled adding product to cart');
    }
  });
});

// ==================== NAVIGATION LINKS ====================
const navLinks = document.querySelectorAll('.main-nav a');

// Console Log #3: Navigation tracking
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default navigation
    const linkText = this.textContent;
    console.log('Navigation clicked:', linkText);
    console.log('Navigation timestamp:', new Date().toLocaleString());
    console.log('Previous page: Products');
    
    // Alert #3: Navigation confirmation for critical pages
    if (linkText === 'Account' || linkText === 'Wishlist') {
      alert(`Navigating to ${linkText}...\n\nYou will be redirected shortly.`);
    }
  });
});

// ==================== FOOTER SOCIAL LINKS ====================
const footerIcons = document.querySelectorAll('.footer-icons span');

footerIcons.forEach((icon, index) => {
  icon.style.cursor = 'pointer';
  icon.addEventListener('click', function() {
    const socialMedia = ['Facebook', 'Instagram', 'Website'];
    console.log('Social media icon clicked:', socialMedia[index]);
    alert(`Opening ${socialMedia[index]}...\n\nYou will be redirected to our ${socialMedia[index]} page.`);
  });
});

// ==================== STAR RATING INTERACTION ====================
const starRatings = document.querySelectorAll('.stars');

starRatings.forEach(stars => {
  stars.style.cursor = 'pointer';
  stars.addEventListener('click', function() {
    const card = this.closest('.card');
    const productName = card.querySelector('.name').textContent;
    const rating = this.textContent.length;
    console.log('Product rating viewed:', {
      product: productName,
      rating: rating + '/5 stars'
    });
  });
});

// ==================== INITIAL PAGE LOAD ====================
console.log('=== AXON Product Listing Page Loaded ===');
console.log('Total products displayed:', productCards.length);
console.log('Page loaded at:', new Date().toLocaleString());
console.log('Ready for user interaction');
console.log('========================================');