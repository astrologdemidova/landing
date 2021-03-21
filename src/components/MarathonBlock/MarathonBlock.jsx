import React from "react"
import { MarathonWrapper, MarathonList, CardStyled } from './styles.js'
import { CustomButton } from "../CustomButton"
import { LineHeader } from "../LineHeader"

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
                    ЖИВОЙ ВЕБИНАР ЛИЧНО С АЛЕКСАНДРОЙ Б.
                </Card>
                <Card>
                    ПРАКТИКИ ДЛЯ ПРИВЛЕЧЕНИЯ ДЕНЕГ, ОСНОВАННЫЕ НА АМЕРИКАНСКОМ ОБУЧЕНИИ
                </Card>
                <Card>
                    7 ПРОРАБОТОК ДЕНЕЖНЫХ БЛОКОВ
                </Card>
                <Card>
                    7 НОВЫХ ДЕНЕЖНЫХ МЕДИТАЦИЙ
                </Card>
                <Card>
                    ДОСТУП К ЧАТУ ЕДИНОМЫШЛЕННИКОВ
                </Card>
                <Card>
                    ФИРМЕННАЯ МЕТОДИКА КАРТЫ ЖЕЛАНИЙ ОТ АЛЕКСАНДРЫ Б.
                </Card>
                <Card revert>
                    НОВАЯ АВТОРСКАЯ МЕДИТАЦИЯ РОСКОШИ ОТ АЛЕКСАНДРЫ Б.
                </Card>
                <Card>
                    РОЗЫГРЫШ С КЛАССНЫМИ ПРИЗАМИ
                </Card>
                <Card revert>
                    СПЕЦИАЛЬНЫЙ УРОК ПО ЭНЕРГЕТИЧЕСКИМ ПРАКТИКАМ + ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ ПО ТЕМЕ "ЭНЕРГИИ ЛЮДЕЙ"
                </Card>
                <Card revert>
                    КАЧЕСТВЕННЫЙ НЕТВОРКИНГ И НОВОЕ ОКРУЖЕНИЕ
                </Card>
            </MarathonList>
            <LineHeader bgColor='white' />
            <div>
                <CustomButton>
                    попасть на марафон
                </CustomButton>
            </div>
        </MarathonWrapper>
    )
}