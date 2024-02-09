

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    elementsToAnimate.forEach(function(element) {
        element.classList.add('animate');
    });
});

// form validation 


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length === 0) {
            alert("Please enter your name.");
            return;
        }

        if (email.length === 0) {
            alert("Please enter your email.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 15) {
            alert("Please enter a message with at least 15 characters.");
            return;
        }

       
    });

  
});
