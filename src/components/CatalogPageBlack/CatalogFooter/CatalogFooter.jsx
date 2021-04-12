import * as React from 'react'
import {
    CatalogFooterLink,
    CatalogFooterStyled,
    CatalogFooterText,
    CatalogFooterLinkWeb,
    CatalogFooterWrapper,
} from './styles'

export const CatalogFooter = () => {
    return (
        <CatalogFooterStyled>
            <CatalogFooterWrapper>
                <CatalogFooterText>Демидова Яна</CatalogFooterText>
                <CatalogFooterText>
                    <CatalogFooterLink href="mailto:astrologdemidova@mail.ru">
                        astrologdemidova@mail.ru
                    </CatalogFooterLink>
                </CatalogFooterText>
                <CatalogFooterText>г. Рязань</CatalogFooterText>
            </CatalogFooterWrapper>

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
