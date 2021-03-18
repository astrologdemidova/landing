import * as React from "react"
import {LineHeaderWrapper, TextStyled} from "./styles"

export const LineHeader = ({children, bgColor}) => {
    return (
        <LineHeaderWrapper bgColor={bgColor}>
            <TextStyled>
                {children}
            </TextStyled>
        </LineHeaderWrapper>
    )
}
