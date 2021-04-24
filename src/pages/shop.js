import * as React from 'react'
import "../common-style/style.css"
import { Helmet } from 'react-helmet'
import { CatalogWrapper } from '../components/CatalogPage/CatalogWrapper'

const Shop = () => {
    <script type="text/javascript" src="https://payform.prodamus.me/widget.js" async></script>
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Каталог продуктов</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Alex+Brush"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
                    rel="stylesheet"
                    type="text/css"
                />
            </Helmet>
            <CatalogWrapper />
        </>
    )
}

export default Shop
