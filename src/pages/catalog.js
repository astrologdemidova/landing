import * as React from "react";
import {Helmet} from "react-helmet";
import {CatalogWrapper} from "../components/CatalogPage/CatalogWrapper";

const Catalog = () => {
    return (
        <CatalogWrapper>
            <Helmet defaultTitle='Каталог продуктов' titleTemplate='Каталог продуктов'>
                <title>Каталог продуктов</title>
                <link href="https://fonts.googleapis.com/css?family=Alex+Brush" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link>
            </Helmet>
        </CatalogWrapper>
    )
}

export default Catalog;