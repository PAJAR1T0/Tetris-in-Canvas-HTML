import '../assets/style.css'
import { createCanvas, isGameOver, createVariant, eventListener, frameLogic, loadHistoricalpoints, loadAudios, mainAudiosArray } from './index';

export let gameLoop: number;
export let audioChoose: HTMLAudioElement;

export let ctx: CanvasRenderingContext2D;

let isFirstGame: boolean = false;
let app = document.getElementById('app')!;
let loadingDiv = document.getElementById('loading')!;

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

const loadBackgroundImage = async() => {
    let newImage = new Image();
    newImage.src = '../assets/backgroundImage.png';
    await newImage.decode();

    app.style.backgroundImage = `url(${newImage.src})`;
}

const loadGame = async() => {
    loadHistoricalpoints();
    await loadAudios();
    await loadBackgroundImage();
    app.removeChild(loadingDiv);
    ctx = createCanvas();
    addListener();
}

loadGame()