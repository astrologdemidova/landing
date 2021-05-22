import * as React from 'react'
import "../../common-style/style.css"
import { Helmet } from 'react-helmet'
import { CatalogReview } from '../../components/CatalogPage/CatalogReview'
import { contentTypeRitual } from '../../components/CatalogPage/CatalogWrapper/CatalogWrapper'

const ReviewRituals = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Отзывы о ритуалах</title>
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
            <h1>Отзывы о ритуалах</h1>
            <CatalogReview entityType={contentTypeRitual}/>
        </>
    )
}

export default ReviewRituals
