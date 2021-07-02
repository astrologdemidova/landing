import axios from "axios";
import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { TextWrapper, FormWrapper, FormRow, SpaceBlock, FormInput } from './styles';

const dataText = {
    '001': [
        'Ураааа! Поздравляю, вы выиграли ГЛАВНЫЙ ПРИЗ:',
        'консультацию за 120 000 рублей от одного из самых высокооплачиваемых астрологов России 😱👏🔥',
        'Вы! Выиграли ! ГЛАВНЫЙ ПРИЗ! Можете себе представить это? Не кто-то , а именно вы!',
        'Шооок!?',
        '',
        'P.S. Я свяжусь с вами и мы обсудим детали.',
        'Либо, если не терпится (и я вас в этом понимаю) - можете написать мне в Инстаграм : ссылка',
        'С любовью, Яна🤍'],
    '002': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 2000 рублей:',
        'инструкция «Камни жизни»😱👏🔥',
        'Теперь вы САМИ, по своему гороскопу, сможете определить какие камни вам подходят и помогают улучшить главные сферы жизни.',
        '',
        'P.S. Надеюсь вы верно указали почту? Если да, то все письма для вас уже там.',
        'С любовью, Яна🤍'],
    '003': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 19000 рублей:',
        'чокер «Королева Кубков» из моей коллекции волшебных украшений 😱👏🔥',
        'Вы! Выиграли ! Волшебное украшение !',
        'Вы можете себе представить это?',
        'Не кто-то , а именно вы!',
        'Шооок!?',
        'Чокер сделан из натурального жемчуга и несёт в себе не только его свойства, но и силу аркана таро «Королева кубков».',
        'Сила украшения направлена на увеличение вашей интуиции, раскрытия магических и психологических способностей, эмпатии. Он усилит в вас женственность, внутреннюю гармонию, удовлетворение собой и жизнью. Подарит мир в семье и материальное благополучие.',
        'Этих украшений ещё нет в продаже, а значит оно будет только у вас!😍',
        'Уверенна, что вы оцените мой волшебный подарок ✨',
        '',
        'P.S. Я свяжусь с вами и мы обсудим детали. Либо, если не терпится (и я вас в этом понимаю) - можете написать мне в Инстаграм : ссылка',
        'С любовью, Яна🤍'],
    '004': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 2000 рублей:',
        'инструкция «Знаки Вселенной»😱👏🔥',
        'Теперь вы САМИ сможете определять что за знаки встречаются вам на пути и что они хотят сказать.',
        'Есть такой вид астрологии, как «Нимита» - астрология предзнаменований.',
        'Также есть ведическая нумерология.',
        'Эта инструкция содержит в себе обе техники.',
        'С этого дня у вас легко и просто будет получаться любое дело, тк вы вовремя сможете заметить и расшифровать знак ✨',
        '',
        'P.S.Надеюсь вы верно указали почту? Если да, то все письма для вас уже там',
        'С любовью, Яна🤍'],
    '005': [
        'Ураааа! Поздравляю, вы выиграли SUPER- приз',
        'IPHONE 12 😱👏🔥',
        'Вы! Выиграли ! SUPER- приз!',
        'Вы можете себе представить это?',
        'Не кто-то , а именно вы!',
        'Шооок!?',
        '',
        'P.S. Я свяжусь с вами и мы обсудим детали. Либо, если не терпится (и я вас в этом понимаю) - можете написать мне в Инстаграм : ссылка',
        'С любовью, Яна🤍'],
    '006': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 2000 рублей:',
        'инструкция «Денежная сфера»😱👏🔥',
        'Теперь вы САМИ сможете рассчитать сферу, которая может принести вам высокий уровень дохода💸',
        '',
        'P.S.Надеюсь вы верно указали почту? Если да, то все письма для вас уже там',
        'С любовью, Яна🤍'],
    '007': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 6000 рублей :',
        'Бутылочку с кристаллом настоящего розового кварца😱👏🔥',
        'Вы! Выиграли ! Бутылочку для волшебного элексира !',
        'Вы можете себе представить это?',
        'Не кто-то , а именно вы!',
        'Шооок!?',
        'Сила розового кварца направлена на усиление вашей красоты и молодости. С каждым глотком воды в вас будет просыпаться все больше энергии Венеры. Это улучшит ваши отношения с людьми и в паре или поможет встретить любимого и построить с ним гармоничный союз, если одиноки. Творческий поток, хороший вкус, увеличение магнетизма и сексуальности.',
        'Людей так и будет тянуть к вам!',
        'У меня есть такая бутылочка и я с ней просто не расстаюсь.',
        'Уверенна, что вы оцените мой волшебный подарок ✨',
        'P.S. Я свяжусь с вами и мы обсудим детали. Либо, если не терпится (и я вас в этом понимаю) - можете написать мне в Инстаграм : ссылка',
        'С любовью, Яна🤍'],
    '008': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 2000 рублей:',
        'инструкция «Идеальный партнёр»😱👏🔥',
        'Теперь вы САМИ сможете рассчитать какой партнёр вам идеально подходит , или, если вы уже состоите в отношениях - поймёте , что для вам является ключевым в союзе.',
        'Также, вы сможете определить в чем нуждается ваш партнёр, что для него является выражением любви.',
        'Это поможет вам лучше понимать себя и его, а значит и отношения будут более гармоничными✨',
        'P.S.Надеюсь вы верно указали почту? Если да, то все письма для вас уже там',
        'С любовью, Яна🤍'],
    '009': [
        'Ураааа! Поздравляю, вы выиграли SUPER - ПРИЗ :',
        'консультацию за 60 000 рублей от одного из самых высокооплачиваемых астрологов России 😱👏🔥',
        'Вы! Выиграли ! SUPER- приз!',
        'Вы можете себе представить это?',
        'Не кто-то , а именно вы!',
        'Шооок!?',
        '',
        'P.S. Я свяжусь с вами и мы обсудим детали. Либо, если не терпится (и я вас в этом понимаю) - можете написать мне в Инстаграм : ссылка',
        'С любовью, Яна🤍'],
    '010': [
        'Ураааа! Поздравляю, вы выиграли приз, стоимостью 2000 рублей:',
        'Годовой запас чеков Изобилия, которые я отправлю вам прямо в руки. Это 100% рабочий метод исполнения желаний.😱👏🔥',
        '',
        'P.S.Надеюсь вы верно указали почту? Если да, то все письма для вас уже там',
        'С любовью, Яна🤍'],
}

