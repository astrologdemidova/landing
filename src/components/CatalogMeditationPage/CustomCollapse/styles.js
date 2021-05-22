import styled from "styled-components";

export const ButtonMenu = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 30px;
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
    color: #ffffff;
    font-size: 11px;
    font-weight: 100;
    
    @media all and (max-width: 768px) {
        bottom: 35px;
        right: 15px;
    }
`
