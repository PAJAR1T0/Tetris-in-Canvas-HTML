import { ctx, width, height, rows, newRecordAudio, level } from "./index";

let actualPointsToDraw: string = '00000'
let historicalPointsToDraw: string = '00000'

let historicalPoints: number = 0;
let maxPointsPerCicle = 20;

let hasNewRecord: boolean = false;

export let points: number = 0;
export let pointsPerIteration = maxPointsPerCicle * .5 / rows;
export let pointsPerColition = 1 + maxPointsPerCicle * .5;
export let pointsPerLine = 50;

export const resetPoints = () => {
    hasNewRecord = false;
    return points = 0;
}

const saveHistoricalPoints = () => {
    localStorage.setItem('historicalPoints', actualPointsToDraw);
}

export const loadHistoricalpoints = () => {
    historicalPoints = Number(localStorage.getItem('historicalPoints')) | 0;
    historicalPointsToDraw = pointsToString(historicalPoints);
}

const pointsToString = (points: number) => {
    let pointsFloor = Math.floor(points)
    let pointsLenght = pointsFloor.toString().length;
    return (pointsLenght === 1) ? `0000${pointsFloor}` :
                          (pointsLenght === 2) ? `000${pointsFloor}` : 
                          (pointsLenght === 3) ? `00${pointsFloor}` :  `${pointsFloor}`;  
}

export const updatePoints = (pointsFactor: number) => {
    points += pointsFactor;
    actualPointsToDraw = pointsToString(points);
    if (points > historicalPoints) {
        if (!hasNewRecord) newRecordAudio.play();
        hasNewRecord = true;
        historicalPoints = points;
        historicalPointsToDraw = pointsToString(historicalPoints)
        saveHistoricalPoints()
    };
    
}

export const drawActualPoints = () => {
    ctx.save();
    ctx.beginPath();
    ctx.font = '15px "Press Start 2P"';
    ctx.fillText(historicalPointsToDraw, width * .02, height * .05);
    ctx.fillText(actualPointsToDraw,width * .77, height * .05);
    ctx.fill();
    ctx.textAlign = 'center';
    ctx.fillText(`Level ${level}`, width/2, height * .05);
    ctx.fill();
    ctx.restore();
}