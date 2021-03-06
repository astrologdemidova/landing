import React from 'react';
import { ReviewsBlockWrapper } from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../images/reviews/IMG_2043.jpg';
import review2 from '../../images/reviews/IMG_2039.jpg';
import review3 from '../../images/reviews/IMG_2044.jpg';
import review4 from '../../images/reviews/IMG_2040.jpg';
import review5 from '../../images/reviews/IMG_2042.jpg';
import review6 from '../../images/reviews/IMG_8303.png';
import review7 from '../../images/reviews/IMG_8305.png';
import review8 from '../../images/reviews/IMG_8306.png';
import review9 from '../../images/reviews/IMG_8307.png';
import review10 from '../../images/reviews/IMG_8308.png';
import review11 from '../../images/reviews/IMG_8309.png';
import review12 from '../../images/reviews/IMG_8310.png';
import review13 from '../../images/reviews/IMG_8311.png';
import review14 from '../../images/reviews/IMG_8312.png';
import review15 from '../../images/reviews/IMG_8313.png';
import review16 from '../../images/reviews/IMG_8314.png';
import review17 from '../../images/reviews/IMG_8315.png';
import review18 from '../../images/reviews/IMG_8316.png';
import review19 from '../../images/reviews/IMG_8317.png';
import review20 from '../../images/reviews/IMG_8318.png';
import review21 from '../../images/reviews/IMG_8319.png';
import review22 from '../../images/reviews/IMG_8320.png';
import review23 from '../../images/reviews/IMG_8321.png';
import review24 from '../../images/reviews/IMG_8322.png';

import review25 from '../../images/reviews/TbXRAzLZLBY.jpg';

import review26 from '../../images/reviews/4CI2KS_WO6o.jpg';
import review27 from '../../images/reviews/7LavNkEeV2U.jpg';
import review28 from '../../images/reviews/E_r5ym0Iik0.jpg';
import review29 from '../../images/reviews/QMZeIXTd7_w.jpg';
import review30 from '../../images/reviews/qpJAtRmCY4c.jpg';
import review31 from '../../images/reviews/rEZYpzJh88A.jpg';
import review32 from '../../images/reviews/tID9_CjDXYY.jpg';

import review33 from '../../images/reviews/IMG_0481.jpg';
import review34 from '../../images/reviews/IMG_0484.png';
import review35 from '../../images/reviews/IMG_0485.png';
import review36 from '../../images/reviews/IMG_0486.png';
import review37 from '../../images/reviews/IMG_0487.png';
import review38 from '../../images/reviews/IMG_0488.png';
import review39 from '../../images/reviews/IMG_0489.png';
import review40 from '../../images/reviews/IMG_0490.png';
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
};
export const ReviewsBlock = () => {
    return (
        <ReviewsBlockWrapper>
            <Carousel {...carouselConfig}>
                <div>
                    <img src={review33} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review34} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review38} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review35} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review36} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review37} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review39} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review40} alt="astrolog" width="300px" />
                </div>


                <div>
                    <img src={review32} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review31} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review30} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review29} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review28} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review27} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review26} alt="astrolog" width="300px" />
                </div>

                <div>
                    <img src={review25} alt="astrolog" width="300px" />
                </div>

                <div>
                    <img src={review1} alt="astrolog" width="300px" />
                </div>
                <div>
                    <img src={review2} alt="????????????????" width="300px" />
                </div>
                <div>
                    <img src={review3} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review4} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review5} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review6} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review7} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review8} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review9} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review10} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review11} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review12} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review13} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review14} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review15} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review16} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review17} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review18} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review19} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review20} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review21} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review22} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review23} alt="????????????????????" width="300px" />
                </div>
                <div>
                    <img src={review24} alt="????????????????????" width="300px" />
                </div>
            </Carousel>
        </ReviewsBlockWrapper>
    );
};
