import React from "react"
import {
    SendFormWrapper,
    FormWrapper,
} from './styles'

export const SendForm = ({showPopup}) => {
    return (
        <SendFormWrapper onClick={() => showPopup((prev) => !prev)}>
            <FormWrapper>
                <h3>Есть вопросы?</h3>
                <p>Напишите свой номер и мы сразу свяжемся с вами</p>
                <form>
                    <input />
                    <button>send</button>
                </form>
            </FormWrapper>
        </SendFormWrapper>
    )
}