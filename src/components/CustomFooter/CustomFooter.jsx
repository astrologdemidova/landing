import * as React from "react"
import {FooterStyled, FooterText} from "./styles"

export const CustomFooter = () => {
    return (
        <FooterStyled>
            <FooterText>
                ИП Белякова Александра Дмитриевна
            </FooterText>
            <FooterText>
                ОГРНИП 318784700094120
            </FooterText>
            <FooterText>
                г. Санкт-Петербург
            </FooterText>
        </FooterStyled>
    )
}