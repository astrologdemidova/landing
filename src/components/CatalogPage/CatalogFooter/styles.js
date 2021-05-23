import styled from "styled-components";

export const CatalogFooterStyled = styled.footer`
    background-color: ${props => !props.$isBlack && ' #0d0d0d'};
    width: 100%;
    padding: 35px 15px;
    box-sizing: border-box;
    color: white;
    display: block;
`;

export const CatalogFooterText = styled.p`
    color: ${props => !props.$isBlack ? ' #ffffff' : '#0d0d0d'};
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
    padding: 0;
    margin: 0;
`

export const CatalogFooterLink = styled.a`
    text-decoration: none;
    color: ${props => !props.$isBlack ? ' #ffffff' : '#0d0d0d'};
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
    flex-direction: ${props => !props.$isBlack ? 'row' : 'column'};
    justify-content: ${props => !props.$isBlack ? 'space-around' : 'center'};
    @media all and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CatalogSocialBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    div {
        padding: 0 10px;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.2);
        }
    }
    @media all and (max-width: 767px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;
