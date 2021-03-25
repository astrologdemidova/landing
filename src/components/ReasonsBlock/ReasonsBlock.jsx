import React from "react"
import { ReasonsWrapper, ReasonsList } from './styles.js'
import { CustomButton } from "../CustomButton"

export const ReasonsBlock = () => {
    return (
        <ReasonsWrapper>
            <ReasonsList>
                <p><span>*</span>НЕ МОЖЕТЕ ПРОБИТЬ <strong>ФИНАНСОВЫЙ ПОТОЛОК</strong></p>
                <p><span>*</span><strong>ЖИВЕТЕ ОТ ЗАРПЛАТЫ ДО ЗАРПЛАТЫ</strong></p>
                <p><span>*</span><strong>СЧИТАЕТЕ, ЧТО НУЖНО ЕЩЁ БОЛЬШЕ РАБОТАТЬ,</strong> ЧТОБЫ ИМЕТЬ <strong>БОЛЬШЕ ДЕНЕГ</strong></p>
                <p><span>*</span>ВЕЧНО РАБОТАЕТЕ, НО <strong>НЕ МОЖЕТЕ РАССЛАБИТЬСЯ</strong> И ЖИТЬ В КАЙФ</p>
                <p><span>*</span><strong>БОИТЕСЬ ТРАТИТЬ ДЕНЬГИ НА СЕБЯ</strong>, ПОТОМУ ЧТО ОНИ НУЖНЫ НА ЧЁРНЫЙ ДЕНЬ</p>
                <p><span>*</span><strong>ПОСТОЯННО ЭКОНОМИТЕ</strong>, ЧТОБЫ СОЗДАТЬ ПОДУШКУ БЕЗОПАСНОСТИ</p>
                <p><span>*</span><strong>ЧАСТО ИСПЫТЫВАЕТЕ НЕГАТИВНЫЕ ЭМОЦИИ: СТРАХ, ОТЧАЯНИЕ, УСТАЛОСТЬ</strong></p>
                <p><span>*</span><strong>ПОСТОЯННО КУДА-ТО БЕЖИТЕ</strong> И НЕ МОЖЕТЕ ОСТАНОВИТЬСЯ, ЧТОБЫ ВЫДОХНУТЬ</p>
                <p><span>*</span><strong>ЧУВСТВУЕТЕ ВЫГОРАНИЕ</strong> И МЕЧТАЕТЕ ИЗМЕНИТЬ ЖИЗНЬ</p>
                <p><span>*</span>СЧИТАЕТЕ СЕБЯ <strong>ЛЕНИВЫМ</strong> ИЛИ НЕ ДОСТАТОЧНО СМЕЛЫМ</p>
                <p><span>*</span><strong>БОИТЕСЬ</strong> ПОДНЯТЬ ЦЕНЫ <strong>НА СВОИ УСЛУГИ</strong></p>
            </ReasonsList>
            <div>
                <CustomButton>
                    хочу это изменить
                </CustomButton>
            </div>
        </ReasonsWrapper>
    )
}