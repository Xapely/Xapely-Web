document.addEventListener('DOMContentLoaded', function() {
    // Get elements - Updated selectors to match HTML classes
    const cards = Array.from(document.querySelectorAll('.testimonial-card'));
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let interval;

    // Show initial card
    cards[0].classList.add('active');

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
});