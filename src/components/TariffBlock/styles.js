import styled from "styled-components";
// тарифы без фоны, бордер с тенью темный
export const TariffBlockWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`
export const CardStyled = styled.div`
    max-width: 560px;
    width: 100%;
    margin: 20px;
    padding: 20px;
    border: 1px solid #e0e6ed;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);
    h2, h3, h4 {
        text-align: center;
    }
    h2 {
        font-size: 28px;
    }
    h4 {
        margin: 0px 0 15px;
        color: grey;
        font-size: 26px;
        text-decoration: line-through
    }
    div {
        padding-top: 30px;
        text-align: center;
    }
    p {
        color: #1d2147;
        font-size: 20px;
        margin: 0;
    }
    &.pink {
        background: #ffebf4 !important;
    }
`

export const TextStrike = styled.p`
    text-decoration: line-through;
    font-weight: 500;
    color: #cecece !important;
`

export const TextExclusive = styled.p`
    font-weight: 500;
    color: #f75995 !important;
`

export const SpecText = styled.span`
    padding: 30px 0;
    display: block;
    color: #1d2147;
    font-size: 13px;
    text-align: center;
`