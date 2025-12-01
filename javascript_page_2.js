console.log("Signup page loaded successfully.");

const emailInput = document.querySelector(".input-email");
const signUpBtn = document.querySelector(".btn-email");

signUpBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("User attempted to sign up with email.");

    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Account created successfully!");
});

const googleBtn = document.querySelector(".btn-google");

googleBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Google sign-in is currently unavailable. Please try again later.");
    console.log("User clicked Google login button.");
});

const rememberCheckbox = document.querySelector(".remember input");

rememberCheckbox.addEventListener("change", function () {
    if (rememberCheckbox.checked) {
        console.log("User enabled 'Remember Me'.");
    } else {
        console.log("User disabled 'Remember Me'.");
    }
});
