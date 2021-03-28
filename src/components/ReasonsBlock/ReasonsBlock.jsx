import React from "react"
import { ReasonsWrapper, ReasonsList, EmojiPicStyled } from './styles.js'
import { CustomButton } from "../CustomButton"
import { Link } from 'react-scroll'
import EmojiPic from "../../images/CA5F2355-55E0-48AC-A200-1E591F7F73C1.png"

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
            <div style={{paddingTop: '30px'}}>
                <Link to="tariff" smooth={true} duration={700} delay={100} href=''>
                    <CustomButton>
                        хочу это изменить
                        <EmojiPicStyled src={EmojiPic} alt=''/>
                    </CustomButton>
                </Link>
            </div>
        </ReasonsWrapper>
    )
}