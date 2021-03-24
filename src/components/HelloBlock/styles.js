import styled from "styled-components";

export const HelloBlockStyled = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
        flex-direction: column;
    }
`

export const HelloText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 560px;
    width: 100%;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: flex;
        padding: 7px 5px;
        p {
            color: #1d2147;
            font-size: 16px;
            font-style: italic;
            font-family: 'FuturaPT',Arial,sans-serif;
            line-height: 1.55;
            font-weight: 500;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
        }
    }
    p {
        color: #1d2147;
        font-weight: 700;
        padding-left: 38px;
        padding-bottom: 30px;
    }
`

export const HelloPicture = styled.div`
    max-width: 396px;
    width: 100%;
    padding-right: 120px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`
