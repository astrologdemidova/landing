import * as React from "react"
import {
    HelloBlockStyled,
    HelloText,
    HelloPicture,
} from "./styles"
import helloBlock from "../../images/photo_2020-09-30_191.webp"
import { CustomButton } from "../CustomButton"
import { CustomMarker } from "../CustomMarker"

export const HelloBlock = () => {
    return (
        <HelloBlockStyled>
            <HelloPicture>
                <img src={helloBlock} alt="Астролог Демидова Яна" />
            </HelloPicture>

            <HelloText>
                <ul>
                    <li>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Я ЯНА, <strong>РОДОМ ИЗ РЯЗАНИ</strong>, ИЗ САМОЙ ОБЫЧНОЙ СЕМЬИ. 
                            2 ГОДА НАЗАД СНИМАЛА КВАРТИРКУ <strong>С УЖАСНЫМ РЕМОНТОМ</strong> 
                            И ПОЛУЧАЛА 15.000₽ ЗА СВОЮ РАБОТУ. СЕЙЧАС Я <strong>ЗАРАБАТЫВАЮ МИЛЛИОНЫ</strong>
                            И ПРОЖИВАЮ САМУЮ <strong>ЛУЧШУЮ ЖИЗНЬ</strong> В ТОПОВЫХ МЕСТАХ НАШЕГО МИРА
                        </p>
                    </li>
                    <li>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            У МЕНЯ УСПЕШНЫЙ БИЗНЕС, ЛЮБИМАЯ КОМАНДА СОТРУДНИКОВ, 
                            ПРЕКРАСНЫЕ ОТНОШЕНИЯ, НО ГЛАВНОЕ - <strong>Я СЧАСТЛИВА КАЖДЫЙ ДЕНЬ</strong>! 
                            Я ЗНАЮ, ЧТО ТЫ ТОЖЕ ЭТОГО <strong>ХОЧЕШЬ И МОЖЕШЬ</strong>!
                        </p>
                    </li>
                    <li>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Я ПОТРАТИЛА <strong>2.000.000₽</strong> НА ПРОКАЧКУ СВОЕЙ ДЕНЕЖНОЙ ЭНЕРГИИ
                            И В СВОЕМ МАРАФОНЕ <strong>СОБРАЛА САМОЕ ЛУЧШЕЕ</strong>!
                        </p>
                    </li>
                </ul>
                <p>
                    У ТЕБЯ ВСЕ ПОЛУЧИТСЯ!<br/>
                    С ЛЮБОВЬЮ, ЯНА Д.
                </p>
                <CustomButton>купить</CustomButton>
            </HelloText>
        </HelloBlockStyled>
    )
}