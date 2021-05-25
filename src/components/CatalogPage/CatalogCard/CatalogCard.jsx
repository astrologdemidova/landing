import { Link } from 'gatsby';
import * as React from 'react';
import { contentTypeMeditation, contentTypeRitual, contentTypeConsultation } from '../CatalogWrapper/CatalogWrapper';
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
    PopupCardpayWrapper,
} from './styles';
import { getPaylink } from './utils/utils';

export const CatalogCard = ({ id, imgSrc, nameItem, nameItemSub, coast, coast2, coastStrike, description, faq, installment, installment2, period, period2, linkPay, buttonName = 'Заказать', contentType }) => {
    const [showPopup, setShowPopup] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const clickHandler = () => setShow(!show);

    const mapToFaq = (faqArr) => {
        return faqArr.map((item, ind) => {
            if (ind === 0) return <li key={item}><CatalogHeaderFaq>{item}</CatalogHeaderFaq></li>
            if (item.includes('•')) return <li key={item}><CatalogQuestionFaq>{item}</CatalogQuestionFaq></li>
            return <li key={item}>{item}</li>
        })
    };

    const mapToImgVideo = (source) => {
        if (source.includes('<iframe')) return <div style={{ textAlign: 'center', paddingBottom: '40px' }} dangerouslySetInnerHTML={{ __html: source }}></div>
        return <ImgCard src={source} alt='astrolog demidova price' />
    };

    const getReviewUrl = (entity) => {
        switch (entity) {
            case contentTypeMeditation:
                return '/reviews/meditations';
            case contentTypeRitual:
                return '/reviews/rituals';
            case contentTypeConsultation:
                return '/reviews/consultations';
            default:
                return '/shop';
        }
    };

    return (
        <CatalogCardWrapper>

            <CatalogCardTitle>{nameItem}</CatalogCardTitle>

            {nameItemSub && <CatalogCardSubTitle>{nameItemSub}</CatalogCardSubTitle>}

            {period && <p>Длительность: {period}</p>}
            <CatalogCardCoast>{coast} ₽</CatalogCardCoast>
            {installment && <p>*при оплате доступна рассрочка</p>}

            {period2 && <p>Длительность: {period2}</p>}
            {coast2 && <CatalogCardCoast>{coast2} ₽</CatalogCardCoast>}
            {installment2 && id !== '1239' && <p>*при оплате доступна рассрочка</p>}
            {id === '1239' && <p className='installment'>* при оплате доступна рассрочка до 500 000, при внесении первого платежа от 499 999</p>}

            {coastStrike && <CatalogCardCoastStrike>{coastStrike} ₽</CatalogCardCoastStrike>}

            {!show && <CatalogCardDescription>{description.map((item, ind) => ind % 2 === 0 ? <li key={item}>{item}</li> : null)}</CatalogCardDescription>}

            {show && <CatalogCardDescription>{description.map((item) => <li key={item}>{item}</li>)}</CatalogCardDescription>}

            {faq && show && <CatalogCardDescription>{mapToFaq(faq)}</CatalogCardDescription>}

            <CatalogCardShow onClick={clickHandler}>{show ? 'Скрыть' : 'Подробнее'}</CatalogCardShow>

            {imgSrc && mapToImgVideo(imgSrc)}

            <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                <Link to={getReviewUrl(contentType)}>
                    <CatalogCardLinkPay as='button' $isReview>Отзывы</CatalogCardLinkPay>
                </Link>
            </div>

            <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                <CatalogCardLinkPay as='div' onClick={() => setShowPopup(true)}>{buttonName}</CatalogCardLinkPay>
            </div>

            {showPopup &&
                <PopupCardpay {
                    ...{
                        id,
                        nameItem,
                        nameItemSub,
                        period,
                        period2,
                        coast,
                        coast2,
                        coastStrike,
                        installment,
                        installment2,
                        buttonName,
                        linkContent: linkPay,
                    }
                }
                    linkPay={linkPay}
                    setShowPopup={setShowPopup}
                />
            }
        </CatalogCardWrapper>
    )
}

