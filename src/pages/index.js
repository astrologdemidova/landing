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
import { AccordionBlock } from "../components/AccordionBlock/AccordionBlock"
// markup
const IndexPage = () => {
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
      
      <LineHeader bgColor='white'>
        ОСТАЛИСЬ ВОПРОСЫ? ВОЗНИКЛИ ПРОБЛЕМЫ ПРИ ОПЛАТЕ ?
      </LineHeader>

      <CustomFooter />
    </>
  )
}

export default IndexPage
