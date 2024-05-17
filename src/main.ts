import '../assets/style.css'
import { createCanvas, isGameOver, createVariant, eventListener, frameLogic, loadHistoricalpoints, loadAudios, mainAudiosArray } from './index';

export let gameLoop: number;
export let audioChoose: HTMLAudioElement;

export let ctx = createCanvas();

let isFirstGame: boolean = false;

export const main = () => {
    audioChoose = mainAudiosArray[Math.floor(Math.random() * mainAudiosArray.length)];
    audioChoose.loop = true;
    audioChoose.volume = 0.5;
    audioChoose.play()
    createVariant();
    if (!isGameOver) eventListener()
    gameLoop = setInterval(frameLogic, 10);
}

const startGame = () => {
    main();
}

const addListener = () => window.addEventListener('keydown', () => {
    if (!isFirstGame) startGame();
    isFirstGame = true;
    })

const loadGame = async() => {
    loadHistoricalpoints();
    await loadAudios();
    addListener();
}

loadGame()