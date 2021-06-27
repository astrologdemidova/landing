import * as React from 'react'
import {
    CatalogFooterLink,
    CatalogFooterStyled,
    CatalogFooterText,
    CatalogFooterLinkWeb,
    CatalogFooterWrapper,
    CatalogSocialBlock,
} from './styles'
import imgTiktok from '../../../images/catalog/icons8_tiktok_50px.png';
import imgInstagram from '../../../images/catalog/icons8_instagram_50px_1.png';
import imgWhatsapp from '../../../images/catalog/icons8_whatsapp_50px.png';

export const CatalogFooter = () => {
    return (
        <CatalogFooterStyled>
            <CatalogFooterWrapper>
                <CatalogSocialBlock>
                    <div><a href='https://www.instagram.com/astrolog_demidova/' rel='noreferrer' target='_blank' ><img src={imgInstagram} alt='instagrm'/></a></div>
                    <div><a href='https://vm.tiktok.com/ZSJPqjsHY/' rel='noreferrer' target='_blank' ><img src={imgTiktok} alt='tiktok'/></a></div>
                    <div><a href='https://wa.me/message/JSDOINY2LABTP1' rel='noreferrer' target='_blank' ><img src={imgWhatsapp} alt='whatsapp'/></a></div>
                </CatalogSocialBlock>

                <CatalogFooterText>Демидова Яна</CatalogFooterText>
                <CatalogFooterText>
                    <CatalogFooterLink href="mailto:astrologdemidova@mail.ru">
                        astrologdemidova@mail.ru
                    </CatalogFooterLink>
                </CatalogFooterText>
                <CatalogFooterText>г. Рязань</CatalogFooterText>
            </CatalogFooterWrapper>

            <CatalogFooterText $isBlack={isBlack}>ооо «егер»</CatalogFooterText>

            <CatalogFooterText>
                <CatalogFooterLinkWeb
                    href="https://webreznov.ru/"
                    rel="noreferrer"
                    target="_blank"
                >
                    #webreznov__studio
                </CatalogFooterLinkWeb>
            </CatalogFooterText>
        </CatalogFooterStyled>
    )
}
