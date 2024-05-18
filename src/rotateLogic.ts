import { cube, columns, cantRotateAudio, variantArray } from "./index";

let radiansFactor = Math.PI / 2;
export let radians = radiansFactor;

export const resetRadians = () => {
    return radians = 0;
}

export const rotateLogic = (cubesArray: cube[]) => {
    radians -= radiansFactor;
    let firstCube = cubesArray[1];
    let xArray: number[] = []
    let yArray: number[] = []
    let isOutside: boolean = false;

    cubesArray.forEach((cube) => {
        let distanceX = cube.xWithoutRotation - firstCube.x;
        let distanceY = cube.yWithoutRotation - firstCube.y;

        let valueX = firstCube.x + Math.round(distanceX * Math.cos(radians) - distanceY * Math.sin(radians));
        let valueY = firstCube.y + Math.round(distanceX * Math.sin(radians) + distanceY * Math.cos(radians));

        xArray.push(valueX);
        yArray.push(valueY);

        variantArray.forEach((variants) => {
            variants.forEach((eachVariant) => {
                isOutside = (valueX - 1 === eachVariant.x && valueY === eachVariant.y) ? true : 
                            (valueX + 1 === eachVariant.x && valueY === eachVariant.y) ? true : isOutside;
            })
        })

        if (valueX < 0 || valueX > columns - 1) {
            isOutside = true;
            
        }
    })
    
    if (isOutside) {
        cantRotateAudio.play();
        return radians += radiansFactor;
    };
   
    cubesArray.forEach((cube, index) => {
        cube.x = xArray[index]
        cube.y = yArray[index]
    })

}