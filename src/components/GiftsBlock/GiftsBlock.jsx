import React from 'react';
import { GiftsWrapper, GiftsList, EmojiPicStyled } from './styles';
import PictureFire from '../../images/pngfindcom-lit-emoji.webp';
import EmojiPic from '../../images/6CEC9A68-7154-4174-A0F9-020E1C2F1645.png';

export const GiftsBlock = () => {
    return (
        <GiftsWrapper>
            <GiftsList>
                <p>
                    <span>
                        <img src={PictureFire} alt="fire" />
                    </span>
                    <strong>Моя консультация за 120к</strong>
                </p>
                <p>
                    <span>
                        <img src={PictureFire} alt="fire" />
                    </span>
                    Возможность вернуть полную стоимость марафона
                </p>
                <p>
                    <span>
                        <img src={PictureFire} alt="fire" />
                    </span>
                    15 мест на проработку родовых финансовых блоков с психологом
                </p>
            </GiftsList>
            <EmojiPicStyled src={EmojiPic} />
        </GiftsWrapper>
    );
};
