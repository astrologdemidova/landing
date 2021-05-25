import styled from "styled-components";

export const ReviewsBlockWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    img {
        max-width: 300px;
        width: 100%;
    }
    P {
        display: inline-block;
        max-width: 300px;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
        padding-top: 0;
    }
    .dot {
        border-radius: 0!important;
        background: rgba(255, 255, 255, 0.8)!important;
        border: 4px solid rgb(253, 117, 180)!important;
        box-shadow: 0px 0px 6px 3px rgba(253, 117, 180, 0.8)!important;
    }
    .carousel.carousel-slider .control-arrow {
        background: #D44E81;
        opacity: 1;
        border-radius: 50%;
        top: 50%;
        bottom: 50%;
        height: 30px;
        width: 30px;
        &:before {
            margin: 0 auto 6px;
        }
    }
    .slider .slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ArrowIconDown = styled.div`
    margin: 0 0 3px 5px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border-left: 2px solid #000000;
    border-bottom: 2px solid #000000;
    transform: rotate(-45deg);
`;

export const ArrowIconUp = styled(ArrowIconDown)`
    transform: rotate(135deg);
    margin: 0 0 -1px 5px;
`;
