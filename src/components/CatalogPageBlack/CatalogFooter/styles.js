import styled from "styled-components";

export const CatalogFooterStyled = styled.footer`
    max-width: 992px;
    width: 100%;
    margin: 0 auto;
    padding: 35px 15px;
    box-sizing: border-box;
    color: white;
`;

export const CatalogFooterText = styled.p`
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
    padding: 0;
    margin: 0;
`

export const CatalogFooterLink = styled.a`
    text-decoration: none;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
`

export const CatalogFooterLinkWeb = styled.a`
    display: inline-block;
    margin-top: 30px;
    text-decoration: none;
    color: #666666;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
`

export const CatalogFooterWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media all and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;