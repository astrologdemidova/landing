import React, { useEffect, useState } from 'react'

const WheelComponent = ({
    segments,
    segColors,
    winningSegment,
    onFinished,
    primaryColor,
    contrastColor,
    buttonText,
    isOnlyOnce = true,
    size = 290,
    upDuration = 100,
    downDuration = 1000,
    fontFamily = 'proxima-nova',
    setIsStart,
}) => {
    let currentSegment = ''
    let isStarted = false
    const [isFinished, setFinished] = useState(false)
    let timerHandle = 0
    const timerDelay = segments.length
    let angleCurrent = 0
    let angleDelta = 0
    let canvasContext = null
    let maxSpeed = Math.PI / `${segments.length}`
    const upTime = segments.length * upDuration
    const downTime = segments.length * downDuration
    let spinStart = 0
    let frames = 0
    const centerX = 155
    const centerY = 170
    useEffect(() => {
        wheelInit()
        setTimeout(() => {
            window.scrollTo(0, 1)
        }, 0)
    }, [])
    const wheelInit = () => {
        initCanvas()
        wheelDraw()
    }

    const initCanvas = () => {
        let canvas = document.getElementById('canvas')
        if (navigator.appVersion.indexOf('MSIE') !== -1) {
            canvas = document.createElement('canvas')
            canvas.setAttribute('width', 310)
            canvas.setAttribute('height', 310)
            canvas.setAttribute('id', 'canvas')
            document.getElementById('wheel').appendChild(canvas)
        }
        canvas.addEventListener('click', spin, false)
        canvasContext = canvas.getContext('2d')
        // canvasContext.save()
        // canvasContext.beginPath()
        // canvasContext.moveTo(centerX, centerY)
        // canvasContext.rotate((Math.PI / 180) * 90)
    }
    const spin = () => {
        isStarted = true
        if (timerHandle === 0) {
            spinStart = new Date().getTime()
            // test ? // maxSpeed = Math.PI / ((segments.length*18) + Math.random())

            // maxSpeed = Math.PI / segments.length
            maxSpeed = Math.PI / (4 * segments.length)

            frames = 0
            timerHandle = setInterval(onTimerTick, timerDelay)
        }
    }
    const onTimerTick = () => {
        frames++
        draw()
        const duration = new Date().getTime() - spinStart
        let progress = 0
        let finished = false
        if (duration < upTime) {
            progress = duration / upTime
            angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
        } else {
            if (winningSegment) {
                // if (currentSegment.id === winningSegment && frames > segments.length) {
                if (currentSegment.id === winningSegment && frames > 12 * segments.length) {
                    progress = duration / upTime
                    angleDelta =
                        maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
                    progress = 1
                } else {
                    progress = duration / downTime
                    angleDelta =
                        maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
                }
            } else {
                progress = duration / downTime
                angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
            }
            if (progress >= 1) finished = true
        }

        angleCurrent += angleDelta
        while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2
        if (finished) {
            setFinished(true)
            onFinished(currentSegment)
            clearInterval(timerHandle)
            timerHandle = 0
            angleDelta = 0
        }
    }

    const wheelDraw = () => {
        clear()
        drawWheel()
        drawNeedle()
        drawShadowBottom()
    }

    const draw = () => {
        clear()
        drawWheel()
        drawNeedle()
    }

    const drawShadowBottom = () => {
        const ctx = canvasContext
        ctx.save()
        ctx.beginPath()

        // ctx.moveTo(centerX, centerY + size)
        // ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        // ctx.shadowOffsetX = 0;
        // ctx.shadowOffsetY = 0;
        // ctx.shadowBlur = 10;
        // ctx.shadowColor = "black";

        // ctx.ellipse(centerX, centerY + size + 40, 50, 10, 0, 0, Math.PI*2);

        // ctx.fill();

        //*****test
        var radgrad = ctx.createRadialGradient(
            centerX,
            centerY + size + 40,
            0,
            centerX,
            centerY + size + 40,
            50
        );
        radgrad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        radgrad.addColorStop(0.1, 'rgba(255, 255, 255, 0.3)');
        radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = radgrad;
        ctx.ellipse(
            centerX,
            centerY + size + 40,
            50,
            10,
            0,
            0,
            Math.PI * 2
        );
        // ctx.fillRect(
        //     centerX - 50,
        //     centerY + size,
        //     250,
        //     250
        // );
        ctx.fill();
        //end test

        ctx.closePath()
        ctx.restore()
    }

    const strikeText = (idSector, lastAngle, angle) => {
        const ctx = canvasContext
        if (idSector === 2) {  // 003 id
            ctx.save()
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            // ctx.arc(
            //     centerX,
            //     centerY,
            //     size,
            //     (lastAngle + (Math.PI / 180) * 269),
            //     (angle + (Math.PI / 180) * 234),
            //     false
            // )
            ctx.lineTo(centerX + 180, centerY + 180)
            ctx.lineWidth = 15;
            // ctx.fillStyle = 'black'
            // ctx.fill()
            ctx.stroke();
            ctx.closePath()
            ctx.restore()
        }
    }

    const drawSegment = (key, lastAngle, angle) => {
        const ctx = canvasContext
        const value = segments[key].value
        const valueTop = segments[key].topHeader
        const valueBottom = segments[key].topHeader2
        const isBoldFont = segments[key].isBoldFont

        var gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size + 80);
        gradient.addColorStop(0, segColors[key]);
        gradient.addColorStop(0.4, segColors[key]);
        gradient.addColorStop(0.9, 'grey');

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, size, (lastAngle + (Math.PI / 180) * 252), (angle + (Math.PI / 180) * 252), false)
        ctx.lineTo(centerX, centerY)
        ctx.closePath()
        // ctx.fillStyle = segColors[key]
        ctx.fillStyle = gradient
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.fill()
        // ctx.stroke()
        ctx.save()

        // text of middle sector
        ctx.translate(centerX, centerY)
        ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 252)
        ctx.fillStyle = contrastColor || 'white'
        ctx.font = `${isBoldFont ? 'bold 15px' : '13px'} ` + fontFamily

        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0)

        // if (key === 2) {
        //     ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 252)
        //     ctx.fillRect(size / 2 , 0, width, 2);
        // }
        ctx.restore()

        const strikePrize = [2] // 003 = 2
        if (strikePrize.includes(key)) {
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 251)
            let { width } = ctx.measureText(value.substr(0, 21));

            ctx.fillStyle = 'black'
            ctx.fillRect((size - 40) / 2, 0, width + 20, 2);
            ctx.restore()
        }
        // strikeText(key, lastAngle, angle);


        // text of top sector
        // ctx.save()
        // ctx.translate(centerX, centerY)
        // ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 90)
        // ctx.translate((-centerX / 2) - 5, ((-centerY) + 20))
        // ctx.fillStyle = 'grey'
        // ctx.fillText(valueTop.substr(0, 21), size / 2 + 10, 0)
        // ctx.restore()

        // text 2 lines
        // ctx.save()
        // ctx.translate(centerX, centerY)
        // ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 90)
        // ctx.translate((-centerX / 2) + 15, ((-centerY) + 20))
        // ctx.fillStyle = 'grey'
        // ctx.fillText(valueTop.substr(0, 21), size / 2 - 10, 0)
        // ctx.restore()

        // ctx.save()
        // ctx.translate(centerX, centerY)
        // ctx.rotate(((lastAngle + angle) / 2) + (Math.PI / 180) * 90)
        // ctx.translate((-centerX / 2) + 15, ((-centerY) + 35))
        // ctx.fillStyle = 'grey'
        // ctx.fillText(valueBottom.substr(0, 21), size / 2 - 10, 0)
        // ctx.restore()
    }

    const drawWheel = () => {
        const ctx = canvasContext
        let lastAngle = angleCurrent
        const len = segments.length
        const PI2 = Math.PI * 2

        var gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30);
        gradient.addColorStop(0, 'gold');
        gradient.addColorStop(0.1, 'white');
        gradient.addColorStop(0.5, 'gold');

        // ctx.lineWidth = 0
        // ctx.strokeStyle = 'black'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        ctx.font = '0.8em ' + fontFamily
        for (let i = 1; i <= len; i++) {
            const angle = PI2 * (i / len) + angleCurrent
            drawSegment(i - 1, lastAngle, angle)
            lastAngle = angle
        }

        // Draw a center circle
        ctx.save()
        ctx.beginPath()
        ctx.arc(centerX, centerY, 20, 0, PI2, false)
        ctx.closePath()
        ctx.fillStyle = gradient || 'black'
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.shadowBlur = 5;
        ctx.lineWidth = 3
        // ctx.strokeStyle = contrastColor || 'white'
        ctx.fill()

        // ctx.font = 'bold 1em ' + fontFamily
        // ctx.fillStyle = contrastColor || 'white'
        // ctx.textAlign = 'center'
        // ctx.fillText(buttonText || 'Spin', centerX, centerY + 3)
        // ctx.stroke()

        // Draw outer circle
        ctx.restore()
        ctx.beginPath()
        ctx.arc(centerX, centerY, size, 0, PI2, false)
        ctx.closePath()

        const gradientOuter = ctx.createLinearGradient(
            size / 3,
            size,
            size / 0.7,
            size
        );
        // centerX + size,
        // centerY + size,
        // centerX - size,
        // centerY - size
        gradientOuter.addColorStop(.1, "gold");
        gradientOuter.addColorStop(.3, "white");
        gradientOuter.addColorStop(.75, "#ffc107");
        gradientOuter.addColorStop(.88, "white");
        gradientOuter.addColorStop(.99, "#ffc107");

        ctx.lineWidth = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.strokeStyle = gradientOuter;
        ctx.stroke();
        // ctx.fillStyle = gradientOuter;
        // ctx.fill();
    }

    const drawNeedle = () => {
        const ctxPointer = canvasContext
        const gradientPointer = ctxPointer.createLinearGradient(centerX - 10, centerY - size - 10, centerX, centerY - size + 20);
        gradientPointer.addColorStop(.1, "gold");
        gradientPointer.addColorStop(.5, "white");
        gradientPointer.addColorStop(.8, "gold");

        ctxPointer.lineWidth = 3
        // ctx.strokeStyle = gradientPointer || 'white'
        // Shadow
        ctxPointer.shadowColor = 'grey';
        ctxPointer.shadowOffsetX = 1;
        ctxPointer.shadowOffsetY = 1;
        ctxPointer.shadowBlur = 5;
        ctxPointer.fillStyle = gradientPointer || 'white'
        // ctxPointer.clip()

        ctxPointer.beginPath();
        // ctxPointer.moveTo(centerX - 10, centerY - size - 10);
        // ctxPointer.quadraticCurveTo(centerX, centerY - size - 30, centerX + 10, centerY - size - 10)
        ctxPointer.arc(
            centerX,
            centerY - size,
            11,
            (Math.PI * 175) / 180,
            (Math.PI * 360) / 180,
            false
        );
        ctxPointer.lineTo(centerX, centerY - size + 20)
        ctxPointer.closePath();
        ctxPointer.fill();

        ctxPointer.beginPath()
        // ctx.moveTo(centerX + 10, centerY - 30)
        // ctx.lineTo(centerX - 10, centerY - 30)
        // ctx.lineTo(centerX, centerY - 50)
        // ctxPointer.moveTo(centerX - 10, centerY - size - 10)
        // ctxPointer.lineTo(centerX + 10, centerY - size - 10)
        // ctxPointer.lineTo(centerX, centerY - size + 20)
        ctxPointer.closePath()
        ctxPointer.fill()


        //prize text
        const change = (angleCurrent + (Math.PI / 180) * 252) + Math.PI / 2
        let i =
            segments.length -
            Math.floor((change / (Math.PI * 2)) * segments.length) -
            1
        if (i < 0) i = i + segments.length
        currentSegment = segments[i]
        // isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50) //print prize under wheel
    }
    const clear = () => {
        const ctx = canvasContext
        ctx.clearRect(0, 0, 310, 310)
    }
    const handleClick = () => {
        setIsStart(false)
        localStorage.setItem('fortunaAstrologDemidova', 'will')
    }
    return (
        <div id='wheel' style={{ textAlign: 'center' }}>
            <canvas
                onClick={() => handleClick()}
                id='canvas'
                width='310'
                height='390'
                style={{
                    pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
                }}
            >
                Ваш брузер неподдерживает данную технологию, пожалуйста смените браузер.
            </canvas>
        </div>
    )
}
export default WheelComponent