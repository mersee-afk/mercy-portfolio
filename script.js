

document.addEventListener('DOMContentLoaded', () => {
    
    // 1.Theme Toggle Logic
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;

    toggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        
        // Update the emoji based on the mode
        if (body.classList.contains("light-mode")) {
            toggle.textContent = "☀️";
        } else {
            toggle.textContent = "🌙";
        }
    });

    // 2.Reveal Animation on Scroll (Intersection Observer is more performant than scroll listeners)
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150; // Pixels from the bottom before the element fades in

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Run once on load

    // 3.Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    //4.Back to Top Button Logic
    const backBtn = document.getElementById("backToTop");

    if (backBtn) {
        //Show/Hide button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backBtn.style.opacity = "1";
                backBtn.style.pointerEvents = "auto";
            } else {
                backBtn.style.opacity = "0";
                backBtn.style.pointerEvents = "none";
            }
        });

        //Click to scroll up
        backBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});