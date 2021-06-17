import React, { useCallback, useEffect, useRef, useState } from "react";
// import WheelComponent from 'react-wheel-of-prizes'
import WheelComponent from "./WheelConstructor";
import 'react-wheel-of-prizes/dist/index.css'
// https://www.npmjs.com/package/react-wheel-of-prizes?activeTab=readme

export const FortunaWheel = ({setType}) => {
    const segments = [
        {isSuper: true, value:'120001 RUB'},
        {isSuper: false, value:'2002 RUB'},
        {isSuper: true, value:'19003 RUB'},
        {isSuper: false, value:'2004 RUB'},
        {isSuper: true, value:'IPhone 12'},
        {isSuper: false, value:'2006 RUB'},
        {isSuper: true, value:'6007 RUB'},
        {isSuper: false, value:'2008 RUB'},
        {isSuper: true, value:'6009 RUB'},
        {isSuper: false, value:'2010 RUB'},
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
                size={150}
                upDuration={100}
                downDuration={1000}
            />
        </>
    );
};
