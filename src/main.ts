import '../assets/style.css'
import { createCanvas, isGameOver, createVariant, eventListener, frameLogic } from './index';

export let gameLoop: number;


export const ctx = createCanvas()

export const main = () => {
    createVariant();
    if (!isGameOver) eventListener()
    gameLoop = setInterval(frameLogic, 10);
}

main();