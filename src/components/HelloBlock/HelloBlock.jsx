import * as React from "react"
import {
    HelloBlockStyled,
    HeaderStyled,
    HelloText,
    HelloPicture
} from "./styles"
import helloBlock from "../../images/2.webp"
import { CustomButton } from "../CustomButton"

export const HelloBlock = () => {
    return (
        <HelloBlockStyled>
            <HeaderStyled>
                <a href='#'>об александре б.</a>
                <a href='#'>программа</a>
                <a href='#'>купить</a>
                <a href='#'>отзывы</a>
            </HeaderStyled>

            <HelloText>
                <h1>Демидова Яна</h1>
                <h2>Астролог</h2>

                <h4>МАРАФОН ПРОХОДИТ В TELEGRAM</h4>
                <CustomButton>
                    участвовать
                </CustomButton>
            </HelloText>

            <HelloPicture>
                <img src={helloBlock} alt="Астролог Демидова Яна"/>
            </HelloPicture>
        </HelloBlockStyled>
    )
}