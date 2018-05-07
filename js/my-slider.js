/**
 * Created by FoxyGirl on 07.05.2018.
 */
/**** Slider ****/
(function () {
    'use strict';

    console.log('!!!');
    sliderArrow('profSlider');

    function sliderArrow(slideId) {
        var slider = document.getElementById(slideId),
            sliderContent = slider.querySelector('.slider__content'),
            sliderItems = slider.querySelectorAll('.slider__item'),
            prevArrow = slider.querySelector('.slider__arrow--prev'),
            nextArrow = slider.querySelector('.slider__arrow--next'),
            currentSlide = 0;

        initArrows(currentSlide);

        nextArrow.addEventListener('click', function() {
            currentSlide++;
            initArrows(currentSlide);
            if (currentSlide < sliderItems.length) {
                sliderContent.style.transform = 'translateX(-' + currentSlide + '00%';
            }
        }, false);

        prevArrow.addEventListener('click', function() {
            currentSlide--;
            initArrows(currentSlide);
            if (currentSlide >= 0) {
                sliderContent.style.transform = 'translateX(-' + currentSlide + '00%';
            }
        }, false);

        function initArrows(currentSlide) {
            nextArrow.style.opacity = (currentSlide < sliderItems.length - 1) ? '' : '0';
            prevArrow.style.opacity = (currentSlide < 1) ? '0' : '';
        }
    };

})();