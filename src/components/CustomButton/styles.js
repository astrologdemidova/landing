import styled from "styled-components";

// #d44e81 shadow of buttons
export const ButtonStyled = styled.button`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    outline: none;
    border-radius: 30px;
    border-color: transparent;
    max-width: 275px;
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #6a45ab;
    color: #ffffff;
    font-size: 16px;
    /* box-shadow: 0px 0px 10px 10px rgba(253, 117, 180, 0.3);rgb(162 8 147); */
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.5);
    line-height: 1.55;
    height: 65px;
    cursor: pointer;
    animation: 1.5s infinite alternate lightningBtn;
    a {
        color: #ffffff;
        text-decoration: none;
    }
    @keyframes lightningBtn {
        from {
            box-shadow: 0px 0px 10px 5px rgba(162, 8, 147, 0.5);
        }

        to {
            box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.5);
        }
    }
`