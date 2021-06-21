import React from 'react';
import { CustomButton } from '../CustomButton';
import { TariffBlockWrapper, CardStyled, TextStrike, TextExclusive, SpecText } from './styles';

const Card = ({ item }) => {
    return (
        <CardStyled>
            <h3>{item.title}</h3>
            <h4>{item.strikePrice}</h4>
            <h2>{item.coast}</h2>
            {item.listDescriptionExclusive.map((el) => (
                <TextExclusive>{el}</TextExclusive>
            ))}
            {item.listDescriptionOpen.map((el) => (
                <p>{el}</p>
            ))}
            {item.listDescriptionClose.map((el) => (
                <TextStrike>{el}</TextStrike>
            ))}
            <div>
                <a href={item.link} rel="noreferrer" target="_blank">
                    <CustomButton>оплатить</CustomButton>
                </a>
                <SpecText>* - возможна рассрочка на 3 мес.</SpecText>
            </div>
        </CardStyled>
    );
};

export const TariffBlock = () => {
    const data = [
        {
            id: '1112',
            title: 'Magic mini:',
            coast: '15 555 ₽',
            strikePrice: '25 555 ₽',
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
            // link: 'https://payform.ru/8t8g2F/', // 12.04 old 12 222 
            // link: 'https://payform.ru/8faoIf/', //12 222
            // link: 'https://payform.ru/u1aqID/', //13 333
            // link: 'https://payform.ru/7haqJC/', //14 444
            link: 'https://payform.ru/60askK/', //15 555 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/omarIi/', //16 666
        },
        {
            id: '1113',
            title: 'Magic',
            coast: '19 999 ₽',
            strikePrice: '34 444 ₽',
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
            // link: 'https://payform.ru/8w8g2I/', // 12.04 old 16 666
            // link: 'https://payform.ru/88aoI8/', // 16 666
            // link: 'https://payform.ru/toaqIt/', // 17 777
            // link: 'https://payform.ru/7haqJK/', // 18 888
            link: 'https://payform.ru/6vaslf/', // 19 999 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/orarIn/', // 20 000
        },
        {
            id: '1114',
            title: 'Magic VIP (ОБРАТНАЯ СВЯЗЬ ПО ДОМАШНИМ ЗАДАНИЯМ ОТ ЯНЫ)',
            coast: '155 555 ₽',
            strikePrice: '555 555 ₽',
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
            /// link: 'https://payform.ru/938g2M/', // 12.04 old 111 111
            // link: 'https://payform.ru/8haoIh/', // 122 222
            // link: 'https://payform.ru/7haqJ8/', // 133 333
            // link: 'https://payform.ru/7haqJM/', // 144 444
            link: 'https://payform.ru/80aslO/', // 155 555 ! изменилась ссылка на чат телеги
            //link: 'https://payform.ru/p9arIC/', // 166 666
        },
    ];

    const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {
        // let link = `https://demidova.payform.ru/?order_id=${order_id}&customer_phone=${customer_phone}&customer_email=${customer_email}&products[0][price]=${products[0].price.split(' ').join('')}&products[0][quantity]=1&products[0][name]=Обучающие материалы: ${products[0].name}&customer_extra=Полная оплата курса&paid_content=${paid_content}&urlSuccess=https://astrologdemidova.ru/`;
        let link = `
        https://demidova.payform.ru/?
        &products[0][price]=${products[0].price.split(' ').join('')}
        &products[0][quantity]=1
        &products[0][name]=Обучающие материалы: ${products[0].name}
        &customer_extra=Полная оплата курса
        &paid_content=${paid_content}
        &urlSuccess=https://astrologdemidova.ru/
        `;
        return link;
    }

    return (
        <TariffBlockWrapper>
            {/* <a href={`${getPaylink('111', '', '', [{price: '111', name: 'Astrolog Name Test'}], 'secret text super puper')}`} target='_blank'>TEST LINK</a> */}
            {data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </TariffBlockWrapper>
    );
};
