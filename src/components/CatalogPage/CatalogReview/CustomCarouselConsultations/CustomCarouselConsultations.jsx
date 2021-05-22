import React from "react"
import {ReviewsBlockWrapper} from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../../../images/consultations/IMG_8298.png'
import review2 from '../../../../images/consultations/IMG_8299.png'
import review3 from '../../../../images/consultations/IMG_8300.png'
import review4 from '../../../../images/consultations/IMG_8301.png'
import review5 from '../../../../images/consultations/IMG_8302.png'
import review6 from '../../../../images/consultations/IMG_8303.png'
import review7 from '../../../../images/consultations/IMG_8305.png'
import review8 from '../../../../images/consultations/IMG_8306.png'
import review9 from '../../../../images/consultations/IMG_8307.png'
import review10 from '../../../../images/consultations/IMG_8308.png'
import review11 from '../../../../images/consultations/IMG_8309.png'
import review12 from '../../../../images/consultations/IMG_8310.png'
import review13 from '../../../../images/consultations/IMG_8311.png'
import review14 from '../../../../images/consultations/IMG_8312.png'
import review15 from '../../../../images/consultations/IMG_8313.png'
import review16 from '../../../../images/consultations/IMG_8314.png'
import review17 from '../../../../images/consultations/IMG_8315.png'
import review18 from '../../../../images/consultations/IMG_8316.png'
import review19 from '../../../../images/consultations/IMG_8317.png'
import review20 from '../../../../images/consultations/IMG_8318.png'
import review21 from '../../../../images/consultations/IMG_8319.png'
import review22 from '../../../../images/consultations/IMG_8320.png'
import review23 from '../../../../images/consultations/IMG_8321.png'
import review24 from '../../../../images/consultations/IMG_8322.png'


const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    swipeable: true,
}
export const CustomCarouselConsultations = () => {
    return (
        <ReviewsBlockWrapper>
            
            <Carousel {...carouselConfig}>
                <div>
                    <img src={review1} alt="astrolog консультации" width='300px' />
                </div>
                <div>
                    <img src={review2} alt="астролог консультации" width='300px' />
                </div>
                <div>
                    <img src={review3} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review4} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review5} alt="астрология консультации" width='300px' />
                </div>

                <div>
                    <img src={review6} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review7} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review8} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review9} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review10} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review11} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review12} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review13} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review14} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review15} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review16} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review17} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review18} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review19} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review20} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review21} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review22} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review23} alt="астрология консультации" width='300px' />
                </div>
                <div>
                    <img src={review24} alt="астрология консультации" width='300px' />
                </div>
            </Carousel>
        </ReviewsBlockWrapper>
    )
}