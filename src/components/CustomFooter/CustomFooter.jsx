import * as React from "react"
import { Link } from "gatsby"
import { FooterStyled, FooterText, FooterLink, FooterSeparite, FooterLinkReact } from "./styles"

export const CustomFooter = ({setShowPopup}) => {
    return (
        <FooterStyled>
            <FooterSeparite />
            <FooterText>
                Демидова Яна
            </FooterText>
            {/* <FooterText>
                ОГРНИП 318784700094120
            </FooterText> */}
            <FooterText>
                г. Рязань
            </FooterText>
            {/* <FooterText>
                <FooterLink href='#'>
                    +7 999 654 77 69
                </FooterLink>
            </FooterText> */}
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
            {/* <FooterText>
                <FooterLink href='#'>
                    Договор оферты
                </FooterLink>
            </FooterText> */}

            <FooterSeparite />

            <FooterText>
                <FooterLink href='https://webreznov.ru/' target='_blank'>
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