import styled from "styled-components";

export const ReviewsBlockWrapper = styled.div`
    display: flex;
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    img {
        max-width: 300px;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`