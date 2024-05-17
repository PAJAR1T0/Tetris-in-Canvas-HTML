import { rotateLogic, variantArray, columns, points, nextLevelAudio } from "./index";



const maxInterval: number = 40;
const minInterval: number  = 10;
const numberOfLevels: number = 20;
const maxLevelPointage: number = 2000;
const pointsToNextLevel: number = maxLevelPointage / numberOfLevels;
const decreaseIntervalfactor: number = maxInterval / numberOfLevels;
let lastInterval: number = maxInterval;
export let level: number = 0;

export let interval: number = 40;

export const resetInterval = () => {
    return interval = 40;
}



export const moveLogic = (value: number | string) => {
    level = Math.floor(points/pointsToNextLevel)
    interval = (Math.floor(points) < maxLevelPointage ) ? maxInterval - Math.round(decreaseIntervalfactor * level)
    : minInterval;

    if (interval !== lastInterval) {
        nextLevelAudio.play();
        lastInterval = interval;
    }


    if (typeof value === 'number') {
        let variant = variantArray.pop()!;
        let isInCorner = false;

        variant.forEach((element) => {
            if (element.x - 1 < 0 && value < 0 || element.x + 1 === columns && value > 0) isInCorner = true;
            
            // TODO CHECAR LA MANERA DE REVISAR EL ARRAY A LA HORA DE ROTAR


            variantArray.forEach((variants) => {
                variants.forEach((eachVariant) => {
                    isInCorner = (element.x - 1 === eachVariant.x && element.y === eachVariant.y && value < 0) ? true : 
                                 (element.x + 1 === eachVariant.x && element.y === eachVariant.y && value > 0) ? true : isInCorner;
                })
            })
        })

        if (!isInCorner) {
            variant.forEach((element) => {
                element.move(value)
            })
        }

        variantArray.push(variant);
        return;
    }
    
    if (value === 'downKeyDown') {
        interval = minInterval;
    }
    
    if (value === 'up'){
        let variant = variantArray.pop()!;
        rotateLogic(variant)
        variantArray.push(variant);
    }


}