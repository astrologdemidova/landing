import React, { useState, useEffect } from "react";
import WheelComponent from "./WheelConstructor";
// import 'react-wheel-of-prizes/dist/index.css'
import axios from "axios";
import { CircleLoader } from 'react-spinners';
// https://www.npmjs.com/package/react-wheel-of-prizes?activeTab=readme
//radial-gradient(circle, rgba(66,86,193,1) 1%, rgba(3,0,41,1) 80%, rgba(3,0,41,1) 100%)
export const FortunaWheel = ({ setType, onClick, playPermission, setPlayPermission }) => {
    const segments = [
        { id: '001', isSuper: true, value: '120000 RUB', isBoldFont: true, topHeader: 'Моя', topHeader2: 'консультация' },
        { id: '002', isSuper: false, value: '2000 RUB', isBoldFont: false, topHeader: 'Инструкция', topHeader2: '"Камни жизни"' },
        { id: '003', isSuper: true, value: '19000 RUB', isBoldFont: false, topHeader: 'Украшение', topHeader2: '"Королева кубков"' },
        { id: '004', isSuper: false, value: '2000 RUB', isBoldFont: false, topHeader: 'Инструкция', topHeader2: '"Знаки Вселенной"' },
        { id: '005', isSuper: true, value: 'IPhone 12', isBoldFont: true, topHeader: '', topHeader2: '' },
        { id: '006', isSuper: false, value: '2000 RUB', isBoldFont: false, topHeader: 'Инструкция', topHeader2: '"Денежная сфера"' },
        { id: '007', isSuper: true, value: '6000 RUB', isBoldFont: false, topHeader: 'Бутылочка с', topHeader2: 'кристаллом кварца' },
        { id: '008', isSuper: false, value: '2000 RUB', isBoldFont: false, topHeader: 'Инструкция', topHeader2: '"Идеальный партнёр"' },
        { id: '009', isSuper: true, value: '60000 RUB', isBoldFont: true, topHeader: 'Моя', topHeader2: 'консультация' },
        { id: '010', isSuper: false, value: '2000 RUB', isBoldFont: false, topHeader: '"Чеки изобилия"', topHeader2: 'на год' },
    ]
    const segColors = [
        '#eae56f',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
    ]
    
    const [winSegment, setWinSegment] = useState('000');
    const [isStart, setIsStart] = useState(true);

    const onFinished = (winner) => {
        setType(winner);
        localStorage.setItem('fortunaAstrologDemidovaIdWinner', winner.id);
        setPlayPermission(false)
    }
    const checkWillGame = () => {
        return localStorage.getItem('fortunaAstrologDemidova')
    }
    const previousWinner = () => {
        const IdWinner = localStorage.getItem('fortunaAstrologDemidovaIdWinner');

        if (playPermission) return winSegment;

        if (IdWinner === '000') return winSegment;

        return IdWinner;
    }


    let url_string = {};
    let url = {};
    if (typeof window !== `undefined`) {
        url_string = window.location.href;
        url = new URL(url_string);
    }

    let che = url?.searchParams?.get("che") || '';
    const checkValid = localStorage.getItem('fortunaAstrologDemidovaCheckValid');

    useEffect(() => {
        axios
            .get("https://astrolog-fortuna-server.herokuapp.com/api/fortuna/get-wheel-item")
            .then((res) => {
                setWinSegment(res.data);
            })
    }, []);

    useEffect(() => {
        const prevPrize = localStorage.getItem('fortunaAstrologDemidovaIdWinner');
        if (checkValid !== che) {
            setPlayPermission(true)
            localStorage.setItem('fortunaAstrologDemidovaCheckValid', che);
            localStorage.setItem('fortunaAstrologDemidovaIdWinner', '000');//!!!
        } else if (prevPrize !== '000' && checkValid === che) {
            setType(segments.filter(item => item.id === `${prevPrize}`)[0])
        }
    }, [winSegment, setWinSegment])

    return (
        <>
            {winSegment === '000' ?
                <div style={{ textAlign: 'center' }}>
                    <span style={{ paddingRight: '121px' }}>
                        <CircleLoader color='#BF36D7' size='170' />
                    </span>
                </div>
                : <>
                    <WheelComponent
                        segments={segments}
                        segColors={segColors}
                        winningSegment={checkWillGame() ? previousWinner() : winSegment} // return for prod
                        // winningSegment={playPermission ? winSegment : previousWinner()} // return for prod
                        //winningSegment={winSegment}
                        onFinished={(winner) => onFinished(winner)}
                        primaryColor='gold'
                        contrastColor='black'
                        buttonText='Spin'
                        isOnlyOnce={true}
                        size={150}
                        upDuration={100}
                        downDuration={1000}
                        setIsStart={setIsStart}
                        playPermission={playPermission}
                        setPlayPermission={setPlayPermission}
                    />
                    {playPermission && isStart && <p style={{
                        textAlign: 'center',
                        color: '#ffffff',
                        fontSize: '21px',
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}>
                        Нажми на колесо и учавствуй в розыгрыше!
                    </p>}
                    {!playPermission && <p style={{
                        textAlign: 'center',
                        color: '#ffffff',
                        fontSize: '21px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        margin: '21px'
                    }}>
                        Участвовать в розыгрыше снова можно только после покупки!
                    </p>}
                </>
            }
        </>
    );
};