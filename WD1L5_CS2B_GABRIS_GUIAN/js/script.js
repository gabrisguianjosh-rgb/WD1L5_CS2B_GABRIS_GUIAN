
// =========================================
// GUIAN JOSH GABRIS - PORTFOLIO JAVASCRIPT
// External JavaScript
// =========================================

// Automatically display the current year.
const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Contact form interaction.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const visitorName = document.getElementById("name").value.trim();

        if (visitorName !== "") {
            formMessage.textContent =
                `Thank you, ${visitorName}! Your message is ready.`;

            contactForm.reset();
        } else {
            formMessage.textContent = "Please enter your name.";
        }
    });
}

// Close mobile navigation after clicking a menu link.
const navigationLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navigationMenu = document.getElementById("navbarMenu");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        if (navigationMenu.classList.contains("show")) {
            const menu = bootstrap.Collapse.getOrCreateInstance(navigationMenu);
            menu.hide();
        }

    });
});
