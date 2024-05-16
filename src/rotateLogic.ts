import { cube, columns,  } from "./index";


export const rotateLogic = (cubesArray: cube[], radians: number) => {
    let firstCube = cubesArray[1];
    let xArray: number[] = []
    let yArray: number[] = []
    let isOutside: boolean = false;

    cubesArray.forEach((cube) => {
        let distanceX = cube.initialX - firstCube.x;
        let distanceY = cube.initialY - firstCube.y;

        let valueX = firstCube.x + Math.round(distanceX * Math.cos(radians) - distanceY * Math.sin(radians));
        let valueY = firstCube.y + Math.round(distanceX * Math.sin(radians) + distanceY * Math.cos(radians));

        xArray.push(valueX);
        yArray.push(valueY);

        console.log(valueX, columns)

        if (valueX < 0 || valueX > columns - 1) {
            isOutside = true;
        }
    })
    
    if (!isOutside) {
        cubesArray.forEach((cube, index) => {
        cube.x = xArray[index]
        cube.y = yArray[index]
        })
    };
}