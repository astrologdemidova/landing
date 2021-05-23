import styled from "styled-components";
import BgPicture from '../../../images/red-min.jpg';

export const CatalogWrapperStyled = styled.main`
    padding: 20px;
    /* background: url(${BgPicture}) no-repeat; */
    background-size: cover;
    * {
        font-family: 'Roboto Condensed', sans-serif;
    }
`;

export const CatalogHeaderContainer = styled.header`
    position: relative;
    max-width: 992px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: #0d0d0d;
    text-align: center;
    h1 {
        color: #6a45ab;
        position: relative;
        z-index: 10;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    h2 {
        position: relative;
        z-index: 10;
        color: #6a45ab;
        font-size: 22px;
        font-weight: 200;
        margin-top: 5px;
        /* font-family: 'Alex Brush', cursive; */
    }
    img {
        position: absolute;
        top: 60px;
        right: 1px;
        width: 110px;
        z-index: 5;
        transform: rotate(-30deg);
    }
`;

export const ListBlack = styled.li`
    font-size: 16px!important;
    color: #0d0d0d!important;
`;

export const CatalogSubHeaderContainer = styled.header`
    position: relative;
    background: url(${BgPicture}) no-repeat;
    background-size: cover;
    background-position: 40% 0;
    max-width: 768px;
    width: 100%;
    margin: 40px auto;
    padding: 245px 15px 100px;
    box-sizing: border-box;
    color: #f75995;
    text-align: center;

    border: 1px solid #e0e6ed;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);

    ul {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 10;
        li {
            font-size: 13px;
            /* color: #e5428e; */
            color: #0d0d0d;
            font-weight: 600;
            span {
                /* color: #cb50ce; */
                color: #e60670;
            }
        }
    }
    h4 {
        position: relative;
        color: #e60670;
        text-align: right;
        font-size: 18px;
        z-index: 10;
        span {
            position: relative;
            color: #ffffff;
            padding-left: 5px;
            &::after {
                content: '';
                position: absolute;
                z-index: -1;
                top: 9px;
                left: 12px;
                width: 4px;
                height: 2px;
                box-shadow: 0px 0px 10px 10px rgba(230, 6, 112, 0.3);
            }
        }
    }
`;

export const AboutContainer = styled(CatalogSubHeaderContainer)`
    background: none;
    max-width: 280px;
    padding: 0;
    img {
        display: block;
        width: 100%;
    }
`;

export const DescriptionContainer = styled(CatalogSubHeaderContainer)`
    background: none;
    padding: 24px 15px;
    ul {
        li {
            font-weight: 400;
            padding-bottom: 20px;
        }
    }
`;

export const ListSeparate = styled.li`
    padding: 7px 0;
`;

export const WhiteBackground = styled.div`
    border-radius: 11px;
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(255, 255, 255, 0.7);
`;

export const CatalogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 992px;
    width: 100%;
    /* background: white; */
    margin: 0 auto;
    padding: 15px 0;
    box-sizing: border-box;
`;

export const MenuButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 25px 0;
`;