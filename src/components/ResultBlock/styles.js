import styled from "styled-components";
// size 18
export const ResultWrapper = styled.div`
    text-align: center;
    @media all and (max-width: 768px) {
        box-sizing: border-box;
        padding: 15px;
    }
`

export const ResultList = styled.div`
    display: inline-block;
    p {
        text-align: left;
        font-size: 24px;
        text-transform: uppercase;
        span {
            color: #f75995;
            font-size: 24px;
            padding-left: 7px;
            padding-right: 7px;
            img {
                    width: 45px;
                }
        }
    }
    @media all and (max-width: 768px) {
        p {
            font-size: 15px;
            span {
                img {
                    width: 25px;
                }
            }
        }
    }
`