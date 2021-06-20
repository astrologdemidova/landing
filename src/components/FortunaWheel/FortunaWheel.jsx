import React, { useCallback, useEffect, useRef, useState } from "react";
import WheelComponent from "./WheelConstructor";
import 'react-wheel-of-prizes/dist/index.css'
import axios from "axios";
import { CircleLoader } from 'react-spinners';
// https://www.npmjs.com/package/react-wheel-of-prizes?activeTab=readme

export const FortunaWheel = ({ setType, onClick }) => {
    const segments = [
        { id: '001', isSuper: true, value: '120000 RUB', topHeader: 'Моя консультация' },
        { id: '002', isSuper: false, value: '2000 RUB', topHeader: 'Инструкция "Камни жизни"' },
        { id: '003', isSuper: true, value: '19000 RUB', topHeader: 'Украшение \n"Королева кубков"' },
        { id: '004', isSuper: false, value: '2000 RUB', topHeader: 'Инструкция "Знаки Вселенной"' },
        { id: '005', isSuper: true, value: 'IPhone 12', topHeader: '' },
        { id: '006', isSuper: false, value: '2000 RUB', topHeader: 'Инструкция "Денежная сфера"' },
        { id: '007', isSuper: true, value: '6000 RUB', topHeader: 'Бутылочка с кристаллом кварца' },
        { id: '008', isSuper: false, value: '2000 RUB', topHeader: 'Инструкция "Идеальный партнёр"' },
        { id: '009', isSuper: true, value: '60000 RUB', topHeader: 'Моя консультация' },
        { id: '010', isSuper: false, value: '2000 RUB', topHeader: '"Чеки изобилия" на год' },
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
    const onFinished = (winner) => {
        setType(winner);
        // console.log(winner);
        localStorage.setItem('fortunaAstrologDemidovaIdWinner', winner.id);
    }
    const checkWillGame = () => {
        return localStorage.getItem('fortunaAstrologDemidova')
    }
    const previousWinner = () => {
        return localStorage.getItem('fortunaAstrologDemidovaIdWinner') || '004'
    }

    const [winSegment, setWinSegment] = useState('000');

    useEffect(() => {
        // .get("http://localhost:3000/api/fortuna/get-wheel-item")
        axios
        .get("https://astrolog-fortuna-server.herokuapp.com/api/fortuna/get-wheel-item")
            .then((res) => {
                setWinSegment(res.data);
            });
    }, []);

    return (
        <>
            {winSegment === '000' ?
                <div style={{ textAlign: 'center' }}>
                    <span style={{ paddingRight: '121px' }}>
                        <CircleLoader color='#BF36D7' size='170' />
                    </span>
                </div>
                : <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    // winningSegment={checkWillGame() ? previousWinner() : winSegment} // return for prod
                    winningSegment={winSegment}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor='gold'
                    contrastColor='black'
                    buttonText='Spin'
                    isOnlyOnce={true}
                    size={150}
                    upDuration={100}
                    downDuration={2000}
                />}
        </>
    );
};