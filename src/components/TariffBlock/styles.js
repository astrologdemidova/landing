import styled from "styled-components";

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
    border: 1px solid #0e0e0e;
    border-radius: 12px;
    box-sizing: border-box;
    div {
        padding-top: 30px;
        text-align: center;
    }
`
