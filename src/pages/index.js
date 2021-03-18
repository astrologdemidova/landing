import * as React from "react"
import { CustomButton } from "../components/CustomButton"
import { CustomFooter } from "../components/CustomFooter"
import { HelloBlock } from "../components/HelloBlock"
import { LineHeader } from "../components/LineHeader"
import "../common-style/style.css"
// markup
const IndexPage = () => {
  return (
    <>
      <HelloBlock />
      <LineHeader bgColor='pink'>
        ОСТАВЬ ЗАЯВКУ И УЗНАЙ О ПРОДАЖАХ ПЕРВЫМ
      </LineHeader>

      <LineHeader bgColor='white'>
        ОСТАЛИСЬ ВОПРОСЫ? ВОЗНИКЛИ ПРОБЛЕМЫ ПРИ ОПЛАТЕ ?
      </LineHeader>

      <LineHeader bgColor='pink'>
        АБСОЛЮТНО НОВЫЙ ДЕНЕЖНЫЙ МАРАФОН
        АБСОЛЮТНО НОВЫЙ ЗВУК МЕДИТАЦИЙ
        АБСОЛЮТНО НОВЫЙ РЕЗУЛЬТАТ
      </LineHeader>

      <LineHeader bgColor='white'>
        ОСТАЛИСЬ ВОПРОСЫ? ВОЗНИКЛИ ПРОБЛЕМЫ ПРИ ОПЛАТЕ ?
      </LineHeader>

      <LineHeader bgColor='blue'>
        hello World!!!!11
      </LineHeader>

      <CustomButton>
        Попасть на марафон
      </CustomButton>

      <CustomFooter />
    </>
  )
}

export default IndexPage
