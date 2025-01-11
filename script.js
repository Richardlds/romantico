function showSlides() {
    document.getElementById('slideContainer').style.display = 'block';
    let slides = document.getElementsByClassName('slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 3000);
}
