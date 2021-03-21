import * as React from "react"
import { FooterStyled, FooterText, FooterLink, FooterSeparite } from "./styles"

export const CustomFooter = () => {
    return (
        <FooterStyled>
            <FooterSeparite />
            <FooterText>
                ИП Белякова Александра Дмитриевна
            </FooterText>
            <FooterText>
                ОГРНИП 318784700094120
            </FooterText>
            <FooterText>
                г. Санкт-Петербург
            </FooterText>
            <FooterText>
                <FooterLink href='#'>
                    +7 999 654 77 69
                </FooterLink>
            </FooterText>
            <FooterText>
                <FooterLink href='#'>
                    astrologdemidova@mail.ru
                </FooterLink>
            </FooterText>



            <FooterSeparite />

            <FooterText>
                <FooterLink href='#' colorRed>
                    Политика конфиденциальности
                </FooterLink>
            </FooterText>
            <FooterText>
                <FooterLink href='#'>
                    Договор оферты
                </FooterLink>
            </FooterText>

            <FooterSeparite />

            <FooterText>
                <FooterLink href='https://webreznov.ru/' target='_blank'>
                    #webreznov__studio
                </FooterLink>
            </FooterText>
        </FooterStyled>
    )
}