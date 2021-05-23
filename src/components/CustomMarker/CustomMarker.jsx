import * as React from "react"
import {CustomMarkerPinkStyled, CustomMarkerBlueStyled} from "./styles"

const Pink = 'pink';
export const CustomMarker = ({type}) => type === Pink ? <CustomMarkerPinkStyled /> : <CustomMarkerBlueStyled />