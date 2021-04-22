import { Link } from 'gatsby';
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
            {/* <img src={imgSrc} alt='astrolog demidova price'/> */}
            <CatalogCardTitle>{nameItem}</CatalogCardTitle>
            <CatalogCardSubTitle>{nameItemSub}</CatalogCardSubTitle>
            <CatalogCardCoast>{coast} ₽</CatalogCardCoast>
            {!show && <CatalogCardDescription>{description.map((item, ind) => ind % 2 === 0 ? <li key={item}>{item}</li> : null)}</CatalogCardDescription>}
            {show && <CatalogCardDescription>{description.map((item) => <li key={item}>{item}</li>)}</CatalogCardDescription>}
            <CatalogCardShow onClick={clickHandler}>{show ? 'Скрыть' : 'Подробнее'}</CatalogCardShow>

            <div style={{textAlign: 'center', paddingBottom: '40px'}}>
                <Link to='/review'>
                    <CatalogCardLinkPay href={linkPay} rel='noopenner' target='_blank'>Отзывы</CatalogCardLinkPay>
                </Link>
            </div>
            
            <div style={{textAlign: 'center'}}>
                <CatalogCardLinkPay href={linkPay} rel='noopenner' target='_blank'>Заказать</CatalogCardLinkPay>
            </div>
        </CatalogCardWrapper>
    )
}
