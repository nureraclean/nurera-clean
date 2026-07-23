// ===============================
// NURERA CLEAN - SCRIPT.JS
// ===============================

// Yukarı Çık Butonu
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Scroll Animasyonu
const elements = document.querySelectorAll(
".service-card,.why-card,.gallery-item,.testimonial-card,.contact-box,.counter-box,.about-image,.about-text"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

elements.forEach((el) => {

    el.classList.add("fade-up");

    observer.observe(el);

});


// Header Gölgesi
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

});


// Sayaç Animasyonu
const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        const target = parseInt(text.replace(/\D/g, ""));

        let current = 0;

        const speed = Math.ceil(target / 50);

        const timer = setInterval(() => {

            current += speed;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            if (text.includes("%")) {

                counter.innerText = current + "%";

            } else if (text.includes("+")) {

                counter.innerText = current + "+";

            } else {

                counter.innerText = current;

            }

        }, 30);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// Menüde aktif link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Galeri Hover Efekti
const gallery = document.querySelectorAll(".gallery-item img");

gallery.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// Sayfa Yüklendiğinde
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});