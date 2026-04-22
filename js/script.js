/* ==== Typing Animation ==== */

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "Graphic Designer", "Software Developer", "CS Graduate"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ==== Smooth Scroll for Nav Links ==== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").split("#")[1];
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Close aside on mobile after clicking
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
});

/* ==== Highlight Active Nav Link on Scroll ==== */

const sections = document.querySelectorAll(".section");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

/* ==== Mobile Nav Toggler ==== */

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}