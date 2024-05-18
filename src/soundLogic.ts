import cantRotate from '../assets/sounds/cantRotate.mp3';
import clearLine from '../assets/sounds/clearLine.mp3';
import gameOver from '../assets/sounds/gameOver.mp3';
import inWait from '../assets/sounds/inWait.mp3';
import newPiece from '../assets/sounds/newPiece.mp3';
import newRecord from '../assets/sounds/newRecord.mp3';
import nextLevel from '../assets/sounds/nextLevel.mp3';
import mainAudioN1 from '../assets/sounds/mainSounds/mainAudio1.mp3';
import mainAudioN2 from '../assets/sounds/mainSounds/mainAudio2.mp3';
import mainAudioN3 from '../assets/sounds/mainSounds/mainAudio3.mp3';
import mainAudioN4 from '../assets/sounds/mainSounds/mainAudio4.mp3';


export let cantRotateAudio: HTMLAudioElement;
export let clearLineAudio: HTMLAudioElement;
export let gameOverAudio: HTMLAudioElement;
export let newPieceAudio: HTMLAudioElement;
export let newRecordAudio: HTMLAudioElement;
export let nextLevelAudio: HTMLAudioElement;
export let inWaitAudio: HTMLAudioElement;

let mainAudio1: HTMLAudioElement;
let mainAudio2: HTMLAudioElement;
let mainAudio3: HTMLAudioElement;
let mainAudio4: HTMLAudioElement;

export let mainAudiosArray: HTMLAudioElement[];


const loadCantRotateAudio = () => {
    return new Promise((resolve) => {
        cantRotateAudio = new Audio(cantRotate);
        cantRotateAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadClearLineAudio = () => {
    return new Promise((resolve) => {
        clearLineAudio = new Audio(clearLine);
        clearLineAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadGameOverAudio = () => {
    return new Promise((resolve) => {
        gameOverAudio = new Audio(gameOver);
        gameOverAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio1 = () => {
    return new Promise((resolve) => {
        mainAudio1 = new Audio(mainAudioN1);
        mainAudio1.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio2 = () => {
    return new Promise((resolve) => {
        mainAudio2 = new Audio(mainAudioN2);
        mainAudio2.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio3 = () => {
    return new Promise((resolve) => {
        mainAudio3 = new Audio(mainAudioN3);
        mainAudio3.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio4 = () => {
    return new Promise((resolve) => {
        mainAudio4 = new Audio(mainAudioN4);
        mainAudio4.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudios = async() => {
    await loadMainAudio1();
    await loadMainAudio2();
    await loadMainAudio3();
    await loadMainAudio4();

    mainAudiosArray = [mainAudio1, mainAudio2, mainAudio3, mainAudio4];
}
 
const loadNewPieceAudio = () => {
    return new Promise((resolve) => {
        newPieceAudio = new Audio(newPiece);
        newPieceAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadNewRecordAudio = () => {
    return new Promise((resolve) => {
        newRecordAudio = new Audio(newRecord);
        newRecordAudio.volume = 0.5;
        newRecordAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadNextLevelAudio = () => {
    return new Promise((resolve) => {
        nextLevelAudio = new Audio(nextLevel);
        nextLevelAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadInWaitAudio = () => {
    return new Promise((resolve) => {
        inWaitAudio = new Audio(inWait);
        inWaitAudio.volume = 0.25;
        inWaitAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const gameOverAudioEventListener = () => {
    return gameOverAudio.addEventListener('ended', () => {
        inWaitAudio.play();
    })
}

export const loadAudios = async() => {
    await loadCantRotateAudio();
    await loadClearLineAudio();
    await loadGameOverAudio();
    await loadMainAudios();
    await loadNewPieceAudio();
    await loadNewRecordAudio();
    await loadNextLevelAudio();
    await loadInWaitAudio();
    gameOverAudioEventListener();
    return;
}