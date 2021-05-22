import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../../../images/reviews/IMG_2043.jpg'
import review2 from '../../../../images/reviews/IMG_2039.jpg'
import review3 from '../../../../images/reviews/IMG_2044.jpg'
import review4 from '../../../../images/reviews/IMG_2040.jpg'
import review5 from '../../../../images/reviews/IMG_2042.jpg'

const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
}
export const CustomCarousel = () => {
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