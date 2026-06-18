(function () {
    // Mobile Menu Toggle
    var toggle = document.getElementById('mobileMenuToggle');
    var navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }

    var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    // Fade-in scroll animations for cards and non-hero sections
    var fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll(
        'section:not(.hero), .service-card, .step, .trust-badge-card, ' +
        '.phone-option-card, .testimonial-card, .stat-card, .faq-item, ' +
        '.address-card, .process-step, .why-choose-card'
    ).forEach(function (el) {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });

    // Header scroll animations (skip hero headings)
    var headerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('header-animate');
                headerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('h2, h3, .section-title').forEach(function (el) {
        if (!el.closest('.hero')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(15px)';
            headerObserver.observe(el);
        }
    });
}());
