import * as React from "react"
import { FooterStyled, FooterText, FooterLink, FooterSeparite, FooterLinkReact } from "./styles"

export const CustomFooter = ({setShowPopup}) => {
    return (
        <FooterStyled>
            <FooterSeparite />
            <FooterText>
                Демидова Яна
            </FooterText>
            <FooterText>
                г. Рязань
            </FooterText>
            <FooterText>
                <FooterLink href='mailto:astrologdemidova@mail.ru'>
                    astrologdemidova@mail.ru
                </FooterLink>
            </FooterText>

            <FooterSeparite />

            <FooterText>
                <FooterLinkReact href='/policy' colorRed>
                    Политика конфиденциальности
                </FooterLinkReact>
            </FooterText>

            <FooterSeparite />

            <FooterText>
                <FooterLink href='https://webreznov.ru/' rel="noreferrer" target='_blank'>
                    #webreznov__studio
                </FooterLink>
            </FooterText>
            <FooterText>
                <FooterLink style={{color: '#1d0404'}} onClick={() => setShowPopup(prev => !prev)}>
                    test
                </FooterLink>
            </FooterText>

        </FooterStyled>
    )
}