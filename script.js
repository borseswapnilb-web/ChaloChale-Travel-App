document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const bookingMessage = document.getElementById("bookingMessage");
    if (bookingForm) {
        const params = new URLSearchParams(window.location.search);
        const destination = params.get("destination");
        if (destination) {
            const select = document.getElementById("destination");
            [...select.options].forEach(option => {
                if (option.value === destination) option.selected = true;
            });
        }
        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault();
            bookingForm.classList.add("was-validated");
            if (!bookingForm.checkValidity()) return;
            bookingMessage.classList.remove("d-none");
            bookingForm.reset();
            window.scrollTo({top: bookingMessage.offsetTop - 100, behavior: "smooth"});
        });
    }

    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!contactForm.checkValidity()) return;
            contactMessage.classList.remove("d-none");
            contactForm.reset();
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            const password = signupForm.querySelector('input[type="password"]');
            const confirm = document.getElementById("confirmPassword");
            if (password.value !== confirm.value) {
                event.preventDefault();
                confirm.setCustomValidity("Passwords do not match");
                confirm.reportValidity();
            } else {
                confirm.setCustomValidity("");
                event.preventDefault();
                alert("Signup form submitted successfully!");
            }
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (loginForm.checkValidity()) alert("Login form submitted successfully!");
        });
    }
});