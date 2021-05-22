import * as React from 'react'
import { CustomCarouselMeditations } from './CustomCarouselMeditations'
import { CatalogFooter } from '../CatalogFooter'
import {
    CatalogHeaderContainer,
    CatalogContainer,
    CatalogReviewStyled,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import { Link } from 'gatsby'

export const CatalogReview = () => {
    
    return (
        <CatalogReviewStyled>
            <span><Link to='/'>Назад</Link></span>
            <CatalogHeaderContainer>
                <h1>Магазин волшебства</h1>
                <h2>от @astrolog_demidova</h2>
                <img src={emoji} alt="" />
            </CatalogHeaderContainer>

            <CatalogContainer>
                <CustomCarouselMeditations />
            </CatalogContainer>

            <CatalogFooter />
        </CatalogReviewStyled>
    )
}
