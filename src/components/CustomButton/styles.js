import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    outline: none;
    border-radius: 30px;
    border-color: transparent;
    max-width: 275px;
    width: 100%;
    background-color: #f75995;
    color: #ffffff;
    font-size: 16px;
    box-shadow: 0px 0px 10px 10px rgba(253, 117, 180, 0.3);
    line-height: 1.55;
    height: 65px;
    cursor: pointer;
    animation: 1.5s infinite alternate lightningBtn;
    @keyframes lightningBtn {
        from {
            box-shadow: 0px 0px 10px 5px rgba(253, 117, 180, 0.3);
        }

        to {
            box-shadow: 0px 0px 10px 10px rgba(253, 117, 180, 0.3);
        }
    }
`