const PopupCardpay = ({ id, coast, coast2, coastStrike, nameItem, buttonName, linkContent, setShowPopup, nameItemSub, period, period2, installment, installment2 }) => {
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [linkpay, setLinkpay] = React.useState('');

    const [checkBoxValue, setCheckboxValue] = React.useState('2');
    const [checkBoxSpecial, setCheckboxSpecial] = React.useState(true);

    const [coastSpecial, setCoastSpecial] = React.useState(checkBoxSpecial && id !== '1239' ? String(Number(coast.split(' ').join('')) + 777) : coast);

    const consultationVIP90days = id === '1239' ? '500000&installments_disabled=228' : coast2;

    React.useEffect(() => {
        setCoastSpecial(checkBoxSpecial ? String(Number(coast.split(' ').join('')) + 777) : coast);
    }, [checkBoxSpecial, setCheckboxSpecial, coastSpecial, setCoastSpecial, coast]);

    React.useEffect(() => {
        const getLink = () => {
            if (phone && email) setLinkpay(getPaylink(
                `${id}`,
                `${phone}`,
                `${email}`,
                [
                    {
                        price: period2 ? (checkBoxValue === '1' ? coast : consultationVIP90days) : coastSpecial,
                        name: period2 ? nameItem + ` длительность: ${checkBoxValue === '1' ? period : period2}` : nameItem,
                    },
                ],
                `${
                    phone && email && checkBoxSpecial && id !== '1239'
                    ? (id === '4567' ? linkContent + ' Бонус: https://disk.yandex.ru/d/RYNelX1eWwSPPg' : linkContent + ' Бонус: https://disk.yandex.ru/d/w_e1bBeYWZyeOw')
                    : linkContent
                }`,
            ));
        };
        getLink();
    }, [id, coast, coast2, period, period2, nameItem, linkpay, setLinkpay, phone, email, checkBoxValue, linkContent, checkBoxSpecial, coastSpecial, setCoastSpecial, consultationVIP90days]);

    return (
        <PopupCardpayWrapper onClick={() => setShowPopup(false)}>
            <CatalogCardWrapper>
                <form onClick={(e) => e.stopPropagation()}>
                    <CatalogCardTitle>{nameItem}</CatalogCardTitle>

                    {nameItemSub && <CatalogCardSubTitle>{nameItemSub}</CatalogCardSubTitle>}

                    {period &&
                        <p>
                            {period2 && <input type='checkbox' checked={checkBoxValue === '1'} onChange={() => setCheckboxValue('1')} />}
                            Длительность: {period}
                        </p>
                    }
                    <CatalogCardCoast>{checkBoxSpecial && phone && email && id !== '1239' ? coastSpecial : coast} ₽</CatalogCardCoast>
                    {installment && <p>*при оплате доступна рассрочка</p>}

                    {period2 &&
                        <p>
                            <input type='checkbox' checked={checkBoxValue === '2'} onChange={() => setCheckboxValue('2')} />
                        Длительность: {period2}
                        </p>
                    }
                    {coast2 && <CatalogCardCoast>{coast2} ₽</CatalogCardCoast>}
                    {installment2 && id !== '1239' && <p>*при оплате доступна рассрочка</p>}
                    {id === '1239' && <p className='installment'>* при оплате доступна рассрочка до 500 000, при внесении первого платежа от 499 999</p>}

                    {coastStrike && <CatalogCardCoastStrike>{coastStrike} ₽</CatalogCardCoastStrike>}
                    <div>
                        <label name='phone' htmlFor='phoneClient'>Ваш телефон*:</label>
                        <input name='phone' id='phoneClient' type='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label name='email' htmlFor='emailClient'>Ваш email*:</label>
                        <input name='email' id='emailClient' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    {phone && email && id !== '1239' &&
                        <div>
                            Специальное предложение!<br />
                            <input type='checkbox' id='special' defaultChecked={checkBoxSpecial} onChange={() => setCheckboxSpecial(!checkBoxSpecial)} style={{ width: '18px', height: '18px' }} />
                            <label htmlFor='special' style={{ display: 'inline-block', width: 'auto' }}>Легендарная медитация Изобилия со скидкой 50% (+777р)</label>
                        </div>}
                    <div style={{ textAlign: 'center' }}>
                        <CatalogCardLinkPay href={phone && email && linkpay} onClick={(e) => (!phone || !email) && e.preventDefault()} rel='noreferrer' target='_blank'>
                            {buttonName}
                        </CatalogCardLinkPay>
                    </div>
                    <div style={{fontSize: '11px', padding: '0'}}>* - обязательные поля</div>
                </form>
            </CatalogCardWrapper>
        </PopupCardpayWrapper>
    )

}
