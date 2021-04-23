import { Link } from 'gatsby';
import * as React from 'react';
import {
    CatalogCardCoast,
    CatalogCardCoastStrike,
    CatalogCardDescription,
    CatalogHeaderFaq,
    CatalogQuestionFaq,
    CatalogCardLinkPay,
    CatalogCardShow,
    CatalogCardTitle,
    CatalogCardSubTitle,
    CatalogCardWrapper,
    ImgCard,
} from './styles';

export const CatalogCard = ({imgSrc, nameItem, nameItemSub, coast, coastStrike, description, faq, linkPay}) => {
    const [show, setShow] = React.useState(false);

    const clickHandler = () => setShow(!show);

    const mapToFaq = (faqArr) => {
        return faqArr.map((item, ind) => {
            if (ind === 0) return <li key={item}><CatalogHeaderFaq>{item}</CatalogHeaderFaq></li>
            if (item.includes('•')) return <li key={item}><CatalogQuestionFaq>{item}</CatalogQuestionFaq></li>
            return <li key={item}>{item}</li>
        })
    }

    return (
        <CatalogCardWrapper>

            <CatalogCardTitle>{nameItem}</CatalogCardTitle>
            
            <CatalogCardSubTitle>{nameItemSub}</CatalogCardSubTitle>
            
            <CatalogCardCoast>{coast} ₽</CatalogCardCoast>
            
            {coastStrike && <CatalogCardCoastStrike>{coastStrike} ₽</CatalogCardCoastStrike>}
            
            {!show && <CatalogCardDescription>{description.map((item, ind) => ind % 2 === 0 ? <li key={item}>{item}</li> : null)}</CatalogCardDescription>}
            
            {show && <CatalogCardDescription>{description.map((item) => <li key={item}>{item}</li>)}</CatalogCardDescription>}

            {faq && show && <CatalogCardDescription>{mapToFaq(faq)}</CatalogCardDescription>}

            <CatalogCardShow onClick={clickHandler}>{show ? 'Скрыть' : 'Подробнее'}</CatalogCardShow>

            {imgSrc && <ImgCard src={imgSrc} alt='astrolog demidova price'/>}

            <div style={{textAlign: 'center', paddingBottom: '40px'}}>
                <Link to='/review'>
                    <CatalogCardLinkPay as='button'>Отзывы</CatalogCardLinkPay>
                </Link>
            </div>
            
            <div style={{textAlign: 'center'}}>
                <CatalogCardLinkPay href={linkPay} rel='noopenner' target='_blank'>Заказать</CatalogCardLinkPay>
            </div>
        </CatalogCardWrapper>
    )
}
