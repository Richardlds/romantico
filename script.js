function showSlides() {
    document.getElementById('slideContainer').style.display = 'block';
    let slides = document.getElementsByClassName('slide');
    let currentSlide = 0;

}

function changeSlide(direction) {
    let slides = document.getElementsByClassName('slide');
    let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
