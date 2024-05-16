import { rotateLogic, variantArray, columns } from "./index";

let radiansFactor = Math.PI / 2;
export let radians = radiansFactor;

export let interval: number = 40;

export const resetInterval = () => {
    return interval = 40;
}

export const resetRadians = () => {
    return radians = 0;
}

export const moveLogic = (value: number | string) => {
    if (typeof value === 'number') {
        let variant = variantArray.pop()!;
        let isInCorner = false;

        variant.forEach((element) => {
            if (element.x - 1 < 0 && value < 0 || element.x + 1 === columns && value > 0) isInCorner = true;
            


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
        interval = 10;
    }

    if (value === 'upKeyDown') {
        interval = 40;
    }
    
    if (value === 'up'){
        radians -= radiansFactor;
        let variant = variantArray.pop()!;
        rotateLogic(variant, radians)
        variantArray.push(variant);
    }
}