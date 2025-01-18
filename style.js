document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling Navigation
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1); // Remove '#' from href
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50, // Offset for header space
                behavior: 'smooth' // Smooth scroll
            });
        });
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);

    // Show the Scroll to Top button when the user scrolls down
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    // Scroll to Top button functionality
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Header Animation (fade-in effect)
    const header = document.querySelector("header");
    header.classList.add("fade-in");
});
document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Year Update
    const yearElement = document.querySelector("#current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Scroll to Bottom Button
    const scrollToBottomBtn = document.createElement("button");
    scrollToBottomBtn.textContent = "↓";
    scrollToBottomBtn.classList.add("scroll-to-bottom");
    document.body.appendChild(scrollToBottomBtn);

    // Show Scroll to Bottom button when the user scrolls up
    window.addEventListener("scroll", function () {
        if (window.scrollY < document.body.scrollHeight - window.innerHeight - 300) {
            scrollToBottomBtn.classList.add("visible");
        } else {
            scrollToBottomBtn.classList.remove("visible");
        }
    });

    // Scroll to Bottom button functionality
    scrollToBottomBtn.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});

