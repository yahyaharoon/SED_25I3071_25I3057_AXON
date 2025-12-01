console.log("Product page loaded.");

// Thumbnail switch alert + log
const thumbnails = document.querySelectorAll(".thumb-img img");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        document.querySelector(".main-image img").src = thumb.src;
        alert("Image changed.");
        console.log("Thumbnail clicked: " + thumb.src);
    });
});

// Quantity counter logic
const qtySpan = document.querySelector(".quantity-counter span");
const qtyButtons = document.querySelectorAll(".quantity-counter button");

qtyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let qty = parseInt(qtySpan.textContent);

        if (btn.textContent === "+") {
            qty++;
        } else {
            if (qty === 1) {
                alert("Quantity cannot be less than 1.");
                return;
            }
            qty--;
        }

        qtySpan.textContent = qty;
        console.log("Quantity changed to: " + qty);
    });
});

// Add to cart behavior
const addBtn = document.querySelector(".btn-add-cart");
const stockBadge = document.querySelector(".stock-badge");

addBtn.addEventListener("click", () => {
    if (stockBadge.textContent.includes("Out of Stock")) {
        alert("This item is currently out of stock.");
        return;
    }

    alert("Product added to cart successfully!");
});

// Wishlist click log
const wishlist = document.querySelector(".wishlist");

wishlist.addEventListener("click", () => {
    console.log("Wishlist clicked.");
});
