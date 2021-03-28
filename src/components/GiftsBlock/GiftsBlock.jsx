import React from "react"
import { GiftsWrapper, GiftsList } from "./styles"
import PictureFire from "../../images/pngfindcom-lit-emoji.webp"

export const GiftsBlock = () => {
    return (
        <GiftsWrapper>
            <GiftsList>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span><strong>Моя консультация за 120к</strong>
                </p>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span>Возможность вернуть полную стоимость марафона
                </p>
                <p>
                    <span><img src={PictureFire} alt="fire"/></span>15 мест на проработку родовых финансовых блоков с психологом
                </p>
            </GiftsList>
        </GiftsWrapper>
    )
}
