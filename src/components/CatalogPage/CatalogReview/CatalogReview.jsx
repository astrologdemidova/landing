import * as React from 'react'
import { CustomCarouselMeditations } from './CustomCarouselMeditations'
import { CustomCarouselConsultations } from './CustomCarouselConsultations'
import { CustomCarouselRituals } from './CustomCarouselRituals'
import { CatalogFooter } from '../CatalogFooter'
import {
    CatalogHeaderContainer,
    CatalogContainer,
    CatalogReviewStyled,
} from './styles'
import emoji from '../../../images/emoji-schh.png'
import { Link } from 'gatsby'
import { contentTypeConsultation, contentTypeMeditation, contentTypeRitual } from '../CatalogWrapper/CatalogWrapper'

export const CatalogReview = ({entityType}) => {
    console.log('###########', entityType)
    return (
        <CatalogReviewStyled>
            <span><Link to='/shop'>Назад</Link></span>
            <CatalogHeaderContainer>
                <h1>Магазин волшебства</h1>
                <h2>от @astrolog_demidova</h2>
                <img src={emoji} alt="" />
            </CatalogHeaderContainer>
            
            <CatalogContainer>
                {entityType === contentTypeMeditation && <CustomCarouselMeditations />}
                {entityType === contentTypeConsultation && <CustomCarouselConsultations />}
                {entityType === contentTypeRitual && <CustomCarouselRituals />}
            </CatalogContainer>

            <CatalogFooter />
        </CatalogReviewStyled>
    )
}
