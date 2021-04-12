import styled from "styled-components";

export const CatalogCardWrapper = styled.div`
    /* max-width: 31%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin: 30px 0;
    img {
        width: 100%;
    } */
    max-width: 29%;
    width: 100%;
    margin: 20px;
    padding: 10px 20px 50px;
    border: 1px solid #e0e6ed;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);
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
    /* display: block;
    width: 116px;
    border: 1px solid #888;
    cursor: pointer;
    text-align: center;
    padding: 12px 22px;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    color: #888;
    margin: 0 auto; */
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
    font-size: 15px;
    /* box-shadow: 0px 0px 10px 10px rgba(253, 117, 180, 0.3);rgb(162 8 147); */
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.5);
    line-height: 1.15;
    height: 55px;
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
`;

