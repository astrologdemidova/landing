import * as React from "react"
import {
    HelloBlockStyled,
    HelloText,
    HelloPicture,
    ShowTextStyled,
    ShowMoreBtn,
} from "./styles"
import helloBlock from "../../images/IMG_9888.webp"
import { CustomButton } from "../CustomButton"
import { CustomMarker } from "../CustomMarker"
import { Link } from 'react-scroll'

export const HelloBlock = () => {
    const [toShow, setShow] = React.useState(false);
    return (
        <HelloBlockStyled>
            <HelloPicture>
                <img src={helloBlock} alt="Астролог Демидова Яна" />
            </HelloPicture>

            <HelloText>
                <ul>
                    <ShowTextStyled toShow={true}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Всем привет 🤍<br/>
                            Меня зовут Яна Демидова
                            Я астролог, эксперт по предназначению и повышению финансового уровня через прокачку подсознания
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={true}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Я родилась в маленьком городе в Рязанской области. Было время, когда я жила в жуткой нищете в бараке. Когда я выросла - моя самооценка была разрушена полностью , а вера в то, что я когда-то смогу выбраться из нищеты просто отсутствовала. Надеяться мне было не на кого, тк я росла без родителей.
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={true}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            2 года назад я задалась вопросом: где мои деньги? как не нуждаться ни в чем?
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={true}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Но я абсолютно не хотела изучать тему инвестиций и тп, потому решила зайти с другой стороны ...
                            Целых 2 года я собирала по крупицам информацию, каждую технику проверяла на себе...
                            Только за 2020 год я потратила ~500тыс на обучение !
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={true}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Да, это было очень непросто найти и проверить, но ...
                            я нашла ответы!
                            И именно этими секретами я поделюсь с вами на «Изобилии»
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={toShow}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            В конце 2019 года я зарабатывала 60тыс/мес, совсем не ценила себя и не верила в свои силы. Мне казалось, что большие деньги и я - это несовместимые вещи...
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={toShow}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Но потом я представила себя через 5 лет с тем-же заработком , что и в 2019...
                            разозлилась и решила, что не готова соглашаться на такое!
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={toShow}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            И применив все секреты, что я нашла - сейчас зарабатываю ~700тыс/мес и недавно внесла деньги за свою мечту, стоимостью 3 000 000🔥
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={toShow}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Знайте: все это только потому, что я убрала в подсознании те блоки, которые мне мешали верить, что я достойна большего! Блоки, которые мешали мне зарабатывать!
                        </p>
                    </ShowTextStyled>
                    <ShowTextStyled toShow={toShow}>
                        <div>
                            <CustomMarker type='pink' />
                        </div>
                        <p>
                            Теперь ваша очередь!
                            Задайте себе вопрос : готовы ли вы согласиться жить через 5 лет на том-же уровне, что и сейчас?
                            Нет? Правильно!
                            За эту неделю вы ощутите, что достойны большего!
                        </p>
                    </ShowTextStyled>
                </ul>
                <ShowMoreBtn onClick={() => setShow((prev) => !prev)}>
                  {toShow ? 'Свернуть' : 'Показать больше' } 
                </ShowMoreBtn>
                <p>
                    Погнали 🚀
                </p>

                <div style={{width: '100%', textAlign: 'center'}}>
                    <CustomButton>
                        <Link to="tariff" smooth={true} duration={700} delay={100} href=''>
                            купить
                        </Link>
                    </CustomButton>
                </div>

            </HelloText>
        </HelloBlockStyled>
    )
}