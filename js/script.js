document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. STICKY NAVBAR
    // ==========================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 2. MOBILE MENU TOGGLE
    // ==========================================
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================
    // 3. SCROLL FADE IN ANIMATION
    // ==========================================
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Check immediately on load for elements already in view
    setTimeout(() => {
        faders.forEach(fader => {
            const rect = fader.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                fader.classList.add('appear');
                appearOnScroll.unobserve(fader);
            }
        });
    }, 100);

    // ==========================================
    // 4. WHATSAPP CONVERSION ENGINE
    // ==========================================
    const tooltip = document.getElementById("wa-tooltip");

    // SAFETY CHECK: Only run this logic if the WhatsApp HTML exists on the page
    if (tooltip) {
        let triggered = false;

        const showTooltip = () => {
            if (!triggered && window.innerWidth < 768) { // Only trigger on mobile
                tooltip.classList.remove("hidden");
                triggered = true;

                // Auto-hide after 8 seconds 
                setTimeout(() => {
                    tooltip.classList.add("hidden");
                }, 8000);
            }
        };

        // Trigger 1: Time-based (12 seconds)
        setTimeout(showTooltip, 12000);

        // Trigger 2: Scroll-based (35%)
        window.addEventListener("scroll", () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 35) {
                showTooltip();
            }
        });
    }
});