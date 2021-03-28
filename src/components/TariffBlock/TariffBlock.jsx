import React from "react"
import { CustomButton } from "../CustomButton"
import {
    TariffBlockWrapper,
    CardStyled,
    TextStrike,
    TextExclusive,
    SpecText,
} from './styles'

const Card = ({ item }) => {
    return (
        <CardStyled>
            <h3>{item.title}</h3>
            <h2>{item.coast}</h2>
            <h4>{item.strikePrice}</h4>
            {item.listDescriptionExclusive.map(el => <TextExclusive>{el}</TextExclusive>)}
            {item.listDescriptionOpen.map(el => <p>{el}</p>)}
            {item.listDescriptionClose.map(el => <TextStrike>{el}</TextStrike>)}
            <div>
                <a href={item.link} target="_blank">
                    <CustomButton>
                        оплатить
                    </CustomButton>
                </a>
                <SpecText>
                    * - возможна рассрочка на 3 мес.
                </SpecText>
            </div>
        </CardStyled>
    )
}

export const TariffBlock = () => {
    const data = [
        {
            id: '1112',
            title: 'Magic mini:',
            coast: 'от 12 222 ₽',
            strikePrice: '15 555 ₽',
            listDescriptionOpen: [
                '▪️ медитация изобилия',
                '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
                '▪️ проработка фин.блоков на глубинных уровнях подсознания',
                '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
                '▪️ Определение предназначения и талантов',
                '▪️ доступ к чату единомышленников',
                '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
            ],
            listDescriptionClose: [
                '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
                '▪️ Обратная связь от куратора',
                '▪️ Определение вашей финансовой ниши с помощью астрологии',
                '▪️ Участие в эфире «правила изобилия»',
                '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
                '▪️ + 5 ритуалов на деньги, удачу, клиентов',
                '▪️ Определение предназначения с моей помощью + таро-консультация',
                '▪️ Ужин со мной в Москве',
                '▪️ Обратная связь лично от меня',
            ],
            listDescriptionExclusive: [],
            link: 'https://payform.ru/e67QQY/'
        },
        {
            id: '1113',
            title: 'Magic',
            coast: 'от 16 666 ₽',
            strikePrice: '19 999 ₽',
            listDescriptionOpen: [
                '▪️ медитация изобилия',
                '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
                '▪️ проработка фин.блоков на глубинных уровнях подсознания',
                '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
                '▪️ Определение предназначения и талантов',
                '▪️ доступ к чату единомышленников',
                '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
                '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
                '▪️ Обратная связь от куратора',
                '▪️ Определение вашей финансовой ниши с помощью астрологии',
                '▪️ Участие в эфире «правила изобилия»',
                '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
            ],
            listDescriptionClose: [
                '▪️ + 5 ритуалов на деньги, удачу, клиентов',
                '▪️ Определение предназначения с моей помощью + таро-консультация',
                '▪️ Ужин со мной в Москве',
                '▪️ Обратная связь лично от меня',
            ],
            listDescriptionExclusive: [],
            link: 'https://payform.ru/en7QRf/'
        },
        {
            id: '1114',
            title: 'Magic VIP (ОБРАТНАЯ СВЯЗЬ ПО ДОМАШНИМ ЗАДАНИЯМ ОТ ЯНЫ)',
            coast: 'от 111 111 ₽',
            strikePrice: '155 555 ₽',
            listDescriptionOpen: [
                '▪️ медитация изобилия',
                '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
                '▪️ проработка фин.блоков на глубинных уровнях подсознания',
                '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
                '▪️ Определение предназначения и талантов',
                '▪️ доступ к чату единомышленников',
                '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
                '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
                '▪️ Обратная связь от куратора',
                '▪️ Определение вашей финансовой ниши с помощью астрологии',
                '▪️ Участие в эфире «правила изобилия»',
                '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
            ],
            listDescriptionClose: [],
            listDescriptionExclusive: [
                '▪️ + 5 ритуалов на деньги, удачу, клиентов',
                '▪️ Определение предназначения с моей помощью + таро-консультация',
                '▪️ Ужин со мной в Москве',
                '▪️ Обратная связь лично от меня',
            ],
            link: 'https://payform.ru/fq7QRP/'
        }
    ]
    return (
        <TariffBlockWrapper>
            {data.map((item) => <Card key={item.id} item={item} />)}
        </TariffBlockWrapper>
    )
}