import styled from "styled-components";

export const MarathonWrapper = styled.div`
    text-align: center;
    
`

export const MarathonList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`

export const CardStyled = styled.div`
    position: relative;
    display: block;
    max-width: 360px;
    width: 100%;
    border-radius: 30px;
    padding: 30px;
    margin: 20px;
    box-sizing: border-box;
    /* background: ${props => props.revert ? '#f75995' : '#5238fa'}; */
    background: #d63c8a;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.55;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    /* &:after {
        content: '';
        position: absolute;
        top: -13px;
        right: -13px;
        bottom: 13px;
        left: 13px;
        z-index: -1;
        border-radius: 30px;
        background: ${props => props.revert ? '#5238fa' : '#f75995'};
    } */
`

export const EmojiPicStyled = styled.img`
    position: absolute;
    bottom: 50px;
    right: -50px;
    width: 100px;
    transform: rotate(-5deg);
`