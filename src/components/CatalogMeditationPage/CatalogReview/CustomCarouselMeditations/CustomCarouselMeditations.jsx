import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../../../images/meditations/IMG_8049.jpg'
import review2 from '../../../../images/meditations/IMG_8050.jpg'
import review3 from '../../../../images/meditations/IMG_8058.jpg'
import review4 from '../../../../images/meditations/IMG_8067.jpg'
import review5 from '../../../../images/meditations/IMG_8068.jpg'
import review6 from '../../../../images/meditations/IMG_8069.jpg'
import review7 from '../../../../images/meditations/IMG_8073.jpg'
import review8 from '../../../../images/meditations/IMG_8074.jpg'
import review9 from '../../../../images/meditations/IMG_8079.jpg'
import review10 from '../../../../images/meditations/IMG_8080.jpg'
import review11 from '../../../../images/meditations/IMG_8082.jpg'
import review12 from '../../../../images/meditations/IMG_8093.jpg'
import review13 from '../../../../images/meditations/IMG_8096.jpg'
import review14 from '../../../../images/meditations/IMG_8103.png'
import review15 from '../../../../images/meditations/IMG_8105.jpg'
import review16 from '../../../../images/meditations/IMG_8106.png'
import review17 from '../../../../images/meditations/IMG_8109.jpg'
import review18 from '../../../../images/meditations/IMG_8113.jpg'
import review19 from '../../../../images/meditations/IMG_8114.jpg'
import review20 from '../../../../images/meditations/IMG_8116.jpg'
import review21 from '../../../../images/meditations/IMG_8118.jpg'
import review22 from '../../../../images/meditations/IMG_8119.jpg'
import review23 from '../../../../images/meditations/IMG_8121.jpg'
import review24 from '../../../../images/meditations/IMG_8122.jpg'
import review25 from '../../../../images/meditations/IMG_8123.jpg'
import review26 from '../../../../images/meditations/IMG_8125.jpg'

const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
    centerMode: true,
    centerSlidePercentage: 100,
}
export const CustomCarouselMeditations = () => {
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
                    <img src={review3} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review4} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review5} alt="астрология медитации" width='300px' />
                </div>

                <div>
                    <img src={review6} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review7} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review8} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review9} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review10} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review11} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review12} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review13} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review14} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review15} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review16} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review17} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review18} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review19} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review20} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review21} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review22} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review23} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review24} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review25} alt="астрология медитации" width='300px' />
                </div>
                <div>
                    <img src={review26} alt="астрология медитации" width='300px' />
                </div>
            </Carousel>
        </ReviewsBlockWrapper>
    )
}