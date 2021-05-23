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
import imgTiktokBlack from '../../../images/catalog/icons8_tiktok_50px_black.png';
import imgInstagramBlack from '../../../images/catalog/icons8_instagram_50px_1_black.png';
import imgWhatsappBlack from '../../../images/catalog/icons8_whatsapp_50px_black.png';

export const CatalogFooter = ({isBlack}) => {
    return (
        <CatalogFooterStyled $isBlack={isBlack}>
            <CatalogFooterWrapper $isBlack={isBlack}>
                <CatalogSocialBlock>
                    {!isBlack && <div><a href='https://www.instagram.com/astrolog_demidova/' rel='noreferrer' target='_blank' ><img src={imgInstagram} alt='instagrm'/></a></div>}
                    {isBlack && <div><a href='https://www.instagram.com/astrolog_demidova/' rel='noreferrer' target='_blank' ><img src={imgInstagramBlack} alt='instagrm'/></a></div>}

                    {!isBlack && <div><a href='https://vm.tiktok.com/ZSJPqjsHY/' rel='noreferrer' target='_blank' ><img src={imgTiktok} alt='tiktok'/></a></div>}
                    {isBlack && <div><a href='https://vm.tiktok.com/ZSJPqjsHY/' rel='noreferrer' target='_blank' ><img src={imgTiktokBlack} alt='tiktok'/></a></div>}

                    {!isBlack && <div><a href='https://wa.me/message/JSDOINY2LABTP1' rel='noreferrer' target='_blank' ><img src={imgWhatsapp} alt='whatsapp'/></a></div>}
                    {isBlack && <div><a href='https://wa.me/message/JSDOINY2LABTP1' rel='noreferrer' target='_blank' ><img src={imgWhatsappBlack} alt='whatsapp'/></a></div>}
                </CatalogSocialBlock>

                <CatalogFooterText $isBlack={isBlack}>Демидова Яна</CatalogFooterText>
                <CatalogFooterText>
                    <CatalogFooterLink href="mailto:astrologdemidova@mail.ru">
                        astrologdemidova@mail.ru
                    </CatalogFooterLink>
                </CatalogFooterText>
                <CatalogFooterText $isBlack={isBlack}>г. Рязань</CatalogFooterText>
            </CatalogFooterWrapper>

            {!isBlack && <CatalogFooterText>
                <CatalogFooterLinkWeb
                    href="https://webreznov.ru/"
                    rel="noreferrer"
                    target="_blank"
                >
                    #webreznov__studio
                </CatalogFooterLinkWeb>
            </CatalogFooterText>}
        </CatalogFooterStyled>
    )
}
