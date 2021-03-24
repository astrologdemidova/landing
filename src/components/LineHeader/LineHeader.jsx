import * as React from "react"
import {LineHeaderWrapper, TextStyled} from "./styles"

export const LineHeader = ({children, bgColor, smallFont = false}) => {
    return (
        <LineHeaderWrapper bgColor={bgColor}>
            <TextStyled smallFont={smallFont}>
                {children}
            </TextStyled>
        </LineHeaderWrapper>
    )
}
