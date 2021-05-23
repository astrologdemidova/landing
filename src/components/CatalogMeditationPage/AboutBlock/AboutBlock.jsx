import React from "react"
import { ReviewsBlockWrapper } from './styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import review1 from '../../../images/catalog/fortuna.webp'
// import review2 from '../../../images/catalog/red-min.jpg'
import review3 from '../../../images/catalog/IMG_2770.webp'
import review4 from '../../../images/catalog/IMG_2435.png'
import review5 from '../../../images/catalog/IMG_2436.png'

const carouselConfig = {
    autoPlay: false,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    swipeable: true,
    dynamicHeight: true,
}
export const AboutBlock = ({setIsAbout}) => {
    // const [showText, setShowText] = React.useState(false);
    const getAboutText = () => {
        return (
            <>
                <p>
                    Все знания, которыми я делюсь - это то, что я собирала годами и проверяла на себе. Только за 2020 год я вложила больше 500тыс.р в своё обучение и это постоянно приносит свои плоды:
            </p>
                <p>
                    <span role="img" aria-label="Pensive emoji">❌</span>в начале 2020 года:<br />
                •ежемесячный доход ~60тыс.<br />
                •консультация стоила 5000(за 3 часа), были супер-отзывы и трансформации, больша очередь на консультации, но я боялась и все ещё не очень верила в себя. На мое мышление очень влияли жуткие условия, в которых я когда-то жила(фото в галерее)...я не верила, что могу быть достойна большего.
            </p>
                <p>
                    ✔Сейчас<br />
                •Я - один из самых высокооплачиваемых астрологов России<br />
                • 1 час моей работы стоит 30 000р, а 4х часовая консультация - 120 000. И даже сейчас у меня постоянная очередь на 1-1,5 месяца вперёд, без рекламы консультаций. •Ко мне записываются звезды и крупные блогеры.<br />
                •За 1 год я подняла свой уровень дохода в среднем в 14 раз<br />
                •Сама исполнила свою мечту, купив машину за 3млн<br />
                •Начала ставить глобальные масштабные цели и искренне верить, что достойна этого и помогаю в этом своим клиентам
            </p>
                <p>
                    За эти годы я настолько отточила свой навык, что одна моя консультация меняет жизнь и сознание человека так, что он переходит на новый уровень жизни и заработка уже в первый месяц, при выполнении рекомендаций.<br />
                Налаживает отношения с супругом, хотя казалось , что все потеряно.<br />
                Люди, не видящие смысла жизни на протяжении 7лет и предпринимающие попытки суицида выходят из глубокой депрессии.
            </p>
                <p>
                    Мой ежемесячный доход вырос до ~700тыс-1млн/мес.
            </p>
                <p>
                    И все это благодаря работе с подсознанием, пониманию своего предназначения, медитациям и эффективным магическим ритуалам.<br />
                Все эти инструменты собраны здесь, чтобы у каждого была возможность быстро выйти на новый уровень жизни. Наконец выйти на уровень, о котором вы мечтаете.
            </p>
            </>
        )
    }
    return (
        <>
            <ReviewsBlockWrapper>

                <Carousel {...carouselConfig}>
                    <div>
                        <img src={review1} alt="astrolog" width='300px' />
                    </div>
                    <div>
                        <img src={review3} alt="астрология" width='300px' />
                    </div>
                    <div>
                        <img src={review4} alt="астрология" width='300px' />
                    </div>
                    <div>
                        <img src={review5} alt="астрология" width='300px' />
                    </div>
                </Carousel>

            </ReviewsBlockWrapper>

            <p>
                Всем привет<span role="img" aria-label="Pensive emoji">🤍</span><br />
                Астролог я не обычный: уже 4 года я эксперт по предназначению и повышению финансового уровня через астрологию и магию. Провела больше 1230 консультаций
            </p>
            {getAboutText()}
            <div style={{fontWeight: '600'}} onClick={() => setIsAbout(false)}>Скрыть</div>
        </>
    )
}
