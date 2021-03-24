import * as React from "react"
import {
    HeadBlockStyled,
    HeaderStyled,
    HelloText,
    HelloPicture,
    BackgroundHelloBlock,
    BackgroundHelloBlockResponsive,
} from "./styles"
import helloBlock from "../../images/2.webp"
import { CustomButton } from "../CustomButton"
import { CustomMarker } from "../CustomMarker"

export const HeadBlock = () => {
    return (
        <HeadBlockStyled>
            <HelloText>
                <div>
                    <HeaderStyled>
                        <a href='#'>об александре б.</a>
                        <a href='#'>программа</a>
                        <a href='#'>купить</a>
                        <a href='#'>отзывы</a>
                    </HeaderStyled>
                    <h1>Демидова Яна</h1>
                    <h2>Астролог</h2>
                    <ul>
                        <li>
                            <CustomMarker type='pink'/>
                            7 ДНЕЙ ПРОКАЧКИ ДЕНЕЖНОЙ ЭНЕРГИИ
                        </li>
                        <li>
                            <CustomMarker type='pink'/>
                            7 АБСОЛЮТНО НОВЫХ ПРАКТИК В 3D ЗВУКЕ
                        </li>
                        <li>
                            <CustomMarker type='pink'/>
                            МАСТЕРМАИНД ОТ АЛЕКСАНДРЫ Б
                        </li>
                        <li>
                            <CustomMarker type='pink'/>
                            СПЕЦИАЛЬНЫЙ УРОК ПО ЭНЕРГЕТИЧЕСКИМ ПРАКТИКАМ
                        </li>
                    </ul>
                </div>

                <h4>МАРАФОН ПРОХОДИТ В TELEGRAM</h4>
                <CustomButton>
                    участвовать
                </CustomButton>
                <BackgroundHelloBlock />
            </HelloText>
                <BackgroundHelloBlockResponsive />

            <HelloPicture>
                <img src={helloBlock} alt="Астролог Демидова Яна" />
            </HelloPicture>
        </HeadBlockStyled>
    )
}