import * as React from "react"
import "../common-style/style.css"
import Moment from 'react-moment';
import moment from 'moment';
import { CustomFooter } from "../components/CustomFooter"
import { HeadBlock } from "../components/HeadBlock"
import { LineHeader } from "../components/LineHeader"
import { CustomMenu } from "../components/CustomMenu"
import { HelloBlock } from "../components/HelloBlock"
// import { DescriptionCardBlock } from "../components/DescriptionCardBlock"
import { ReasonsBlock } from "../components/ReasonsBlock"
import { MarathonBlock } from "../components/MarathonBlock"
import { AccordionBlock } from "../components/AccordionBlock"
import { ResultBlock } from "../components/ResultBlock"
import { CustomButton } from "../components/CustomButton"
import { ReviewsBlock } from "../components/ReviewsBlock"
import { GiftsBlock } from "../components/GiftsBlock"
import { TariffBlock } from "../components/TariffBlock"
import { SendForm } from "../components/SendForm"
import { Element } from 'react-scroll'
import { Helmet } from "react-helmet";
// markup
const IndexPage = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Марафон Изобилие</title>
      </Helmet>
      <CustomMenu />

      <HeadBlock />

      <Element name='about'></Element>
      <LineHeader bgColor='white'>
        Откровенно обо мне :
      </LineHeader>


      <HelloBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='blue'>
        Главные секреты финансового изобилия
      </LineHeader>

      <Element name='reason'></Element>
      <LineHeader bgColor='white'>
        ВАМ НУЖЕН МАРАФОН, ЕСЛИ ВЫ
      </LineHeader>

      <ReasonsBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='white'>
        НА МАРАФОНЕ вы:
      </LineHeader>

      <MarathonBlock />

      <LineHeader bgColor='white' />
      <Element name='program'></Element>
      <LineHeader bgColor='white'>
        ПРОГРАММА МАРАФОНА
      </LineHeader>

      <AccordionBlock />

      <LineHeader bgColor='white' />
      <Element name='result'></Element>
      <LineHeader bgColor='blue'>
        ПЕРВЫЙ МАРАФОН КОТОРЫЙ ВЫ ПРОЙДЁТЕ ДО КОНЦА И ПОЛУЧИТЕ 100% РЕЗУЛЬТАТ
      </LineHeader>

      <LineHeader bgColor='white'>
        Какой результат вы получите?
      </LineHeader>

      <ResultBlock />

      <Element name='review'></Element>
      <LineHeader bgColor='white'>
        ОТЗЫВЫ
      </LineHeader>

      <ReviewsBlock />

      <LineHeader bgColor='white'>
        призы
      </LineHeader>
      <GiftsBlock />

      <Element name='tariff'></Element>
      <LineHeader bgColor='white'>
        до поднятия цен:&nbsp;
        {/* <Moment date={moment('2021-04-12 18:30:00')} format={"hh:mm:ss"} durationFromNow interval={1000}></Moment> */}
      </LineHeader>
      <LineHeader bgColor='white'>
        ТАРИФЫ<br />
        <span style={{ color: '#f75995', fontSize: '26px' }}>Продажи закрыты</span>
      </LineHeader>

      <TariffBlock />

      <LineHeader bgColor='white'>
        ОСТАЛИСЬ ВОПРОСЫ? ВОЗНИКЛИ ПРОБЛЕМЫ ПРИ ОПЛАТЕ ?
      </LineHeader>
      <LineHeader bgColor='white' smallFont={true}>
        НАПИШИТЕ НАМ И МЫ С РАДОСТЬЮ ОТВЕТИМ НА ВСЕ ВАШИ ВОПРОСЫ И ПОМОЖЕМ ВАМ ОПРЕДЕЛИТЬСЯ С ТАРИФОМ!
      </LineHeader>
      <LineHeader bgColor='white'>
        {/* <CustomButton onClick={() => setShowPopup(prev => !prev)}>
          ЗАДАТЬ ВОПРОС
        </CustomButton> */}
        <a href={'https://wa.me/message/JSDOINY2LABTP1'} rel="noreferrer" target="_blank">
          <CustomButton>
            ЗАДАТЬ ВОПРОС
          </CustomButton>
        </a>
      </LineHeader>

      <CustomFooter setShowPopup={setShowPopup} />
      {showPopup ? <SendForm showPopup={setShowPopup} /> : null}
    </>
  )
}

export default IndexPage
