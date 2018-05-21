/**
 * Created by FoxyGirl on 07.05.2018.
 */
/**** Slider ****/
(function () {
    'use strict';

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
                slideContent(currentSlide);
            }
        }, false);

        prevArrow.addEventListener('click', function() {
            currentSlide--;
            initArrows(currentSlide);
            if (currentSlide >= 0) {
                slideContent(currentSlide);
            }
        }, false);

        function initArrows(currentSlide) {
            nextArrow.style.opacity = (currentSlide < sliderItems.length - 1) ? '1' : '0';
            prevArrow.style.opacity = (currentSlide < 1) ? '0' : '1';
        }

        function slideContent(currentSlide) {
            sliderContent.style.transform = 'translateX(' + (currentSlide * (-100)) + '%';
        }
    };

})();