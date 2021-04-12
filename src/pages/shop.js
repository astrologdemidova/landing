import * as React from 'react'
import { Helmet } from 'react-helmet'
import { CatalogWrapper } from '../components/CatalogPage/CatalogWrapper'

const Shop = () => {
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
                <style type="text/css">{`
                    body {
                        paddnig: 0;
                        margin: 0;
                    }
                `}</style>
            </Helmet>
            <CatalogWrapper />
        </>
    )
}

export default Shop
