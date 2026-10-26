(function () {
    // Mobile Menu Toggle
    var toggle = document.getElementById('mobileMenuToggle');
    var navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        var setMenu = function (open) {
            navLinks.classList.toggle('active', open);
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        };

        toggle.addEventListener('click', function () {
            setMenu(!navLinks.classList.contains('active'));
        });

        // Close the menu after choosing a link
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                setMenu(false);
            });
        });

        // Close the menu with Escape and return focus to the button
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                setMenu(false);
                toggle.focus();
            }
        });
    }

    // Chat button: open a small panel with one WhatsApp option per service.
    // If this script doesn't run, the button still links to the contact page.
    var chatButton = document.getElementById('chatButton');
    var chatPanel = document.getElementById('chatPanel');
    if (chatButton && chatPanel) {
        chatButton.setAttribute('role', 'button');

        var setChat = function (open) {
            chatPanel.hidden = !open;
            chatButton.setAttribute('aria-expanded', open ? 'true' : 'false');
            if (open) {
                chatPanel.querySelector('a').focus();
            }
        };

        chatButton.addEventListener('click', function (e) {
            e.preventDefault();
            setChat(chatPanel.hidden);
        });

        // Close when clicking anywhere else on the page
        document.addEventListener('click', function (e) {
            if (!chatPanel.hidden && !chatPanel.contains(e.target) && !chatButton.contains(e.target)) {
                setChat(false);
            }
        });

        // Close with Escape and return focus to the button
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !chatPanel.hidden) {
                setChat(false);
                chatButton.focus();
            }
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
