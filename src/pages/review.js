import * as React from 'react'
import "../common-style/style.css"
import { Helmet } from 'react-helmet'
import { CatalogReview } from '../components/CatalogPage/CatalogReview'

const Review = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Отзывы</title>
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
            <CatalogReview />
        </>
    )
}

export default Review
