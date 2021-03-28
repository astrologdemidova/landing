import React from "react"
import { MarathonWrapper, MarathonList, CardStyled } from './styles.js'
import { CustomButton } from "../CustomButton"
import { LineHeader } from "../LineHeader"
import { Link } from 'react-scroll'

const Card = ({children, revert}) => {
    return (
        <CardStyled revert={revert}>
            {children}
        </CardStyled>
    )
}
export const MarathonBlock = () => {
    return (
        <MarathonWrapper>
            <MarathonList>
                <Card>
                    пройдёте 7 дней СУПЕР-мощных техник по работе с подсознанием, которые я собирала 2 года
                </Card>
                <Card>
                    Сделаете сильнейшие практики на привлечение денег, удачи, клиентов, улучшение самооценки, ускорение перехода на новый фин.уровень
                </Card>
                <Card>
                    Определите глобальные цели для себя и найдёте энергию на их достижение
                </Card>
                <Card>
                    Познакомитесь с моими темниками 100% исполнения желаний
                </Card>
                <Card>
                    Избавитесь от привычек, создающих безденежье
                </Card>
                <Card>
                    Начнёте больше верить в себя и будете ощущать себя достойным высокого уровня
                </Card>
                <Card revert>
                    Найдёте предназначение и определите свои таланты
                </Card>
                <Card>
                    Узнаете свою денежную нишу через астрологию
                </Card>
                <Card revert>
                    Будете точно знать в каком направлении двигаться
                </Card>
                <Card revert>
                    Перейдете на новый финансовый уровень. Я не оставлю вам шансов не сделать это.
                </Card>
            </MarathonList>
            <LineHeader bgColor='white' />
            <div>
                <Link to="tariff" smooth={true} duration={700} delay={100} href=''>
                    <CustomButton>
                        попасть на марафон
                    </CustomButton>
                </Link>    
            </div>
        </MarathonWrapper>
    )
}