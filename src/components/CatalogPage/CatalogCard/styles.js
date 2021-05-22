import styled from "styled-components";

export const CatalogCardWrapper = styled.div`
    max-width: 29%;
    width: 100%;
    margin: 20px;
    padding: 10px 20px 50px;
    border: 1px solid #e0e6ed;
    border-radius: 12px;
    background: white;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);
    @media all and (max-width: 991px) {
        max-width: 100%;
    }
`;

export const CatalogCardCoast = styled.p`
    font-size: 24px;
    color: #e69e60;
    text-align: center;
`;

export const CatalogCardCoastStrike = styled.p`
    text-decoration: line-through;
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

export const CatalogHeaderFaq = styled.b`
    display: inline-block;
    padding-top: 20px;
    font-size: 13px;
`;
export const CatalogQuestionFaq = styled.span`
    display: inline-block;
    font-size: 13px;
`;

export const CatalogCardShow = styled.div`
    cursor: pointer;
    text-align: center;
    margin: 20px 0;
`;

export const CatalogCardLinkPay = styled.a`
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

export const ImgCard = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 30px;
`;


export const PopupCardpayWrapper = styled.div`
    position: fixed;
    top: -100px;
    left: 0;
    bottom: -100px;
    right: 0;
    width: 100%;
    z-index: 111;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        /* background: white; */
        /* padding: 40px 20px; */
        label {
            display: inline-block;
            width: 100%;
        }
        input {
            font-size: 18px;
            padding-top: 4px;
            padding-bottom: 7px;
            border-top: none;
            border-left: none;
            border-right: none;
        }
        input:focus{
            border: none;
        }
        div {
            padding-top: 10px;
            padding-bottom: 30px;
        }
    }
    @media all and (max-width: 370px) {
        form {
            font-size: 12px;
            div {
            padding-bottom: 20px;
        }
        }
    }
`;