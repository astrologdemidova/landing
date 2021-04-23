import * as React from 'react'
import { CustomCarousel } from './CustomCarousel'
import { CatalogFooter } from '../CatalogFooter'
import {
    CatalogHeaderContainer,
    CatalogContainer,
    CatalogReviewStyled,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import { Link } from 'gatsby'

export const contentTypeMenu = 'CONTENT_TYPE_MENU'
export const contentTypeRuny = 'CONTENT_TYPE_RUNY'
export const contentTypeMeditation = 'CONTENT_TYPE_MEDITATION'
export const contentTypeConsultation = 'CONTENT_TYPE_CONSULTATION'
export const contentTypeStones = 'CONTENT_TYPE_STONES'

export const CatalogReview = () => {
    return (
        <CatalogReviewStyled>
            <span><Link to='/shop'>Назад</Link></span>
            <CatalogHeaderContainer>
                <h1>Магазин волшебства</h1>
                <h2>от @astrolog_demidova</h2>
                <img src={emoji} alt="" />
            </CatalogHeaderContainer>
            
            <CatalogContainer>
                <CustomCarousel />
            </CatalogContainer>

            <CatalogFooter />
        </CatalogReviewStyled>
    )
}
