import styled from "styled-components";

export const LineHeaderWrapper = styled.div`
    text-align: center;
    
    ${props => {
        switch (props.bgColor) {
            case 'pink':
                return "background-color: rgb(250, 161, 194);"
            case 'white':
                return "background-color: none;"
            case 'blue':
                return `
                    background-color: #080a63;
                    background-image: url("https://thumb.tildacdn.com/tild3735-3131-4930-b939-316463626631/-/format/webp/2020-09-30_101813.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                `
            default:
                return "background-color: none;"
        }
    }}
    ${props => {
        switch (props.bgColor) {
            case 'pink':
                return "color: #FFFFFF;"
            case 'white':
                return "color: #1d2147;"
            case 'blue':
                return "color: #FFFFFF;"
            default:
                return "color: #000000;"
        }
    }}
`

export const TextStyled = styled.p`
    display: inline-block;
    font-size: 30px;
    font-family: 'FuturaPT',Arial,sans-serif;
    line-height: 1.55;
    font-weight: 700;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0;
    max-width: 768px;
    width: 100%;
`