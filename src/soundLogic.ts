export let cantRotateAudio: HTMLAudioElement;
export let clearLineAudio: HTMLAudioElement;
export let gameOverAudio: HTMLAudioElement;
export let mainAudio: HTMLAudioElement;
export let newPieceAudio: HTMLAudioElement;
export let newRecordAudio: HTMLAudioElement;
export let nextLevelAudio: HTMLAudioElement;


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
        gameOverAudio.volume = 0.5;
        gameOverAudio.addEventListener('canplaythrough', () => resolve(true));
    })
}

const loadMainAudio = () => {
    return new Promise((resolve) => {
        mainAudio = new Audio('../assets/sounds/mainAudio.mp3');
        mainAudio.volume = 0.5;
        mainAudio.addEventListener('canplaythrough', () => resolve(true));
    })
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


export const loadAudios = async() => {
    await loadCantRotateAudio();
    await loadClearLineAudio();
    await loadGameOverAudio();
    await loadMainAudio();
    await loadNewPieceAudio();
    await loadNewRecordAudio();
    await loadNextLevelAudio();
    return;
}