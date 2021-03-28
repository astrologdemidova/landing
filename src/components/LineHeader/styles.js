import styled from "styled-components";

// убрать паддинг для мобилок
export const LineHeaderWrapper = styled.div`
    text-align: center;
    
    ${props => {
        switch (props.bgColor) {
            case 'pink':
                return "background-color: rgb(250, 161, 194);"
            case 'white':
                return "background-color: none;"
            case 'blue':
                return 'background-color: #a20893;'
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
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px 15px 0;
    }
`

export const TextStyled = styled.p`
    display: inline-block;
    font-size: ${props => props.smallFont ? '20px' : '30px'};
    font-family: 'FuturaPT',Arial,sans-serif;
    font-weight: ${props => props.smallFont ? '400' : '700'};
    line-height: 1.55;
    text-align: center;
    text-transform: uppercase;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0;
    max-width: 768px;
    width: 100%;
    @media all and (max-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: ${props => props.smallFont ? '17px' : '20px'};
    }
`