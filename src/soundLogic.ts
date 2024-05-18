import '../assets/sounds/cantRotate.mp3';
import '../assets/sounds/clearLine.mp3';
import '../assets/sounds/gameOver.mp3';
import '../assets/sounds/inWait.mp3';
import '../assets/sounds/newPiece.mp3';
import '../assets/sounds/newRecord.mp3';
import '../assets/sounds/nextLevel.mp3';
import '../assets/sounds/mainSounds/mainAudio1.mp3';
import '../assets/sounds/mainSounds/mainAudio2.mp3';
import '../assets/sounds/mainSounds/mainAudio3.mp3';
import '../assets/sounds/mainSounds/mainAudio4.mp3';


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
        cantRotateAudio = new Audio('../assets/sounds/cantRotate.mp3');
        cantRotateAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadClearLineAudio = () => {
    return new Promise((resolve) => {
        clearLineAudio = new Audio('../assets/sounds/clearLine.mp3');
        clearLineAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadGameOverAudio = () => {
    return new Promise((resolve) => {
        gameOverAudio = new Audio('../assets/sounds/gameOver.mp3');
        gameOverAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio1 = () => {
    return new Promise((resolve) => {
        mainAudio1 = new Audio('../assets/sounds/mainSounds/mainAudio1.mp3');
        mainAudio1.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio2 = () => {
    return new Promise((resolve) => {
        mainAudio2 = new Audio('../assets/sounds/mainSounds/mainAudio2.mp3');
        mainAudio2.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio3 = () => {
    return new Promise((resolve) => {
        mainAudio3 = new Audio('../assets/sounds/mainSounds/mainAudio3.mp3');
        mainAudio3.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio4 = () => {
    return new Promise((resolve) => {
        mainAudio4 = new Audio('../assets/sounds/mainSounds/mainAudio4.mp3');
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
        newPieceAudio = new Audio('../assets/sounds/newPiece.mp3');
        newPieceAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadNewRecordAudio = () => {
    return new Promise((resolve) => {
        newRecordAudio = new Audio('../assets/sounds/newRecord.mp3');
        newRecordAudio.volume = 0.5;
        newRecordAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadNextLevelAudio = () => {
    return new Promise((resolve) => {
        nextLevelAudio = new Audio('../assets/sounds/nextLevel.mp3');
        nextLevelAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadInWaitAudio = () => {
    return new Promise((resolve) => {
        inWaitAudio = new Audio('../assets/sounds/inWait.mp3');
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