/**
 * Created by FoxyGirl on 22.10.2017.
 */
/**** Slider ****/
(function () {
    'use strict';

    var slider = document.getElementById('profSlider');
    console.log('slider = ' + slider);
    var sliderContent = slider.querySelector('.slider__content').getElementsByClassName('slider__item'),
        controlBlock = slider.querySelector('.slider__controls'),
        sliderControls = controlBlock.getElementsByTagName('i'),
        prevSlide = slider.querySelector('.slider__item--active'),
        activeControl,
        prevActiveControl,
        zIndexSlider,
        prevArrow = slider.querySelector('.slider__arrow--prev'),
        nextArrow = slider.querySelector('.slider__arrow--next');

    var computedStyle = getComputedStyle(prevSlide);
    zIndexSlider = computedStyle.zIndex - 1;
    console.log('prevSlide.style.zIndex ' + computedStyle.zIndex);


    // Add controls for all slider items
    while (sliderControls.length < sliderContent.length) {
        var newControl = document.createElement('i');
        controlBlock.appendChild(newControl);
    }

    for (var i = 0; i < sliderControls.length; i++) {
        sliderControls[i].setAttribute('data-toggler', i);
    }

    activeControl = controlBlock.querySelector('.control--active').getAttribute('data-toggler');
    activeControl = Number(activeControl);
    prevActiveControl = setPrevActiveControl(activeControl);
    sliderContent[prevActiveControl].classList.add('slider__item--prev-left');

    controlBlock.addEventListener('click', changeSliderByControls);

    nextArrow.addEventListener('click', function() {changeSliderByArrows('right')}, false);

    prevArrow.addEventListener('click', function() {changeSliderByArrows('left')}, false);


    /******************************************************/

    function changeSliderByControls(e) {
        var targetElem = e.target;
        if (targetElem.tagName != 'I')  {
            return;
        } else {
            activeControl = Number(targetElem.getAttribute('data-toggler'));
            prevActiveControl = setPrevActiveControl(activeControl);
            console.log('activeControl = ' + activeControl + ' / prevActiveControl= ' + prevActiveControl);
            changeSlideControl(activeControl, prevActiveControl);
        }
    }

    function changeSlideControl(activeControl, prevActiveControl) {
        controlBlock.querySelector('.control--active').classList.remove('control--active');
        sliderControls[activeControl].classList.add('control--active');

        changePrevSlide();
        sliderContent[activeControl].classList.add('slider__item--active');
    }

    function changePrevSlide() {
        if (prevSlide !== null) {
            prevSlide.style.zIndex = '';
        }
        prevSlide = slider.querySelector('.slider__item--active');
        prevSlide.classList.remove('slider__item--active');
        prevSlide.style.zIndex = zIndexSlider;
        console.log(slider.getElementsByClassName('slider__item--prev-left'));
        slider.querySelector('.slider__item--prev-left').classList.remove('slider__item--prev-left');

        prevSlide.classList.add('slider__item--prev-left');

        if ( prevSlide.classList.contains('slider__item--left') ) {
            prevSlide.classList.remove('slider__item--left');
        }
    }

    function changeSliderByArrows(direction) {
        switch (direction) {
            case 'right' :
                ++activeControl;
                if (activeControl === sliderContent.length) {
                    activeControl = 0;
                }
                prevActiveControl = setPrevActiveControl(activeControl);
                console.log('prevActiveControl ' + prevActiveControl);
                changeSlideControl(activeControl, prevActiveControl);

                console.log('!!!');
                break;

            case 'left' :
                --activeControl;
                if (activeControl < 0) {
                    activeControl = sliderContent.length - 1;
                }
                prevActiveControl = setPrevActiveControl(activeControl);

                sliderContent[activeControl].classList.add('slider__item--left');
                changeSlideControl(activeControl, prevActiveControl);
                break;

            default:
                alert( 'Я таких значений не знаю' );
        }
    }

    function setPrevActiveControl(activeControl) {
        if (activeControl == 0) {
            return sliderContent.length - 1;
        }

        return (activeControl - 1);
    }

})();