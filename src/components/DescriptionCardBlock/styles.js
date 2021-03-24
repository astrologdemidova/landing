import styled from "styled-components";

export const CardStyled = styled.div`
    max-width: 360px;
    width: 100%;
    text-align: center;
    padding: 20px;
    h4 {
        display: inline-block;
        white-space: pre;
        text-align: left;
    }
    p {
        border: 4px solid #5238fa;
        border-radius: 30px;
        padding: 30px;
        text-align: left;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`

export const CardSeparate = styled.div`
    width: 100%;
    text-align: center;
`