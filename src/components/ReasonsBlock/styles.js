import styled from 'styled-components';

export const ReasonsWrapper = styled.div`
    text-align: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`;

export const ReasonsList = styled.div`
    display: inline-block;
    p {
        text-align: left;
        font-size: 24px;
        span {
            color: #f75995;
            font-size: 24px;
            padding-left: 7px;
            padding-right: 7px;
        }
    }
    @media all and (max-width: 768px) {
        p {
            font-size: 15px;
        }
    }
`;

export const EmojiPicStyled = styled.img`
    position: absolute;
    bottom: -10px;
    right: -50px;
    width: 100px;
    transform: rotate(20deg);
    @media all and (max-width: 420px) {
        right: -38px;
    }
    @media all and (max-width: 370px) {
        right: 0px;
        bottom: 40px;
        z-index: -1;
    }
`;
