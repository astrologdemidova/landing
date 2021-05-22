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
                <a href={item.link} rel="noreferrer" target="_blank">
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
    // 11111 https://payform.ru/888g2k/
    // 15555 https://payform.ru/8a8g2m/
    // 99999 https://payform.ru/8e8g2q/
    
    // 12 222 https://payform.ru/8t8g2F/
    // 16 666 https://payform.ru/8w8g2I/
    // 111 111 https://payform.ru/938g2M/
    // const data = [
    //     {
    //         id: '1112',
    //         title: 'Magic mini:',
    //         coast: 'от 11 111 ₽',
    //         strikePrice: '15 555 ₽',
    //         listDescriptionOpen: [
    //             '▪️ медитация изобилия',
    //             '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
    //             '▪️ проработка фин.блоков на глубинных уровнях подсознания',
    //             '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
    //             '▪️ Определение предназначения и талантов',
    //             '▪️ доступ к чату единомышленников',
    //             '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
    //         ],
    //         listDescriptionClose: [
    //             '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
    //             '▪️ Обратная связь от куратора',
    //             '▪️ Определение вашей финансовой ниши с помощью астрологии',
    //             '▪️ Участие в эфире «правила изобилия»',
    //             '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
    //             '▪️ + 5 ритуалов на деньги, удачу, клиентов',
    //             '▪️ Определение предназначения с моей помощью + таро-консультация',
    //             '▪️ Ужин со мной в Москве',
    //             '▪️ Обратная связь лично от меня',
    //         ],
    //         listDescriptionExclusive: [],
    //         link: 'https://payform.ru/888g2k/'
    //     },
    //     {
    //         id: '1113',
    //         title: 'Magic',
    //         coast: 'от 15 555 ₽',
    //         strikePrice: '19 999 ₽',
    //         listDescriptionOpen: [
    //             '▪️ медитация изобилия',
    //             '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
    //             '▪️ проработка фин.блоков на глубинных уровнях подсознания',
    //             '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
    //             '▪️ Определение предназначения и талантов',
    //             '▪️ доступ к чату единомышленников',
    //             '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
    //             '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
    //             '▪️ Обратная связь от куратора',
    //             '▪️ Определение вашей финансовой ниши с помощью астрологии',
    //             '▪️ Участие в эфире «правила изобилия»',
    //             '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
    //         ],
    //         listDescriptionClose: [
    //             '▪️ + 5 ритуалов на деньги, удачу, клиентов',
    //             '▪️ Определение предназначения с моей помощью + таро-консультация',
    //             '▪️ Ужин со мной в Москве',
    //             '▪️ Обратная связь лично от меня',
    //         ],
    //         listDescriptionExclusive: [],
    //         link: 'https://payform.ru/8a8g2m/'
    //     },
    //     {
    //         id: '1114',
    //         title: 'Magic VIP (ОБРАТНАЯ СВЯЗЬ ПО ДОМАШНИМ ЗАДАНИЯМ ОТ ЯНЫ)',
    //         coast: 'от 99 999 ₽',
    //         strikePrice: '155 555 ₽',
    //         listDescriptionOpen: [
    //             '▪️ медитация изобилия',
    //             '▪️ 7 дней практик, устраняющих препятствия на пути к деньгам',
    //             '▪️ проработка фин.блоков на глубинных уровнях подсознания',
    //             '▪️ 2 мощнейших ритуала на привлечение денег и удачи',
    //             '▪️ Определение предназначения и талантов',
    //             '▪️ доступ к чату единомышленников',
    //             '▪️ Участие в розыгрыше моей личной консультации стоимостью 120тыс.р',
    //             '▪️ + 2 ритуала на ускорение трансформаций и уверенность в себе',
    //             '▪️ Обратная связь от куратора',
    //             '▪️ Определение вашей финансовой ниши с помощью астрологии',
    //             '▪️ Участие в эфире «правила изобилия»',
    //             '▪️ Созвон в зуме с разборами ваших ситуаций мной лично',
    //         ],
    //         listDescriptionClose: [],
    //         listDescriptionExclusive: [
    //             '▪️ + 5 ритуалов на деньги, удачу, клиентов',
    //             '▪️ Определение предназначения с моей помощью + таро-консультация',
    //             '▪️ Ужин со мной в Москве',
    //             '▪️ Обратная связь лично от меня',
    //         ],
    //         link: 'https://payform.ru/8e8g2q/'
    //     }
    // ]
    const data2 = [
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
            link: 'https://payform.ru/8t8g2F/'
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
            link: 'https://payform.ru/8w8g2I/'
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
            link: 'https://payform.ru/938g2M/'
        }
    ]
    return (
        <TariffBlockWrapper>
            {data2.map((item) => <Card key={item.id} item={item} />)}
        </TariffBlockWrapper>
    )
}
