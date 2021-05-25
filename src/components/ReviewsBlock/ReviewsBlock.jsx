import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../images/reviews/IMG_2043.jpg'
import review2 from '../../images/reviews/IMG_2039.jpg'
import review3 from '../../images/reviews/IMG_2044.jpg'
import review4 from '../../images/reviews/IMG_2040.jpg'
import review5 from '../../images/reviews/IMG_2042.jpg'
import review6 from '../../images/reviews/IMG_8303.png'
import review7 from '../../images/reviews/IMG_8305.png'
import review8 from '../../images/reviews/IMG_8306.png'
import review9 from '../../images/reviews/IMG_8307.png'
import review10 from '../../images/reviews/IMG_8308.png'
import review11 from '../../images/reviews/IMG_8309.png'
import review12 from '../../images/reviews/IMG_8310.png'
import review13 from '../../images/reviews/IMG_8311.png'
import review14 from '../../images/reviews/IMG_8312.png'
import review15 from '../../images/reviews/IMG_8313.png'
import review16 from '../../images/reviews/IMG_8314.png'
import review17 from '../../images/reviews/IMG_8315.png'
import review18 from '../../images/reviews/IMG_8316.png'
import review19 from '../../images/reviews/IMG_8317.png'
import review20 from '../../images/reviews/IMG_8318.png'
import review21 from '../../images/reviews/IMG_8319.png'
import review22 from '../../images/reviews/IMG_8320.png'
import review23 from '../../images/reviews/IMG_8321.png'
import review24 from '../../images/reviews/IMG_8322.png'

/*
const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', true, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    autoFocus: boolean('autoFocus', false, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 2000, {}, valuesGroupId),
    transitionTime: number('transitionTime', 500, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
});
*/

const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
}
export const ReviewsBlock = () => {
    return (
        <ReviewsBlockWrapper>
            
            <Carousel {...carouselConfig}>
                <div>
                    <img src={review1} alt="astrolog" width='300px' />
                </div>
                <div>
                    <img src={review2} alt="астролог" width='300px' />
                </div>
                <div>
                    <img src={review3} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review4} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review5} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review6} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review7} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review8} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review9} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review10} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review11} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review12} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review13} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review14} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review15} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review16} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review17} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review18} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review19} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review20} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review21} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review22} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review23} alt="астрология" width='300px' />
                </div>
                <div>
                    <img src={review24} alt="астрология" width='300px' />
                </div>
            </Carousel>
        </ReviewsBlockWrapper>
    )
}