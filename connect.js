document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a, .navbar a, .main-nav a");

    navLinks.forEach(link => {
        const pageName = link.textContent.trim().toLowerCase();

        // Assign links based on the text inside the <a> tag
        if (pageName === 'home') {
            link.href = "homepage.html";
        } else if (pageName.includes('about')) {
            link.href = "ABoutus.html";
        } else if (pageName.includes('account')) {
            link.href = "signup.html";
        } else if (pageName.includes('product')) {
            link.href = "homepage.html"; // Links to the main product listing
        } else {
            // For links we don't have separate pages for (Contact, Wishlist, Personal growth)
            link.href = "#"; 
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Yes, this is functional (Page coming soon)");
            });
        }
    });
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.style.cursor = "pointer";

        card.addEventListener("click", function() {
            // Read the H4 text inside the card to know which product it is
            const productTitle = card.querySelector("h4").innerText.toLowerCase();

            if (productTitle.includes("whey")) {
                window.location.href = "Whey.html"; // Matches your 'Whey.html'
            } else if (productTitle.includes("creatine")) {
                window.location.href = "creatine.html"; // Matches your 'creatine.html'
            } else if (productTitle.includes("protein")) {
                window.location.href = "Whey.html";
            } else {
                alert("Yes, this product card is functional!");
            }
        });
    });
    const logos = document.querySelectorAll(".logo, .brand-name, .main-logo");
    logos.forEach(logo => {
        logo.style.cursor = "pointer";
        logo.addEventListener("click", () => {
            window.location.href = "homepage.html";
        });
    });
    // This targets buttons that are NOT links, so we don't break navigation
    const interactiveElements = document.querySelectorAll(
        "button, .fa-magnifying-glass, .fa-cart-shopping, .fa-heart, .search-btn, .cart-btn, .profile-btn, .cta-btn, .btn-add-cart, .add-cart, .tab-btn, .social-icons i, .footer-socials a"
    );

    interactiveElements.forEach(element => {
        element.addEventListener("click", function (event) {
            // Check if this element is inside a link. If so, let the link work.
            if (element.closest('a')) return;

            // Otherwise, show the popup
            event.preventDefault();
            event.stopPropagation();
            alert("Yes, this is functional");
        });
    });
    
    // Handle Forms (like the email signup)
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Yes, this is functional");
        });
    });
});