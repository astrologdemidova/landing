import * as React from "react"
import {ButtonStyled} from "./styles"

export const CustomButton = ({children}) => {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    )
}