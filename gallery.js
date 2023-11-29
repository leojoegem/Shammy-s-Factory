document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        const newTransformValue = -index * 100 + '%';
        slides.forEach(slide => (slide.style.transform = 'translateX(' + newTransformValue + ')'));
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Optional: Add event listeners for navigation buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Start with the first slide
    showSlide(currentIndex);

    // Optional: Automatically switch slides (every 5 seconds in this example)
    setInterval(showNextSlide, 5000);
});
