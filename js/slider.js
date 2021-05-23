const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
});

$('.slider__control-arrow_prev').click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})

$('.slider__control-arrow_next').click(e => {
    e.preventDefault();

    slider.goToNextSlide();
})