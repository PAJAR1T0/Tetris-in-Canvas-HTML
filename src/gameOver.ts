import { ctx, gameLoop, width, height } from "./index";


export let isGameOver = false;

export const resetGameOver = () => {
    return isGameOver = false;
}

export const gameOverLogic = () => {
    clearInterval(gameLoop)
    isGameOver = true;
    
    ctx.save()
    ctx.beginPath()
    ctx.font = '40px Arial'
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText('Game Over', width/2, height/2);
    ctx.fill();
    ctx.restore();
}