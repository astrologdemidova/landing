import * as React from 'react'
import "../../common-style/style.css"
import { Helmet } from 'react-helmet'
import { CatalogReview } from '../../components/CatalogPage/CatalogReview'
import { contentTypeConsultation } from '../../components/CatalogPage/CatalogWrapper/CatalogWrapper'

const ReviewConsultations = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Отзывы о консультациях</title>
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
            <h1>Отзывы о консультациях</h1>
            <CatalogReview entityType={contentTypeConsultation}/>
        </>
    )
}

export default ReviewConsultations
