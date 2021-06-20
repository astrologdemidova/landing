import React, { useState } from 'react';
import { CustomMarker } from '../CustomMarker';
import { AccordionWrapper, CardWrapper, CardHeader, CardContent } from './styles';

export const AccordionBlock = () => {
    const [activeTabs, setActiveTabs] = useState([]);
    const [data, setData] = useState([
        {
            title: 'День 1. Первый мощный рывок на новый финансовый уровень.',
            description: [
                'знакомлю вас со своей медиацией Изобилия',
                'чистка финансового канала',
                'освобождаем пространство для новых возможностей',
            ],
            isOpen: false,
        },
        {
            title: 'День 2. Ускоряем трансформации с помощью ритуала и освобождаем пространство для нового.',
            description: [
                'ставим цели на год',
                'пишем план по достижению целей',
                'привыкаем к большим деньгам',
            ],
            isOpen: false,
        },
        {
            title: 'День 3. Прокачка мышления миллионера + денежный ритуал.',
            description: [
                'упражнение на миллион',
                'мощнейший финансовый ритуал',
                'знакомимся с главным секретом Изобилия',
            ],
            isOpen: false,
        },
        {
            title: 'День 4. Второй мощный рывок на новый финансовый уровень. Избавляемся от негативных установок.',
            description: [
                'Избавляемся от негативных установок',
                'Упражнение не для слабонервных: переходим на новый уровень дохода в реальности',
                'Знакомство с очень благополучной и успешной версией вас самих',
            ],
            isOpen: false,
        },
        {
            title: 'День 5. Выстраиваем цели и планы на будущее.',
            description: [
                'Повышаем уровень комфорта',
                'Знакомимся со своей идеальной жизнью и намечаем путь к этой цели',
                'перепрошиваем негативные установки в сознании',
            ],
            isOpen: false,
        },
        {
            title: 'День 6. Знакомство с мечтой. Делаем шаг к мечте.',
            description: [
                'эфир «30 законов благополучия»',
                'моя техника карты желаний',
                'знакомимся с мечтой и делаем к ней шаг',
            ],
            isOpen: false,
        },
        {
            title: 'День 7. Выход на новый уровень комфорта.',
            description: [
                'знакомство с самим собой, своими талантами и потенциалом',
                'прорабатываем своё окружение',
                'розыгрыш моей консультации за 120к',
            ],
            isOpen: false,
        },
    ]);

    const clickHandler = (idItem) => {
        activeTabs.includes(idItem)
            ? setActiveTabs((prevState) => {
                  const newState = [...prevState];
                  const index = newState.indexOf(idItem);
                  newState.splice(index, 1);
                  return newState;
              })
            : setActiveTabs((prevState) => [...prevState, idItem]);
    };
    return (
        <AccordionWrapper>
            {data.map((item, index) => (
                <CardWrapper key={item.title}>
                    <CardHeader
                        onClick={() => clickHandler(index)}
                        isOpen={activeTabs.includes(index)}>
                        {item.title}
                        <span>
                            <div></div>
                            <div></div>
                        </span>
                    </CardHeader>
                    <CardContent isOpen={activeTabs.includes(index)}>
                        {item.description.map((str, ind) => (
                            <p key={ind}>
                                {/* <span></span> */}
                                <CustomMarker type="pink" />
                                {str}
                            </p>
                        ))}
                    </CardContent>
                </CardWrapper>
            ))}
        </AccordionWrapper>
    );
};
