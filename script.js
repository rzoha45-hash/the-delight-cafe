// /**
//  * THE DELIGHT CAFE - PREMIUM INTERACTION SCRIPT
//  */

// document.addEventListener("DOMContentLoaded", () => {
    
//     // --- 1. NAVBAR SCROLL EFFECT ---
//     // Adds a shadow and blur to the header only after scrolling 50px
//     const header = document.querySelector("header");
//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 50) {
//             header.style.padding = "10px 0";
//             header.style.background = "rgba(255, 255, 255, 0.98)";
//             header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
//         } else {
//             header.style.padding = "20px 0";
//             header.style.background = "rgba(255, 255, 255, 0.95)";
//             header.style.boxShadow = "none";
//         }
//     });

//     // --- 2. MOBILE MENU TOGGLE ---
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-menu");
//     const navLinks = document.querySelectorAll(".nav-link");

//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle("active");
//         navMenu.classList.toggle("active");
//     });

//     // Close menu when a link is clicked
//     navLinks.forEach(n => n.addEventListener("click", () => {
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//     }));

//     // --- 3. DARK MODE SWITCHER ---
//     const themeToggle = document.getElementById("theme-toggle");
//     const body = document.body;
    
//     // Check for saved user preference
//     if (localStorage.getItem("theme") === "dark") {
//         body.classList.add("dark-mode");
//         themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
//     }

//     themeToggle.addEventListener("click", () => {
//         body.classList.toggle("dark-mode");
//         const isDark = body.classList.contains("dark-mode");
        
//         // Save preference
//         localStorage.setItem("theme", isDark ? "dark" : "light");
        
//         // Icon Swap
//         const icon = themeToggle.querySelector("i");
//         if (isDark) {
//             icon.classList.replace("fa-moon", "fa-sun");
//         } else {
//             icon.classList.replace("fa-sun", "fa-moon");
//         }
//     });

//     // --- 4. SCROLL REVEAL ANIMATION ---
//     const observerOptions = {
//         threshold: 0.15
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("active");
//             }
//         });
//     }, observerOptions);

//     document.querySelectorAll("section").forEach(section => {
//         section.classList.add("reveal"); // Ensure CSS has .reveal { opacity: 0; ... }
//         observer.observe(section);
//     });

//     // --- 5. PREMIUM CONTACT FORM HANDLING ---
//     const contactForm = document.querySelector(".contact-form");
//     contactForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const btn = contactForm.querySelector(".submit-button");
//         const originalText = btn.innerText;
        
//         btn.innerText = "Sending...";
//         btn.style.opacity = "0.7";
//         btn.disabled = true;

//         // Simulate an API call
//         setTimeout(() => {
//             btn.innerText = "Message Sent! ☕";
//             btn.style.backgroundColor = "#27ae60";
//             contactForm.reset();
            
//             setTimeout(() => {
//                 btn.innerText = originalText;
//                 btn.style.backgroundColor = "";
//                 btn.style.opacity = "1";
//                 btn.disabled = false;
//             }, 3000);
//         }, 1500);
//     });
// });


// // --- 6. PRELOADER LOGIC ---
// window.addEventListener("load", () => {
//     const preloader = document.getElementById("preloader");
    
//     // Slight delay so the user actually sees the nice animation
//     setTimeout(() => {
//         preloader.classList.add("fade-out");
        
//         // Fully remove from DOM after fade animation to save resources
//         setTimeout(() => {
//             preloader.style.display = "none";
//         }, 800);
//     }, 2000); 
// }); 
// document.addEventListener("DOMContentLoaded", () => {
    
//     // 1. Mobile Menu Toggle
//     const menuOpen = document.querySelector("#menu-open-button");
//     const menuClose = document.querySelector("#menu-close-button");
//     const navMenu = document.querySelector(".nav-menu");

//     [menuOpen, menuClose].forEach(btn => {
//         btn?.addEventListener("click", () => {
//             navMenu.classList.toggle("active");
//         });
//     });

//     // Close menu when clicking a link
//     document.querySelectorAll(".nav-link").forEach(link => {
//         link.addEventListener("click", () => navMenu.classList.remove("active"));
//     });

//     // 2. Swiper Initialization (Testimonials)
//     const swiper = new Swiper('.testimonials-swiper', {
//         slidesPerView: 1,
//         spaceBetween: 30,
//         loop: true,
//         centeredSlides: true,
//         autoplay: { delay: 3000 },
//         pagination: { el: '.swiper-pagination', clickable: true },
//         breakpoints: {
//             1024: { slidesPerView: 3 } // 3 slides on desktop
//         }
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const menuOpen = document.querySelector("#menu-open-button");
//     const menuClose = document.querySelector("#menu-close-button");
//     const navMenu = document.querySelector(".nav-menu");
//     const navLinks = document.querySelectorAll(".nav-link");

//     // Open Menu
//     menuOpen.addEventListener("click", () => {
//         navMenu.classList.add("active");
//     });

//     // Close Menu
//     menuClose.addEventListener("click", () => {
//         navMenu.classList.remove("active");
//     });

//     // Close Menu when clicking any link (so it scrolls to section)
//     navLinks.forEach(link => {
//         link.addEventListener("click", () => {
//             navMenu.classList.remove("active");
//         });
//     });
// });
/**
 * THE DELIGHT CAFE - ROYAL EDITION
 * Handles: Mobile Menu, Smooth Scroll, Testimonials, and Navbar Effects
 */









document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. PRELOADER LOGIC ---
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.style.display = "none";
        });
    }

    // --- 2. MOBILE NAV LOGIC ---
    const menuOpen = document.querySelector("#menu-open-button");
    const menuClose = document.querySelector("#menu-close-button");
    const navMenu = document.querySelector("#nav-menu");

    if (menuOpen && navMenu) {
        menuOpen.addEventListener("click", () => {
            navMenu.classList.add("active");
        });
    }

    if (menuClose && navMenu) {
        menuClose.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    }

    // --- 3. TESTIMONIALS (SWIPER) ---
    // We use a small timeout to ensure the library is fully ready
    setTimeout(() => {
        if (typeof Swiper !== 'undefined') {
            new Swiper('.slider-container', {
                loop: true,
                grabCursor: true,
                spaceBetween: 30,
                autoplay: { delay: 4000 },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        }
    }, 100);

    // --- 4. SMOOTH SCROLL ---
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith("#") && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    navMenu.classList.remove("active");
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});