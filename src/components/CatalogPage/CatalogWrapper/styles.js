import styled from "styled-components";
import BgPicture from '../../../images/catalog/main-bg-home1.jpg';

export const CatalogWrapperStyled = styled.main`
    padding: 20px;
    background: url(${BgPicture}) no-repeat;
    background-size: cover;
    * {
        font-family: 'Roboto Condensed', sans-serif;
    }
`;

export const CatalogHeaderContainer = styled.header`
    max-width: 992px;
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    box-sizing: border-box;
    color: white;
    text-align: right;
    h2 {
        color: #e69e60;
        font-family: 'Alex Brush', cursive;
    }
`;

export const CatalogContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 992px;
    width: 100%;
    background: white;
    margin: 0 auto;
    padding: 15px;
    box-sizing: border-box;
`;