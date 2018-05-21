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
            sliderControls = slider.querySelector('.slider__controls'),
            control = slider.querySelector('.slider__control'),
            sliderControlsArr = null,
            currentSlide = 0;

        if (prevArrow) {
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
        }

        if (control) {
            addControls();

            sliderControls.addEventListener('click', changeSlider);
        }

        function addControls() {
            var fragment = document.createDocumentFragment();

            for (var i = 0; i < sliderItems.length; i++) {
                var newControl = control.cloneNode(true);
                newControl.setAttribute('data-toggler', i);
                if (i === currentSlide) {
                    newControl.classList.add('slider__control--active');
                }
                fragment.appendChild(newControl);
            }

            sliderControls.innerHTML = '';
            sliderControls.appendChild(fragment);
            sliderControlsArr = slider.querySelectorAll('.slider__control');
        }

        function changeSlider(e) {
            e.preventDefault();
            var target = e.target;
            while (target != sliderControls) {
                if (target.tagName == 'I') {
                    for (var i = 0; i < sliderControlsArr.length; i++) {
                        sliderControlsArr[i].classList.remove('slider__control--active');
                    }
                    target.classList.add('slider__control--active');
                    var newSlideNum = +target.getAttribute('data-toggler');
                    currentSlide = newSlideNum;
                    slideContent(currentSlide);
                    return;
                }
                target = target.parentNode;
            }
        }

        function initArrows(currentSlide) {
            nextArrow.style.opacity = (currentSlide < sliderItems.length - 1) ? '1' : '0';
            prevArrow.style.opacity = (currentSlide < 1) ? '0' : '1';
        }

        function slideContent(currentSlide) {
            sliderContent.style.transform = 'translateX(' + (currentSlide * (-100)) + '%';

            if (control) {
                for (var i = 0; i < sliderControlsArr.length; i++) {
                    sliderControlsArr[i].classList.remove('slider__control--active');
                }
                sliderControlsArr[currentSlide].classList.add('slider__control--active');
            }

            if (prevArrow) {
                initArrows(currentSlide);
            }
        }
    };

})();