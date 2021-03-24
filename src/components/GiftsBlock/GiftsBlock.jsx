import React from "react"
import { GiftsWrapper, GiftsList } from "./styles"
import PictureFire from "../../images/pngfindcom-lit-emoji.webp"

export const GiftsBlock = () => {
    return (
        <GiftsWrapper>
            <GiftsList>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span>iPHONE 12
                </p>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span>НЕЙРООБРУЧ ДЛЯ МЕДИТАЦИИ MUSE 2
                </p>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span>ДЕНЕЖНЫЕ ПРИЗЫ
                </p>
            </GiftsList>
        </GiftsWrapper>
    )
}
