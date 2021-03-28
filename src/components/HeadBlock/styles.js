import styled from "styled-components";
import helloBlockSky from "../../images/2020-09-30_101813.webp"

export const HeadBlockStyled = styled.div`
    display: flex;
    background-color: rgba(8, 10, 99, 0.55);
    position: relative;
    @media all and (max-width: 991px) {
        min-height: 115vh;
    }
`

export const HeaderStyled = styled.header`
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 100px;
    a {
        color: white;
        font-size: 14px;
        line-height: 1.55;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        margin-right: 40px;
        white-space: nowrap;
    }
    
    @media all and (max-width: 991px) {
        display: none;
    }
`

export const HelloText = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
        font-size: 50px;
        color: #ffffff;
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 36px;
        font-weight: 500;
        color: #f75995;
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 20px;
        color: #ffffff;
        text-transform: uppercase;
        text-align: center;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        padding: 7px 5px;
        color: #ffffff;
        font-size: 20px;
        font-weight: 500;
        font-family: 'FuturaPT',Arial,sans-serif;
        line-height: 1.55;
        font-weight: 500;
        text-transform: uppercase;
    }
    @media all and (max-width: 991px) {
        h1, h2 {
            font-size: 34px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        li {
            font-size: 18px;
        }
    }
    @media all and (max-width: 991px) {
        box-sizing: border-box;
        padding: 15px 15px 45px;
        h1, h2 {
            font-size: 34px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        li {
            font-size: 17px;
        }
    }
`

export const HelloPicture = styled.div`
    max-width: 520px;
    width: 100%;
    img, video {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 991px) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
        max-width: 991px;
        width: unset;
        img, video {
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
`

export const BackgroundHelloBlock = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;

    background: url(${helloBlockSky}) no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;

    @media all and (max-width: 991px) {
        display: none;
    }
`

export const BackgroundHelloBlockResponsive = styled.div`
    display: none;
    @media all and (max-width: 991px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;

        /* background: url(${helloBlockSky}) no-repeat; */
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
        /* background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(8,19,101,1) 95%); */
        background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(255,255,255,1) 99%);
    }
`

