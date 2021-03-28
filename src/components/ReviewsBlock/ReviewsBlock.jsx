import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../images/reviews/IMG_2043.jpg'
import review2 from '../../images/reviews/IMG_2039.jpg'
import review3 from '../../images/reviews/IMG_2044.jpg'
import review4 from '../../images/reviews/IMG_2040.jpg'
import review5 from '../../images/reviews/IMG_2042.jpg'

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
            </Carousel>
        </ReviewsBlockWrapper>
    )
}