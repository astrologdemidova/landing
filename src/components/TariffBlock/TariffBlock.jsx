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
    let dateCurrent = Date.now();
    let date2 = new Date("2021-06-22T21:34:00.998+0300");
    
    //const step = dateCurrent < date2 ? '1' : '2'; // change it 1-2-3
    const step = '1'; // change it 1-2-3
    const data = [
        {
            id: '1112',
            title: 'Magic mini:',
            coast: step === '1' ? '13 333 ₽' : step === '2' ? '14 444 ₽' : '15 555 ₽',
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
            link: step === '1' ? 'https://payform.ru/o8axqU/' : step === '2' ? 'https://payform.ru/gvaxTh/' : 'https://payform.ru/60askK/',
            // link: 'https://payform.ru/o8axqU/', //13 333 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat4z/', //13 333 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/gvaxTh/', //14 444 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat4H/', //14 444 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/60askK/', //15 555 ! изменилась ссылка на чат телеги
        },
        {
            id: '1113',
            title: 'Magic',
            coast: step === '1' ? '17 777 ₽' : step === '2' ? '18 888 ₽' : '19 999 ₽',
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
            link: step === '1' ? 'https://payform.ru/ojaxr5/' : step === '2' ? 'https://payform.ru/haaxTt/' : 'https://payform.ru/6vaslf/',
            // link: 'https://payform.ru/ojaxr5/', // 17 777 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat51/', // 17 777 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/haaxTt/', // 18 888 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat4T/', // 18 888 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/6vaslf/', // 19 999 ! изменилась ссылка на чат телеги
        },
        {
            id: '1114',
            title: 'Magic VIP (ОБРАТНАЯ СВЯЗЬ ПО ДОМАШНИМ ЗАДАНИЯМ ОТ ЯНЫ)',
            coast: step === '1' ? '133 333 ₽' : step === '2' ? '144 444 ₽' : '155 555 ₽',
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
            link: step === '1' ? 'https://payform.ru/otaxrf/' : step === '2' ? 'https://payform.ru/hkaxTD/' : 'https://payform.ru/80aslO/',
            // link: 'https://payform.ru/otaxrf/', // 133 333 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat5a/', // 133 333 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/hkaxTD/', // 144 444 ! изменилась ссылка на чат телеги 28.06
            // link: 'https://payform.ru/7iat5i/', // 144 444 ! изменилась ссылка на чат телеги
            // link: 'https://payform.ru/80aslO/', // 155 555 ! изменилась ссылка на чат телеги
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
