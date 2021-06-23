import * as React from 'react';
import {
    HeadBlockStyled,
    HeaderStyled,
    HelloText,
    HelloPicture,
    BackgroundHelloBlock,
    BackgroundHelloBlockResponsive,
} from './styles';
import helloBlock from '../../images/IMG_9489.webp';
// import videoBlock from "../../images/ezgif.com-gif-maker.gif"
import { CustomButton } from '../CustomButton';
import { CustomMarker } from '../CustomMarker';
import { Link } from 'react-scroll';

export const HeadBlock = () => {
    return (
        <HeadBlockStyled>
            <HelloText>
                <div style={{ padding: '20px' }}>
                    <HeaderStyled>
                        <Link to="about" smooth={true} duration={700} delay={100} href="">
                            о яне
                        </Link>
                        <Link to="program" smooth={true} duration={700} delay={100} href="">
                            программа
                        </Link>
                        <Link to="tariff" smooth={true} duration={700} delay={100} href="">
                            купить
                        </Link>
                        <Link to="review" smooth={true} duration={700} delay={100} href="">
                            отзывы
                        </Link>
                    </HeaderStyled>
                    <h1>«Изобилие»</h1>
                    <h2>Старт 28 июня</h2>
                    <ul>
                        <li>
                            <CustomMarker type="pink" />
                            мощнейшие ритуалы на привлечение денег и удачи
                        </li>
                        <li>
                            <CustomMarker type="pink" />7 дней практик, устраняющих препятствия на
                            пути к деньгам
                        </li>
                        <li>
                            <CustomMarker type="pink" />
                            секретная техника по определению предназначения и талантов
                        </li>
                        <li>
                            <CustomMarker type="pink" />
                            Определение вашей финансовой ниши с помощью астрологии
                        </li>
                        <li>
                            <CustomMarker type="pink" />
                            онлайн - разборы ваших ситуаций Яной лично
                        </li>
                    </ul>
                </div>

                <h4>МАРАФОН ПРОХОДИТ В TELEGRAM</h4>

                <div style={{ width: '100%', textAlign: 'center' }}>
                    <CustomButton>
                        <Link to="tariff" smooth={true} duration={700} delay={100} href="">
                            участвовать
                        </Link>
                    </CustomButton>
                </div>
                <BackgroundHelloBlock />
            </HelloText>
            <BackgroundHelloBlockResponsive />

            <HelloPicture>
                {/* <video width="100%" height="auto" autoplay="autoplay" loop="loop" preload="auto" poster={helloBlock}>
                    <source src={videoBlock} type="video/mp4" />
                    <source src="daisy-stock-webm-video.webm" type="video/webm" />
                </video> */}
                <img src={helloBlock} alt="Астролог Демидова Яна" />
                {/* <img src={videoBlock} alt="Астролог Демидова Яна" /> */}
            </HelloPicture>
        </HeadBlockStyled>
    );
};
