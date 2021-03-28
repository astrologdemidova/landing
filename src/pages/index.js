import * as React from "react"
import "../common-style/style.css"
import Moment from 'react-moment';
import moment from 'moment';
import { CustomFooter } from "../components/CustomFooter"
import { HeadBlock } from "../components/HeadBlock"
import { LineHeader } from "../components/LineHeader"
import { CustomMenu } from "../components/CustomMenu"
import { HelloBlock } from "../components/HelloBlock"
import { DescriptionCardBlock } from "../components/DescriptionCardBlock"
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
// markup
const IndexPage = () => {
  // React.useEffect(() => {
  //   // <script type="text/javascript" src="https://pay.demidova.payform.ru/widget.js" async></script>
  //   const scriptTag = document.createElement('script');
  //   scriptTag.type = 'text/javascript'
  //   scriptTag.async = true
  //   scriptTag.src = 'https://demidova.prodamus.me/widget.js'
  //   document.body.append(scriptTag)
  // }, [])
  const [showPopup, setShowPopup] = React.useState(false);
  return (
    <>
      <CustomMenu />

      <HeadBlock />
      {/* <LineHeader bgColor='pink'>
        ОСТАВЬ ЗАЯВКУ И УЗНАЙ О ПРОДАЖАХ ПЕРВЫМ
      </LineHeader> */}

      <Element name='about'></Element>
      <LineHeader bgColor='white'>
        Откровенно обо мне :
      </LineHeader>


      <HelloBlock />


      {/* <LineHeader bgColor='white' />
      <Element name='description'></Element>
      <LineHeader bgColor='white'>
        ЧТО ТЕБЯ ЖДЕТ НА МАРАФОНЕ
      </LineHeader> */}

      {/* <DescriptionCardBlock /> */}

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

      {/* <LineHeader bgColor='white' />
      <LineHeader bgColor='white' smallFont={true}>
        <strong>ДЛЯ </strong>ДОСТИЖЕНИЯ <strong>МАКСИМАЛЬНОГО РЕЗУЛЬТАТА</strong>
        ВАЖНО <strong>ВЫПОЛНЯТЬ ЗАДАНИЯ ПО АВТОРСКОЙ МЕТОДИКЕ</strong>
        В УСТАНОВЛЕННЫЕ ИСПОЛНИТЕЛЕМ СРОКИ! <strong>НАРУШИВШИХ </strong>
        ДАННОЕ <strong>ОБЯЗАТЕЛЬСТВО, МЫ ИМЕЕМ ПРАВО ИСКЛЮЧИТЬ ИЗ </strong>
        ОБЩЕГО <strong>ЧАТА </strong>ЕДИНОМЫШЛЕННИКОВ<strong>.</strong>
      </LineHeader> */}

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
      {/* <LineHeader bgColor='white' /> */}

      <ReviewsBlock />

      {/* <LineHeader bgColor='white'>
        ЕЩЁ БОЛЬШЕ ОТЗЫВОВ МОЖНО ПОСМОТРЕТЬ ЗДЕСЬ:
        <div style={{paddingTop: '15px'}}>
          <CustomButton>
            ВДОХНОВИТЬСЯ УСПЕХАМИ
          </CustomButton>
        </div>
      </LineHeader>
      <LineHeader bgColor='white' /> */}

      <LineHeader bgColor='white'>
        призы
      </LineHeader>
      <GiftsBlock />

      <Element name='tariff'></Element>
      <LineHeader bgColor='white'>
        до поднятия цен:&nbsp;
        {/* <Moment date={moment().add(4, 'm')} format={"hh:mm:ss"} durationFromNow interval={1000}/> */}
        <Moment date={moment('2021-03-28 19:00:00')} format={"hh:mm:ss"} durationFromNow interval={1000}></Moment>
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
        <a href={'https://wa.me/message/JSDOINY2LABTP1'} target="_blank">
          <CustomButton>
            ЗАДАТЬ ВОПРОС
          </CustomButton>
        </a>
      </LineHeader>

      <CustomFooter />
      {showPopup ? <SendForm showPopup={setShowPopup} /> : null}
    </>
  )
}

export default IndexPage
