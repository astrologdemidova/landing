import styled from "styled-components";

export const GiftsWrapper = styled.div`
    text-align: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`

export const GiftsList = styled.div`
    display: inline-block;
    p {
        text-align: left;
        font-size: 24px;
        span {
            color: #f75995;
            font-size: 24px;
            padding-left: 7px;
            padding-right: 7px;
        }
    }
    @media all and (max-width: 768px) {
        p {
            span {
                img {
                    width: 30px;
                }
            }
        }
    }
`