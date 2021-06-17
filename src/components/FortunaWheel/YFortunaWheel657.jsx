import React, { useEffect, useState } from "react"
import './style.css'
// https://codepen.io/lup-the-flexboxer/pen/ExjWRxy

export const FortunaWheel = () => {

    function promiseAfterTimeout(seconds) {
        return new Promise(function (resolve) {
            setTimeout(() => resolve(), seconds * 1000);
        });
    }

    function rotateWheel(degr) {
        let wheel = document.querySelector('.wheel');
        wheel.style.transform = 'rotate(' + degr + 'deg)';
        return promiseAfterTimeout(3);
    }

    function randomDegrees() {
        let randomFloat = Math.random() * 360;
        let descreetDegrees = Math.round(randomFloat / 36) * 36;
        return descreetDegrees;
    }

    function getCurrentColor(currentDegrees) {
        let colors = ["gold", "white", "red", "white", "red", "white"];
        let segmentCount = parseInt(currentDegrees / 36);
        let segmentShift = segmentCount % colors.length;

        return colors[segmentShift];
    }

    function launchSpin() {
        currentRotation += randomDegrees();

        rotateWheel(currentRotation)
            .then(() => {
                let winColor = getCurrentColor(currentRotation);
                let result = document.querySelector('.result');
                result.style.backgroundColor = winColor;
            });
    }

    let currentRotation = 0;
    
    useEffect(() => {
        let spinButton = document.querySelector('.spin');
        spinButton.addEventListener('click', launchSpin);
    }, [])

    return (
        <div>
            <div className="arrow"></div>
            <div className="wheel rotating"></div>

            <button className="spin">Поехали!</button>
            <div className="result"></div>
        </div>
    )
}