import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../../../images/rituals/IMG_8048.jpg';
import review2 from '../../../../images/rituals/IMG_8060.jpg';
import review3 from '../../../../images/rituals/IMG_8078.jpg';
import review4 from '../../../../images/rituals/IMG_8085.jpg';
import review5 from '../../../../images/rituals/IMG_8086.jpg';
import review6 from '../../../../images/rituals/IMG_8087.jpg';
import review7 from '../../../../images/rituals/IMG_8088.jpg';
import review8 from '../../../../images/rituals/IMG_8090.jpg';
import review9 from '../../../../images/rituals/IMG_8091.jpg';
import review10 from '../../../../images/rituals/IMG_8094.jpg';
import review11 from '../../../../images/rituals/IMG_8095.jpg';
import review12 from '../../../../images/rituals/IMG_8107.jpg';
import review13 from '../../../../images/rituals/IMG_8112.jpg';
import review14 from '../../../../images/rituals/IMG_8128.jpg';
import review15 from '../../../../images/rituals/IMG_8140.jpg';
import review16 from '../../../../images/rituals/IMG_8142.jpg';
import review17 from '../../../../images/rituals/IMG_8143.jpg';
import review18 from '../../../../images/rituals/IMG_8270.jpg';
import review19 from '../../../../images/rituals/IMG_8271.jpg';
import review20 from '../../../../images/rituals/IMG_8272.jpg';
import review21 from '../../../../images/rituals/IMG_8273.jpg';
import review22 from '../../../../images/rituals/IMG_8274.jpg';
import review23 from '../../../../images/rituals/IMG_8275.jpg';
import review24 from '../../../../images/rituals/IMG_8276.jpg';
import review25 from '../../../../images/rituals/IMG_8277.jpg';
import review26 from '../../../../images/rituals/IMG_8278.jpg';
import review27 from '../../../../images/rituals/IMG_8279.jpg';
import review28 from '../../../../images/rituals/IMG_8280.jpg';
import review29 from '../../../../images/rituals/IMG_8282.jpg';
import review30 from '../../../../images/rituals/IMG_8285.jpg';

const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
}
export const CustomCarouselRituals = () => {
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
                    <img src={review3} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review4} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review5} alt="астрология ритуалы" width='300px' />
                </div>

                <div>
                    <img src={review6} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review7} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review8} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review9} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review10} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review11} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review12} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review13} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review14} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review15} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review16} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review17} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review18} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review19} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review20} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review21} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review22} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review23} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review24} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review25} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review26} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review27} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review28} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review29} alt="астрология ритуалы" width='300px' />
                </div>
                <div>
                    <img src={review30} alt="астрология ритуалы" width='300px' />
                </div>
            </Carousel>
        </ReviewsBlockWrapper>
    )
}