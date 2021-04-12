import * as React from 'react';
import {
    CatalogCardCoast,
    CatalogCardDescription,
    CatalogCardLinkPay,
    CatalogCardShow,
    CatalogCardTitle,
    CatalogCardSubTitle,
    CatalogCardWrapper
} from './styles';

export const CatalogCard = ({imgSrc, nameItem, nameItemSub, coast, description, linkPay}) => {
    const [show, setShow] = React.useState(false);
    const clickHandler = () => setShow(!show);
    return (
        <CatalogCardWrapper>
            <img src={imgSrc} alt='astrolog demidova price'/>
            <CatalogCardTitle>{nameItem}</CatalogCardTitle>
            <CatalogCardSubTitle>{nameItemSub}</CatalogCardSubTitle>
            <CatalogCardCoast>{coast} ₽</CatalogCardCoast>
            {show && <CatalogCardDescription>{description.map((item) => <li key={item}>{item}</li>)}</CatalogCardDescription>}
            <CatalogCardShow onClick={clickHandler}>{show ? 'Скрыть' : 'Подробнее'}</CatalogCardShow>

            <CatalogCardLinkPay href={linkPay} rel='noopenner' target='_blank'>Заказать</CatalogCardLinkPay>
        </CatalogCardWrapper>
    )
}
