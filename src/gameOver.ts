import { ctx, gameLoop, width, height, audioChoose, gameOverAudio, inWaitAudio } from "./index";


export let isGameOver = false;

export const resetGameOver = () => {
    return isGameOver = false;
}


export const gameOverLogic = () => {
    clearInterval(gameLoop)
    isGameOver = true;
    audioChoose.pause();
    gameOverAudio.play()
    audioChoose.currentTime = 0;
    ctx.save()
    ctx.beginPath()
    ctx.fillStyle = 'white';
    ctx.fillRect(0, height/2 * .9, width, height * .1)
    ctx.fill();
    ctx.font = '37px "Press Start 2P"'
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'black';
    ctx.fillText('Game Over', width/2, height/2);
    ctx.fill();
    ctx.restore();
}