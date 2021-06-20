import React from 'react';
import { CustomButton } from '../CustomButton';
import { CustomMarker } from '../CustomMarker';
import { CardSeparate, CardStyled, CardWrapper } from './styles';

const Card = ({ children, title }) => {
    return (
        <CardStyled>
            <CustomMarker type="blue" /> <h4>{title}</h4>
            <p>{children}</p>
        </CardStyled>
    );
};

export const DescriptionCardBlock = () => {
    return (
        <CardWrapper>
            <Card title="7 ДЕНЕЖНЫХ МЕДИТАЦИЙ">
                ПО ИЗМЕНЕНИЮ МЫШЛЕНИЯ, КОТОРЫЕ ПОЗВОЛЯТ ПРОБИТЬ ФИНАНСОВЫЙ ПОТОЛОК. НОВЫЙ 3D ЗВУК
                ПОМОЖЕТ ПОЛНОСТЬЮ ПОГРУЗИТЬСЯ В ПРАКТИКУ И ПРОРАБОТАТЬ САМЫЕ ГЛУБОКИЕ МОМЕНТЫ
            </Card>
            <Card title="СУПЕР РОЗЫГРЫШ">
                <strong>IPHONE 12</strong> ДЛЯ ТОГО, КТО СДЕЛАЕТ САМЫЙ КРУТОЙ ДЕНЕЖНЫЙ РЕЗУЛЬТАТ.
                <br />
                <strong>НЕЙРООБРУЧ</strong> ДЛЯ МЕДИТАЦИИ MUSE 2 ДЛЯ ТОГО, КТО СДЕЛАЕТ КРЕАТИВНОЕ
                ИТОГОВОЕ ЗАДАНИЕ.
                <br />
                <strong>ДЕНЕЖНЫЕ ПРИЗЫ</strong> ДЛЯ САМЫХ ОТВЕТСТВЕННЫХ
            </Card>
            <Card title="7 ДЕНЕЖНЫХ БЛОКОВ">
                КОТОРЫЕ МЫ ПРОРАБОТАЕМ ВМЕСТЕ. А ТАКЖЕ РАССМОТРИМ МЕШАЮЩИЕ УБЕЖДЕНИЯ, СТРАХИ И
                НАСТРОИМ ПОДСОЗНАНИЕ НА ПОИСК ИСТОЧНИКОВ, КОТОРЫЕ ПОЗВОЛЯТ УВЕЛИЧИТЬ СВОЙ ДОХОД
            </Card>
            <CardSeparate />
            <Card title="РЕАЛЬНЫЙ РЕЗУЛЬТАТ">
                В МАРАФОНЕ ТЕОРИЯ И ПРАКТИКА МАКСИМАЛЬНО СБАЛАНСИРОВАНЫ И ПРОДУМАНЫ, ПОЭТОМУ
                ВЫПОЛНЯЯ ДОМАШНИЕ ЗАДАНИЯ, ВЫ ТОЧНО ПОЛУЧИТЕ РЕЗУЛЬТАТ
            </Card>
            <Card title={`СПЕЦИАЛЬНЫЙ УРОК\nОТ АЛЕКСАНДРЫ Б`}>
                СПЕЦИАЛЬНЫЙ УРОК ПО ЭНЕРГЕТИЧЕСКИМ ПРАКТИКАМ + ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ ПО ТЕМЕ
                "ЭНЕРГИИ ЛЮДЕЙ"
            </Card>
            <Card title={`НОВАЯ МЕДИТАЦИЯ\nОТ АЛЕКСАНДРЫ Б.`}>
                ДОПОЛНИТЕЛЬНАЯ АВТОРСКАЯ МЕДИТАЦИЯ РОСКОШИ, КОТОРАЯ ПОМОЖЕТ ВАМ ПОЧУВСТВОВАТЬ, ЧТО
                ВЫ ДОСТОЙНЫ ВСЕХ БЛАГ ЭТОГО МИРА
            </Card>
            <CardSeparate>
                <CustomButton>Присоединиться</CustomButton>
            </CardSeparate>
        </CardWrapper>
    );
};