export const FortunaTextWinner = ({ typePrize }) => {
    let url_string = {};
    let url = {};
    if (typeof window !== `undefined`) {
        url_string = window.location.href;
        url = new URL(url_string);
    }
    
    let cust_email = url?.searchParams?.get("cust_email") || '';
    let cust_phone = url?.searchParams?.get("cust_phone") || '';
    // let che = url?.searchParams?.get("che") || '';

    const superPrize = [
        '001',
        '003',
        '005',
        '007',
        '009',
        '010',
    ]
    const [titleForm, setTitleForm] = useState('');
    const thanksResponse = 'Спасибо, я скоро свяжусь с вами!';
    const errorResponse = 'Произошла ошибка. Повторите отправку.';

    const [isDisabled, setIsDisabled] = useState(false);

    const [emailInput, setEmailInput] = useState(cust_email);
    const [phoneInput, setPhoneInput] = useState(cust_phone);
    const [nameInput, setNameInput] = useState('');
    const [instInput, setInstInput] = useState('');
    const [adressInput, setAdressInput] = useState('');

    const handlerSendMail = (e) => {
        e.preventDefault();
        if (!emailInput || !phoneInput) return;


        setIsDisabled(true);
        // .post('http://localhost:3000/api/email/add-user-contact', null, {
        axios
            .post('https://astrolog-fortuna-server.herokuapp.com/api/email/add-user-contact', null, {
                params: {
                    name: nameInput,
                    email: emailInput,
                    phone: phoneInput,
                    inst: instInput,
                    adress: adressInput,
                    id: typePrize?.id,
                }
            })
            .then(function (response) {
                setTitleForm(thanksResponse);
                setEmailInput('');
                setNameInput('');
                setInstInput('');
                setPhoneInput('');
                setAdressInput('');
            })
            .catch(function (error) {
                setTitleForm(errorResponse);
                setIsDisabled(false);
            });
    };

    const getForm = () => {


        return (
            <FormWrapper>
                <form onSubmit={handlerSendMail} className="form" id="form">
                    <h2 className="form_title">{titleForm}</h2>
                    <div className="form_fields">
                        {superPrize.includes(typePrize?.id) && <FormRow>
                            <label name='phone' htmlFor='phoneClient'>Ваше имя*:</label>
                            <FormInput
                                onChange={(e) => setNameInput(e.target.value)}
                                value={nameInput}
                                type="text"
                                className="form_fields_input"
                                required
                            />
                        </FormRow>}
                        <FormRow>
                            <label name='phone' htmlFor='phoneClient'>Ваш телефон*:</label>
                            <FormInput
                                onChange={(e) => setPhoneInput(e.target.value)}
                                value={phoneInput}
                                type="phone"
                                className="form_fields_input"
                                required
                            />
                        </FormRow>
                        <FormRow>
                            <label name='email' htmlFor='emailClient'>Ваш email*:</label>
                            <FormInput
                                onChange={(e) => setEmailInput(e.target.value)}
                                value={emailInput}
                                type="email"
                                className="form_fields_input"
                                required
                            />
                        </FormRow>
                        {superPrize.includes(typePrize?.id) && <FormRow>
                            <label name='inst' htmlFor='emailClient'>Ваш instagram*:</label>
                            <FormInput
                                onChange={(e) => setInstInput(e.target.value)}
                                value={instInput}
                                type="text"
                                className="form_fields_input"
                                required
                            />
                        </FormRow>}
                        {superPrize.includes(typePrize?.id) && <FormRow>
                            <label name='inst' htmlFor='emailClient'>Ваш адрес для доставки:</label>
                            <FormInput
                                onChange={(e) => setAdressInput(e.target.value)}
                                value={adressInput}
                                type="text"
                                className="form_fields_input"
                            />
                        </FormRow>}
                        <FormRow>
                            <CustomButton type="submit" disabled={isDisabled}>
                                получить
                            </CustomButton>
                        </FormRow>
                        <FormRow>
                            <div style={{ fontSize: '11px', padding: '0' }}>* - обязательные поля</div>
                        </FormRow>
                    </div>
                </form>
            </FormWrapper>
        )
    }

    return (
        <div style={{ margin: '0 10px' }}>
            {typePrize?.id && <TextWrapper>
                {dataText[typePrize.id].map((i, ind) => <p key={typePrize.id + ind} style={{ minHeight: '10px' }}>{i}</p>)}
            </TextWrapper>}
            {typePrize?.id && getForm()}
            {!typePrize?.id && <SpaceBlock />}
        </div>
    )
}
