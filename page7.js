// AXON Contact Page - JavaScript Interactivity
// Phase 5: JavaScript Alerts & Console Integration

// ==================== SEARCH FUNCTIONALITY ====================
const searchInput = document.querySelector('.search-container input');
const searchIcon = document.querySelector('.icon-search');

// Console Log #1: Search queries
searchInput.addEventListener('input', function() {
  console.log('Search query entered:', this.value);
  console.log('Search timestamp:', new Date().toLocaleTimeString());
});

searchIcon.addEventListener('click', function() {
  const query = searchInput.value.trim();
  if (query === '') {
    alert('Please enter a search term to find products.');
  } else {
    alert(`Searching for: "${query}"\n\nResults will be displayed shortly!`);
    console.log('Search initiated for:', query);
    searchInput.value = '';
  }
});

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

// ==================== CONTACT FORM VALIDATION ====================
const contactForm = document.querySelector('.contact-form');
const emailInput = contactForm.querySelector('input[type="text"]');
const subjectSelect = contactForm.querySelector('select');
const messageTextarea = contactForm.querySelector('textarea');
const sendButton = contactForm.querySelector('.send-btn');

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Console Log #2: Form input tracking
emailInput.addEventListener('input', function() {
  console.log('Email input changed:', this.value);
  console.log('Email valid:', isValidEmail(this.value));
});

subjectSelect.addEventListener('change', function() {
  console.log('Subject selected:', this.value);
});

messageTextarea.addEventListener('input', function() {
  console.log('Message length:', this.value.length, 'characters');
  if (this.value.length > 0) {
    console.log('Message preview:', this.value.substring(0, 50) + '...');
  }
});

// Alert #1: Form validation and submission
sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const subject = subjectSelect.value;
  const message = messageTextarea.value.trim();
  
  console.log('=== Form Submission Attempt ===');
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message length:', message.length);
  console.log('Timestamp:', new Date().toLocaleString());
  
  // Validation checks
  if (email === '') {
    alert('⚠️ Please enter your email address.\n\nWe need your email to respond to your message.');
    console.log('Validation failed: Email is empty');
    return;
  }
  
  if (!isValidEmail(email)) {
    alert('⚠️ Please enter a valid email address.\n\nExample: yourname@example.com');
    console.log('Validation failed: Invalid email format');
    return;
  }
  
  if (subject === 'Select Subject') {
    alert('⚠️ Please select a subject for your message.\n\nThis helps us direct your inquiry to the right department.');
    console.log('Validation failed: No subject selected');
    return;
  }
  
  if (message === '') {
    alert('⚠️ Please write a message.\n\nLet us know how we can help you!');
    console.log('Validation failed: Message is empty');
    return;
  }
  
  if (message.length < 10) {
    alert('⚠️ Please provide more details in your message.\n\nYour message should be at least 10 characters long.');
    console.log('Validation failed: Message too short');
    return;
  }
  
  // Alert #2: Successful submission
  alert(`✓ Message sent successfully!\n\nThank you for contacting AXON!\n\nWe'll respond to ${email} within 24-48 hours.`);
  
  console.log('✓ Form submitted successfully!');
  console.log('Form data:', {
    email: email,
    subject: subject,
    messageLength: message.length,
    timestamp: new Date().toLocaleString()
  });
  
  // Clear form
  emailInput.value = '';
  subjectSelect.value = 'Select Subject';
  messageTextarea.value = '';
  
  console.log('Form cleared and ready for new submission');
});

// ==================== NAVIGATION LINKS ====================
const navLinks = document.querySelectorAll('.main-nav a');

// Console Log #3: Navigation tracking
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const linkText = this.textContent;
    console.log('Navigation clicked:', linkText);
    console.log('Current page: Contact');
    console.log('Navigation timestamp:', new Date().toLocaleString());
    
    if (linkText === 'Products') {
      alert('Navigating to Products page...\n\nExplore our full range of fitness supplements and equipment!');
    } else if (linkText === 'Home') {
      alert('Returning to Home page...');
    }
  });
});

// ==================== FAQ INTERACTIONS ====================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item, index) => {
  item.style.cursor = 'pointer';
  item.style.transition = 'transform 0.2s';
  
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
  
  item.addEventListener('click', function() {
    const faqTopics = ['Product Replacement Policy', 'Broken Item Policy', 'Return & Refund Policy'];
    console.log('FAQ clicked:', faqTopics[index]);
    console.log('FAQ content:', this.textContent);
    
    // Alert #3: FAQ details
    alert(`${faqTopics[index]}\n\n${this.textContent}\n\nFor more information, contact our support team!`);
  });
});

// ==================== CONTACT INFO INTERACTIONS ====================
const phoneInfo = document.querySelector('.info-item:nth-of-type(1)');
const emailInfo = document.querySelector('.info-item:nth-of-type(2)');
const addressInfo = document.querySelector('.info-item:nth-of-type(3)');

[phoneInfo, emailInfo, addressInfo].forEach(item => {
  if (item) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      const text = this.textContent.trim();
      console.log('Contact info clicked:', text);
      
      if (text.includes('+90')) {
        alert('📞 Call us at:\n+90 202 1502944\n\nOur support team is available 9 AM - 6 PM EST');
      } else if (text.includes('@')) {
        alert('✉️ Email us at:\naxonsupport@gmail.com\n\nWe typically respond within 24 hours');
      } else {
        alert('📍 Visit us at:\n100 Dartmouth Street\nBoston, Massachusetts 02156\nUnited States');
      }
    });
  }
});

// ==================== FOOTER SOCIAL LINKS ====================
const footerIcons = document.querySelectorAll('.footer-icons span');

footerIcons.forEach((icon, index) => {
  icon.style.cursor = 'pointer';
  icon.addEventListener('click', function() {
    const socialMedia = ['Facebook', 'Phone', 'Website', 'Other'];
    console.log('Footer icon clicked:', socialMedia[index]);
    
    if (index === 0) {
      alert('Opening AXON Facebook page...\n\nFollow us for updates and promotions!');
    } else if (index === 1) {
      alert('📞 Call us:\n+90 202 1502944\n\nSupport hours: 9 AM - 6 PM EST');
    } else if (index === 2) {
      alert('Opening AXON website...\n\nExplore our full range of products!');
    }
  });
});

// ==================== INITIAL PAGE LOAD ====================
console.log('=== AXON Contact Page Loaded ===');
console.log('Page loaded at:', new Date().toLocaleString());
console.log('Contact form ready for input');
console.log('FAQ items:', faqItems.length);
console.log('Ready for user interaction');
console.log('====================================');