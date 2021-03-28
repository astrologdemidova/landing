import React, { useState } from "react"
import Axios from "axios"
import {
    SendFormWrapper,
    FormWrapper,
} from './styles'

export const SendForm = ({ showPopup }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const toSendForm = (e) => {
        e.preventDefault();
        Axios.post("https://webreznov-audio.herokuapp.com/api/text-mail-test", {
            email: login,
            phone: password,
        })
            .then(function (res) {
                return res.data.status ? showPopup((prev) => !prev) : (setLogin(''), setPassword(''));
            })
            .catch(function (err) {
                console.log(err);
            });
    }
    return (
        <SendFormWrapper onClick={() => showPopup((prev) => !prev)}>
            <FormWrapper onClick={(e) => e.stopPropagation()}>
                <h3>Есть вопросы?</h3>
                <p>Напишите свой номер и мы сразу свяжемся с вами</p>
                <form onSubmit={(e) => toSendForm(e)}>
                    <div className="login_field">
                        <label className="login_field_label">email</label><br/>
                        <input
                            type="email"
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                            placeholder="example@mail.ru"
                            required
                        ></input>
                    </div>
                    <br/>
                    <div className="login_field">
                        <label className="login_field_label">телефон</label><br/>
                        <input
                            type="tel"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        ></input>
                    </div>
                    <br/>
                    <input type='submit' />
                </form>
            </FormWrapper>
        </SendFormWrapper>
    )
}