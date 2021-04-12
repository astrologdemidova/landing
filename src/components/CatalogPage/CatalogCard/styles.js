import styled from "styled-components";

export const CatalogCardWrapper = styled.div`
    max-width: 31%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin: 30px 0;
    img {
        width: 100%;
    }
    @media all and (max-width: 991px) {
        max-width: 100%;
    }
`;

export const CatalogCardCoast = styled.p`
    color: #e69e60;
    text-align: center;
`;

export const CatalogCardTitle = styled.p`
    text-transform: uppercase;
    font-weight: 200;
    text-align: center;
`;

export const CatalogCardSubTitle = styled.p`
    color: #e69e60;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 200;
    text-align: center;
`;

export const CatalogCardDescription = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    li {
        font-size: 12px;
        font-family: 'Roboto Condensed', sans-serif;
        padding: 5px 0;
    }
`;

export const CatalogCardShow = styled.div`
    cursor: pointer;
    text-align: center;
    margin: 20px 0;
`;

export const CatalogCardLinkPay = styled.a`
    display: block;
    width: 116px;
    border: 1px solid #888;
    cursor: pointer;
    text-align: center;
    padding: 12px 22px;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    color: #888;
    margin: 0 auto;
`;

