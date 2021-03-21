import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: #0d0d0d;
    padding: 15px 0;
    text-align: center;
`

export const FooterText = styled.p`
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
    padding: 0;
    margin: 0;
`

export const FooterLink = styled.a`
    text-decoration: none;
    color: ${props => props.colorRed ? '#ff8562' : '#ffffff'};
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
`

export const FooterSeparite = styled.div`
    width: 100%;
    padding-top: 40px;
`