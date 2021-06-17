import styled from "styled-components";

export const ButtonMenu = styled.div`
    position: fixed;
    z-index: 100;
    top: 30px;
    right: 40px;
    width: 48px;
    height: 48px;
    border-radius: 40px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    div {
        width: 20px;
        height: 2px;
        background: #ffffff;
        margin: 2px;
    }
    @media all and (max-width: 768px) {
        top: 15px;
        right: 15px;
    }
`

export const MenuWrapperStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    width: 100%;
    z-index: 101;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
`

export const MenuStyled = styled.div`
    width: 100%;
    max-width: 300px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 48px 40px 38px;
    height: 100%;
    position: relative;
    right: 0;
    animation: 0.5s 1 alternate slidein;
    @keyframes slidein {
        from {
            right: -270px;
        }

        to {
            right: 0;
        }
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 24px;
        margin-bottom: 15px;
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
        color: #1d2147;
    }
`

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    font-size: 50px;
    font-weight: 200;
    transform: rotate(45deg);
`