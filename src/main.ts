import '../assets/style.css'
import { createCanvas, isGameOver, createVariant, eventListener, frameLogic, loadHistoricalpoints, loadAudios, mainAudio } from './index';

export let gameLoop: number;


export let ctx = createCanvas();

let isFirstGame: boolean = false;

export const main = () => {
    mainAudio.loop = true;
    mainAudio.play()
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