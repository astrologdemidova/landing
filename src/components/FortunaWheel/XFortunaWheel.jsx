import React, { useCallback, useEffect, useRef, useState } from "react";
import Winwheel from "winwheel";

export const FortunaWheel = () => {
    const theWheel = useRef(new Winwheel({
        'canvasId': 'myCanvas',
        'numSegments': 10,
        'fillStyle': '#e7706f',
        'lineWidth': 3,
        'centerX': 150,
        'centerY': 160,
        'segments': [
            { 'fillStyle': '#eae56f', 'text': 'Segment 1' },
            { 'fillStyle': '#ffffff', 'text': 'Segment 2' },
            { 'fillStyle': '#e7706f', 'text': 'Segment 3' },
            { 'fillStyle': '#ffffff', 'text': 'Segment 4' },
            { 'fillStyle': '#e7706f', 'text': 'Segment 5' },
            { 'fillStyle': '#ffffff', 'text': 'Segment 6' },
            { 'fillStyle': '#e7706f', 'text': 'Segment 7' },
            { 'fillStyle': '#ffffff', 'text': 'Segment 8' },
            { 'fillStyle': '#e7706f', 'text': 'Segment 9' },
            { 'fillStyle': '#ffffff', 'text': 'Segment 10' }
        ],
        'rotationAngle': -18,
        'textFontSize': 12,
        'innerRadius': 20,
        'animation': {
            'type': 'spinToStop',
            'duration': 1,
            'spins': 2,
            // 'callbackFinished': `drawColourTriangle()`,
            // 'callbackAfter': 'drawColourTriangle()',
        },
    }));

    useEffect(() => {
        // const theWheel = new Winwheel({
        //     'canvasId': 'myCanvas',
        //     'numSegments': 10,
        //     'fillStyle': '#e7706f',
        //     'lineWidth': 3,
        //     'centerX': 150,
        //     'centerY': 160,
        //     'segments': [
        //         { 'fillStyle': '#eae56f', 'text': 'Segment 1' },
        //         { 'fillStyle': '#ffffff', 'text': 'Segment 2' },
        //         { 'fillStyle': '#e7706f', 'text': 'Segment 3' },
        //         { 'fillStyle': '#ffffff', 'text': 'Segment 4' },
        //         { 'fillStyle': '#e7706f', 'text': 'Segment 5' },
        //         { 'fillStyle': '#ffffff', 'text': 'Segment 6' },
        //         { 'fillStyle': '#e7706f', 'text': 'Segment 7' },
        //         { 'fillStyle': '#ffffff', 'text': 'Segment 8' },
        //         { 'fillStyle': '#e7706f', 'text': 'Segment 9' },
        //         { 'fillStyle': '#ffffff', 'text': 'Segment 10' }
        //     ],
        //     'rotationAngle': -18,
        //     'textFontSize': 12,
        //     'innerRadius': 20,
        //     'animation': {
        //         'type': 'spinToStop',
        //         'duration': 1,
        //         'spins': 2,
        //         // 'callbackFinished': `drawColourTriangle()`,
        //         // 'callbackAfter': 'drawColourTriangle()',
        //     },
        // });

        function drawColourTriangle() {
            const c = theWheel.ctx;
            c.save();
            c.lineWidth = 2;
            c.strokeStyle = 'black';
            c.fillStyle = 'gold';
            c.beginPath();
            c.moveTo(140, 0);
            c.lineTo(160, 0);
            c.lineTo(150, 20);
            c.stroke();
            c.fill();
            c.restore();
        }

        // drawColourTriangle()

    }, []);

    return (
        <>
            <canvas id="myCanvas" width="300" height="320" onClick={() => theWheel?.startAnimation()}></canvas>
        </>
    );
};
