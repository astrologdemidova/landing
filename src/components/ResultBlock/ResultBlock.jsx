import React from "react"
import { ResultWrapper, ResultList } from './styles.js'
import PictureFire from "../../images/pngfindcom-lit-emoji.webp"

export const ResultBlock = () => {
    return (
        <ResultWrapper>
            <ResultList>
                <p><span><img src={PictureFire} alt="fire"/></span>НЕ МОЖЕТЕ ПРОБИТЬ <strong>ФИНАНСОВЫЙ ПОТОЛОК</strong></p>
                <p><span><img src={PictureFire} alt="fire"/></span>ПОСТОЯННО <strong>ЖИВЕТЕ ОТ ЗАРПЛАТЫ ДО ЗАРПЛАТЫ</strong></p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>ДУМАЕТЕ, ЧТО ДЕНЬГИ</strong> МОЖНО ПОЛУЧИТЬ <strong>ТОЛЬКО ТЯЖКИМ ТРУДОМ</strong></p>
                <p><span><img src={PictureFire} alt="fire"/></span>ВЕЧНО РАБОТАЕТЕ, НО <strong>НЕ МОЖЕТЕ РАССЛАБИТЬСЯ</strong> И ЖИТЬ В КАЙФ</p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>БОИТЕСЬ ТРАТИТЬ ДЕНЬГИ НА СЕБЯ</strong>, ПОТОМУ ЧТО ОНИ НУЖНЫ НА ЧЁРНЫЙ ДЕНЬ</p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>ПОСТОЯННО ЭКОНОМИТЕ</strong>, ЧТОБЫ СОЗДАТЬ ПОДУШКУ БЕЗОПАСНОСТИ</p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>ЧАСТО ИСПЫТЫВАЕТЕ НЕГАТИВНЫЕ ЭМОЦИИ: СТРАХ, ОТЧАЯНИЕ, УСТАЛОСТЬ</strong></p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>ПОСТОЯННО КУДА-ТО БЕЖИТЕ</strong> И НЕ МОЖЕТЕ ОСТАНОВИТЬСЯ, ЧТОБЫ ВЫДОХНУТЬ</p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>ЧУВСТВУЕТЕ ВЫГОРАНИЕ</strong> И МЕЧТАЕТЕ ИЗМЕНИТЬ ЖИЗНЬ</p>
                <p><span><img src={PictureFire} alt="fire"/></span>ПОДВЕРЖЕНЫ ВЛИЯНИЮ <strong>ЭНЕРГЕТИЧЕСКИХ ВАМПИРОВ</strong> И ИХ МАНИПУЛЯЦИЯМ</p>
                <p><span><img src={PictureFire} alt="fire"/></span><strong>НЕ УМЕЕТЕ ПРОСТРАИВАТЬ</strong> СВОИ ЛИЧНЫЕ <strong>ГРАНИЦЫ</strong></p>
            </ResultList>
        </ResultWrapper>
    )
}