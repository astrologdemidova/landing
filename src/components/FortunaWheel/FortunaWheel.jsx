import React, { useCallback, useEffect, useRef, useState } from "react";
// import WheelComponent from 'react-wheel-of-prizes'
import WheelComponent from "./WheelConstructor";
import 'react-wheel-of-prizes/dist/index.css'
// https://www.npmjs.com/package/react-wheel-of-prizes?activeTab=readme

export const FortunaWheel = ({setType}) => {
    const segments = [
        '120000 RUB',
        '2000 RUB',
        '19000 RUB',
        '2000 RUB',
        'IPhone 12',
        '2000 RUB',
        '6000 RUB',
        '2000 RUB',
        '6000 RUB',
        '2000 RUB',
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
        console.log(winner)
    }
    return (
        <>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='19000 RUB'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='gold'
                contrastColor='black'
                buttonText='Spin'
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
            />
        </>
    );
};
