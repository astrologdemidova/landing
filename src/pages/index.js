import * as React from "react"
import "../common-style/style.css"
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
// markup
const IndexPage = () => {
  React.useEffect(() => {
    // <script type="text/javascript" src="https://pay.demidova.payform.ru/widget.js" async></script>
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript'
    scriptTag.async = true
    scriptTag.src = 'https://demidova.prodamus.me/widget.js'
    document.body.append(scriptTag)
  }, [])
  return (
    <>
      <CustomMenu />

      <HeadBlock />
      <LineHeader bgColor='pink'>
        ОСТАВЬ ЗАЯВКУ И УЗНАЙ О ПРОДАЖАХ ПЕРВЫМ
      </LineHeader>

      <LineHeader bgColor='white'>
        ПРИВЕТ! ДАВАЙ ЗНАКОМИТЬСЯ
      </LineHeader>

      
      <HelloBlock />

      
      <LineHeader bgColor='white' />
      <LineHeader bgColor='white'>
        ЧТО ТЕБЯ ЖДЕТ НА МАРАФОНЕ
      </LineHeader>

      <DescriptionCardBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='blue'>
        АБСОЛЮТНО НОВЫЙ ДЕНЕЖНЫЙ МАРАФОН
        АБСОЛЮТНО НОВЫЙ ЗВУК МЕДИТАЦИЙ
        АБСОЛЮТНО НОВЫЙ РЕЗУЛЬТАТ
      </LineHeader>

      <LineHeader bgColor='white'>
        ВАМ НУЖЕН МАРАФОН, ЕСЛИ ВЫ
      </LineHeader>

      <ReasonsBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='white'>
        НА МАРАФОНЕ БУДЕТ
      </LineHeader>

      <MarathonBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='white'>
        ПРОГРАММА АB.MONEY
      </LineHeader>

      <AccordionBlock />

      <LineHeader bgColor='white' />
      <LineHeader bgColor='white' smallFont={true}>
        <strong>ДЛЯ </strong>ДОСТИЖЕНИЯ <strong>МАКСИМАЛЬНОГО РЕЗУЛЬТАТА</strong>
        ВАЖНО <strong>ВЫПОЛНЯТЬ ЗАДАНИЯ ПО АВТОРСКОЙ МЕТОДИКЕ</strong>
        В УСТАНОВЛЕННЫЕ ИСПОЛНИТЕЛЕМ СРОКИ! <strong>НАРУШИВШИХ </strong>
        ДАННОЕ <strong>ОБЯЗАТЕЛЬСТВО, МЫ ИМЕЕМ ПРАВО ИСКЛЮЧИТЬ ИЗ </strong>
        ОБЩЕГО <strong>ЧАТА </strong>ЕДИНОМЫШЛЕННИКОВ<strong>.</strong>
      </LineHeader>
      <LineHeader bgColor='blue'>
        АБСОЛЮТНО НОВЫЙ ДЕНЕЖНЫЙ МАРАФОН
        АБСОЛЮТНО НОВЫЙ ЗВУК МЕДИТАЦИЙ
        АБСОЛЮТНО НОВЫЙ РЕЗУЛЬТАТ
      </LineHeader>

      <LineHeader bgColor='white'>
        КАКОЙ ИТОГ БУДЕТ ПОСЛЕ AB.MONEY?
      </LineHeader>

      <ResultBlock />

      <LineHeader bgColor='white'>
        ОТЗЫВЫ
      </LineHeader>
      <LineHeader bgColor='white' />

      <ReviewsBlock />

      <LineHeader bgColor='white'>
        ЕЩЁ БОЛЬШЕ ОТЗЫВОВ МОЖНО ПОСМОТРЕТЬ ЗДЕСЬ:
        <div style={{paddingTop: '15px'}}>
          <CustomButton>
            ВДОХНОВИТЬСЯ УСПЕХАМИ
          </CustomButton>
        </div>
      </LineHeader>
      <LineHeader bgColor='white' />

      <LineHeader bgColor='white'>
        призы
      </LineHeader>
      <GiftsBlock />

      <LineHeader bgColor='white'>
        ТАРИФЫ<br/>
        <span style={{color: '#f75995', fontSize: '26px'}}>Продажи закрыты</span>
      </LineHeader>

      <TariffBlock />

      <LineHeader bgColor='white'>
        ОСТАЛИСЬ ВОПРОСЫ? ВОЗНИКЛИ ПРОБЛЕМЫ ПРИ ОПЛАТЕ ?
      </LineHeader>
      <LineHeader bgColor='white' smallFont={true}>
        НАПИШИТЕ НАМ В ТЕЛЕГРАМ И МЫ С РАДОСТЬЮ ОТВЕТИМ НА ВСЕ ВАШИ ВОПРОСЫ И ПОМОЖЕМ ВАМ ОПРЕДЕЛИТЬСЯ С ТАРИФОМ!
      </LineHeader>
      <LineHeader bgColor='white'>
        <CustomButton>
          ЗАДАТЬ ВОПРОС
        </CustomButton>
      </LineHeader>

      <CustomFooter />
    </>
  )
}

export default IndexPage
