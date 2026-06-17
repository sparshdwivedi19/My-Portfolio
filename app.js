// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap;

// Theme management
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    gsap.to(themeToggle, {
        scale: 0.9,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
    });
});

// Mobile menu management
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMobileMenu() {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

menuToggle.addEventListener("click", toggleMobileMenu);

const mobileLinks = mobileMenu.querySelectorAll("a[href^='#']");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("active")) {
            toggleMobileMenu();
        }
    });
});

const projectGrid = document.getElementById("projectGrid");
// Loading...
function initLoader() {
    const loader = document.querySelector(".loader");
    const loaderText = document.querySelector(".loader-text");
    const loaderProgress = document.querySelector(".loader-progress");

    gsap.to(loaderText, {
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
    });

    gsap.to(loaderProgress, {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.7,
                onComplete: () => {
                    loader.style.display = "none";
                    initAnimation();
                },
            });
        },
    });
}

window.addEventListener("load", initLoader);

// initialize all animations
function initAnimation() {
    gsap.to("nav", {
        y: 0,
        duration: 1,
        ease: "power3.out",
    });

    const heroTl = gsap.timeline();
    heroTl
        .to(".hero-title", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            ease: "power3.out",
        })
        .to(
            ".hero-subtitle",
            {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            },
            "-=0.5"
        )
        .to(".hero-description", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.5,
            ease: "power3.out",
        })
        .to(".cta-button", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            ease: "power3.out",
        });
    }
