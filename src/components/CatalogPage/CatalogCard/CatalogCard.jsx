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
            {installment2 && <p>*при оплате доступна рассрочка</p>}

            {coastStrike && <CatalogCardCoastStrike>{coastStrike} ₽</CatalogCardCoastStrike>}

            {!show && <CatalogCardDescription>{description.map((item, ind) => ind % 2 === 0 ? <li key={item}>{item}</li> : null)}</CatalogCardDescription>}

            {show && <CatalogCardDescription>{description.map((item) => <li key={item}>{item}</li>)}</CatalogCardDescription>}

            {faq && show && <CatalogCardDescription>{mapToFaq(faq)}</CatalogCardDescription>}

            <CatalogCardShow onClick={clickHandler}>{show ? 'Скрыть' : 'Подробнее'}</CatalogCardShow>

            {imgSrc && mapToImgVideo(imgSrc)}

            <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
                <Link to={getReviewUrl(contentType)}>
                    <CatalogCardLinkPay as='button'>Отзывы</CatalogCardLinkPay>
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

    React.useEffect(() => {
        const getLink = () => {
            if (phone && email) setLinkpay(getPaylink(
                `${id}`,
                `${phone}`,
                `${email}`,
                [
                    {
                        price: period2 ? (checkBoxValue === '1' ? coast : coast2) : coast,
                        name: period2 ? nameItem + ` длительность: ${checkBoxValue === '1' ? period : period2}` : nameItem,
                    },
                ],
                `${linkContent}`,
            ));
            // console.log(linkpay);
        };
        getLink();
    }, [id, coast, coast2, period, period2, nameItem, linkpay, setLinkpay, phone, email, checkBoxValue, linkContent]);

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
                    <CatalogCardCoast>{coast} ₽</CatalogCardCoast>
                    {installment && <p>*при оплате доступна рассрочка</p>}

                    {period2 &&
                        <p>
                            <input type='checkbox' checked={checkBoxValue === '2'} onChange={() => setCheckboxValue('2')} />
                        Длительность: {period2}
                        </p>
                    }
                    {coast2 && <CatalogCardCoast>{coast2} ₽</CatalogCardCoast>}
                    {installment2 && <p>*при оплате доступна рассрочка</p>}

                    {coastStrike && <CatalogCardCoastStrike>{coastStrike} ₽</CatalogCardCoastStrike>}
                    <div>
                        <label name='phone' htmlFor='phoneClient'>Ваш телефон:</label>
                        <input name='phone' id='phoneClient' type='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    <div>
                        <label name='email' htmlFor='emailClient'>Ваш email:</label>
                        <input name='email' id='emailClient' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <CatalogCardLinkPay href={phone && email && linkpay} onClick={(e) => (!phone || !email) && e.preventDefault()} rel='noreferrer' target='_blank'>
                            {buttonName}
                        </CatalogCardLinkPay>
                    </div>
                </form>
            </CatalogCardWrapper>
        </PopupCardpayWrapper>
    )

}