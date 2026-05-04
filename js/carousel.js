document.addEventListener('DOMContentLoaded', function() {
    // Get elements - Updated selectors to match HTML classes
    const cards = Array.from(document.querySelectorAll('.testimonial-card'));
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    let currentIndex = 0;
    let interval;

    // Show initial card
    cards[0].classList.add('active');

    function syncTestimonialHeight() {
        if (!cards.length || !carouselWrapper || !testimonialsCarousel) {
            return;
        }

        const wrapperStyle = window.getComputedStyle(carouselWrapper);
        const wrapperPaddingTop = parseFloat(wrapperStyle.paddingTop) || 0;
        const wrapperPaddingBottom = parseFloat(wrapperStyle.paddingBottom) || 0;

        const measureHost = document.createElement('div');
        measureHost.setAttribute('aria-hidden', 'true');
        measureHost.style.position = 'absolute';
        measureHost.style.visibility = 'hidden';
        measureHost.style.pointerEvents = 'none';
        measureHost.style.left = '-9999px';
        measureHost.style.top = '0';
        measureHost.style.width = `${testimonialsCarousel.clientWidth}px`;
        measureHost.style.contain = 'layout style';

        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.classList.add('active');
            clone.style.display = 'block';
            clone.style.visibility = 'hidden';
            clone.style.opacity = '1';
            clone.style.position = 'static';
            clone.style.inset = 'auto';
            clone.style.width = '100%';
            clone.style.height = 'auto';
            clone.style.minHeight = '0';
            measureHost.appendChild(clone);
        });

        document.body.appendChild(measureHost);

        const maxCardHeight = Array.from(measureHost.children).reduce((highest, card) => {
            return Math.max(highest, card.scrollHeight, card.getBoundingClientRect().height);
        }, 0);

        measureHost.remove();

        if (maxCardHeight > 0) {
            const cardHeight = `${Math.ceil(maxCardHeight)}px`;
            const wrapperHeight = `${Math.ceil(maxCardHeight + wrapperPaddingTop + wrapperPaddingBottom)}px`;

            carouselWrapper.style.height = '';
            testimonialsCarousel.style.height = '';
            cards.forEach(card => {
                card.style.height = '';
                card.style.minHeight = '';
            });

            carouselWrapper.style.minHeight = wrapperHeight;
            testimonialsCarousel.style.minHeight = cardHeight;
        }
    }

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    function resetAutoplay() {
        clearInterval(interval);
        interval = setInterval(nextCard, 4000);
    }

    // Event listeners
    nextBtn && nextBtn.addEventListener('click', () => {
        nextCard();
        resetAutoplay();
    });

    prevBtn && prevBtn.addEventListener('click', () => {
        prevCard();
        resetAutoplay();
    });

    // Start autoplay
    resetAutoplay();

    syncTestimonialHeight();

    window.addEventListener('resize', () => {
        window.requestAnimationFrame(syncTestimonialHeight);
    });

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(syncTestimonialHeight).catch(() => {});
    }
});