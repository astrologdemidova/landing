import styled from "styled-components";
import helloBlockSky from "../../images/2020-09-30_101813.webp"

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
    }
`

export const HeadBlockStyled = styled.div`
    display: flex;
    background-color: rgba(8, 10, 99, 0.55);
    position: relative;
`

export const HelloText = styled.div`
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
`

export const HelloPicture = styled.div`
    max-width: 520px;
    width: 100%;
    img {
        display: block;
        width: 100%;
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
`

