import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    a {
        color: white;
        font-size: 18px;
        text-transform: uppercase;
    }
`

export const HelloBlockStyled = styled.div`
    display: flex;
    background-color: #080a63;
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
    }
    h2 {
        font-size: 36px;
        color: #f75995;
    }
    h4 {
        font-size: 20px;
        color: #ffffff;
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