console.log("Product page loaded.");


// ---------------- THUMBNAIL SWITCH ---------------- //

const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImage = document.querySelector(".main-image");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
        alert("Image changed.");
        console.log("Thumbnail clicked:", thumb.src);
    });
});


// ---------------- QUANTITY COUNTER ---------------- //

const qtyBox = document.querySelector(".quantity-box");
const qtyMinus = qtyBox.querySelector("button:nth-child(1)");
const qtyInput = qtyBox.querySelector("input");
const qtyPlus = qtyBox.querySelector("button:nth-child(3)");

qtyPlus.addEventListener("click", () => {
    let qty = parseInt(qtyInput.value);
    qty++;
    qtyInput.value = qty;
    console.log("Quantity changed to:", qty);
});

qtyMinus.addEventListener("click", () => {
    let qty = parseInt(qtyInput.value);

    if (qty === 1) {
        alert("Quantity cannot be less than 1.");
        return;
    }

    qty--;
    qtyInput.value = qty;
    console.log("Quantity changed to:", qty);
});


// ---------------- ADD TO CART BUTTON ---------------- //

const addCartBtn = document.querySelector(".add-to-cart");
const stockBadge = document.querySelector(".stock");

addCartBtn.addEventListener("click", () => {
    if (stockBadge.textContent.includes("Out of Stock")) {
        alert("This item is currently out of stock.");
        return;
    }

    alert("Product added to cart successfully!");
    console.log("Add to cart clicked");
});


// ---------------- WISHLIST LOG ---------------- //

const wishlistCheckbox = document.querySelector('.options input[type="checkbox"]');

wishlistCheckbox.addEventListener("click", () => {
    console.log("Wishlist clicked.");
});
