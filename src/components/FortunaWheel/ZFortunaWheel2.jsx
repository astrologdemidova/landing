import React, { useEffect, useState } from "react"
import './style2.css'
// https://raksy.dyndns.org/wheel.html

export const FortunaWheel2 = () => {

    // let canvas = document.getElementById("canvas");

    // let sections = ["£25", "£15", "£50", "£1000", "£25",
    //     "£500", "£15", "£100", "£1000", "£15",
    //     "£100", "£500"];

    // let colors = ["#F84", "#8F4", "#48F", "#F8F"];

    // let wheels = null;
    // let frame = null;

    // function repaint(angle) {
    //     let r = Math.min(innerWidth, innerHeight) / 2.25 | 0;
    //     if (wheels === null) {
    //         wheels = [];
    //         for (let selected = 0; selected < sections.length; selected++) {
    //             let c = document.createElement("canvas");
    //             c.width = c.height = 2 * r + 10;
    //             let ctx = c.getContext("2d"), cx = 5 + r, cy = 5 + r;
    //             let g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    //             g.addColorStop(0, "rgba(0,0,0,0)");
    //             g.addColorStop(1, "rgba(0,0,0,0.5)");
    //             for (let i = 0; i < sections.length; i++) {
    //                 let a0 = 2 * Math.PI * i / sections.length;
    //                 let a1 = a0 + 2 * Math.PI / (i == 0 ? 1 : sections.length);
    //                 let a = 2 * Math.PI * (i + 0.5) / sections.length;
    //                 ctx.beginPath();
    //                 ctx.moveTo(cx, cy);
    //                 ctx.arc(cx, cy, r, a0, a1, false);
    //                 ctx.fillStyle = colors[i % 4];
    //                 ctx.fill();
    //                 ctx.fillStyle = g;
    //                 ctx.fill();
    //                 ctx.save();
    //                 if (i == selected) {
    //                     ctx.fillStyle = "#FFF";
    //                     ctx.shadowColor = "#FFF";
    //                     ctx.shadowBlur = r / 20;
    //                 } else {
    //                     ctx.fillStyle = "#AAA";
    //                     ctx.shadowColor = "#000";
    //                     ctx.shadowBlur = r / 100;
    //                 }
    //                 ctx.font = "bold " + r / sections.length * 1.6 + "px serif";
    //                 ctx.textAlign = "center";
    //                 ctx.textBaseline = "middle";
    //                 ctx.translate(cx, cy);
    //                 ctx.rotate(a);
    //                 ctx.fillText(sections[i], r * 0.62, 0);
    //                 ctx.restore();
    //             }
    //             wheels.push(c);
    //         }
    //     }
    //     if (frame === null) {
    //         frame = document.createElement("canvas");
    //         frame.width = frame.height = 10 + 2 * r * 1.25 | 0;
    //         let ctx = frame.getContext("2d"), cx = frame.width / 2, cy = frame.height / 2;
    //         ctx.shadowOffsetX = r / 80;
    //         ctx.shadowOffsetY = r / 80;
    //         ctx.shadowBlur = r / 40;
    //         ctx.shadowColor = "rgba(0,0,0,0.5)";
    //         ctx.beginPath();
    //         ctx.arc(cx, cy, r * 1.025, 0, 2 * Math.PI, true);
    //         ctx.arc(cx, cy, r * 0.975, 0, 2 * Math.PI, false);
    //         ctx.fillStyle = "#444";
    //         ctx.fill();
    //         ctx.shadowOffsetX = r / 40;
    //         ctx.shadowOffsetY = r / 40;
    //         g = ctx.createRadialGradient(cx - r / 7, cy - r / 7, 0, cx, cy, r / 3);
    //         g.addColorStop(0, "#FFF");
    //         g.addColorStop(0.2, "#F44");
    //         g.addColorStop(1, "#811");
    //         ctx.fillStyle = g;
    //         ctx.beginPath();
    //         ctx.arc(cx, cy, r / 3.5, 0, 2 * Math.PI, false);
    //         ctx.fill();
    //         ctx.translate(cx, cy);
    //         ctx.rotate(Math.PI - 0.2);
    //         ctx.beginPath();
    //         ctx.moveTo(- r * 1.1, - r * 0.05);
    //         ctx.lineTo(- r * 0.9, 0);
    //         ctx.lineTo(- r * 1.1, r * 0.05);
    //         ctx.fillStyle = "#F44";
    //         ctx.fill();
    //     }
    //     canvas.width = innerWidth;
    //     canvas.height = innerHeight;
    //     let cx = innerWidth / 2, cy = innerHeight / 2;
    //     let ctx = canvas.getContext("2d");
    //     let selected = (Math.floor((- 0.2 - angle) * sections.length / (2 * Math.PI))
    //         % sections.length);
    //     if (selected < 0) selected += sections.length;
    //     ctx.save();
    //     ctx.translate(cx, cy);
    //     ctx.rotate(angle);
    //     ctx.translate(-wheels[selected].width / 2, -wheels[selected].height / 2);
    //     ctx.drawImage(wheels[selected], 0, 0);
    //     ctx.restore();
    //     ctx.drawImage(frame, cx - frame.width / 2, cy - frame.height / 2);
    // }

    // let angle = 0, running = false;
    // function spinTo(winner, duration) {
    //     let final_angle = (-0.2) - (0.5 + winner) * 2 * Math.PI / sections.length;
    //     let start_angle = angle - Math.floor(angle / (2 * Math.PI)) * 2 * Math.PI - 5 * 2 * Math.PI;
    //     let start = performance.now();
    //     function frame() {
    //         let now = performance.now();
    //         let t = Math.min(1, (now - start) / duration);
    //         t = 3 * t * t - 2 * t * t * t; // ease in out
    //         angle = start_angle + t * (final_angle - start_angle);
    //         repaint(angle);
    //         if (t < 1) requestAnimationFrame(frame); else running = false;
    //     }
    //     requestAnimationFrame(frame);
    //     running = true;
    // }

    // canvas.onmousedown = function () {
    //     if (!running) {
    //         spinTo(Math.random() * sections.length | 0, 5000);
    //     }
    // };

    // repaint(angle);

    // let csz = null;
    // setInterval(function () {
    //     let sz = innerWidth + "/" + innerHeight;
    //     if (csz !== sz) {
    //         csz = sz;
    //         wheels = frame = null;
    //         repaint(angle);
    //     }
    // }, 10);

    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}
