document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ipn_india-slider');
    const slides = document.querySelectorAll('.ipn_india-slide');
    let currentSlide = 0;

    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .ipn_india-slide {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;

        }
        .ipn_india-slide.active {
            opacity: 1;
 
        }
    `;
    document.head.appendChild(style);

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the current slide
        slides[index].classList.add('active');
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Function to move to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to move to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Optional: Add click event listeners for manual navigation
    // You can add buttons with classes ipn_india-next and ipn_india-prev to enable manual navigation
    const nextButton = document.querySelector('.ipn_india-next');
    const prevButton = document.querySelector('.ipn_india-prev');

    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
}); 