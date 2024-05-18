import { cube, resetRadians } from "./index";

const colors: string[] = ['#00e4ff', '#ff8d01', '#ff8d01', '#faff00', '#9e0196', '#f60001', '#68b624'];

export let variantArray: cube[][] = [];

export const resetVariantArray = () => {
    return variantArray = [];
}

export const createVariant = () => {
    let variantChoose = Math.round(Math.random() * 6)
    let colorChoose = colors[variantChoose];
    
    let newCubeArray: cube[] = [];

    switch(variantChoose) {
        case 0: {
            let x = Math.round(Math.random() * 6);
            let y = 0;
            for (let i = 0; i < 4; i++){
                newCubeArray.push(new cube(x + i, y, colorChoose));
            }
            break;
        }
        case 1: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(new cube(x + i, y, colorChoose));
                if (!i) newCubeArray.push(new cube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 2: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(new cube(x + i, y, colorChoose));
                if (i === 2) newCubeArray.push(new cube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 3: {
            let x = Math.round(Math.random() * 8);
            let y = 0;
            for (let i = 0; i < 2; i++){
                newCubeArray.push(new cube(x + i, y, colorChoose));
                newCubeArray.push(new cube(x + i, y + 1, colorChoose));
            }
            break;
        }
        case 4: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(new cube(x + i, y, colorChoose));
                if (i === 1) newCubeArray.push(new cube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 5: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                switch (i) {
                    case 0:
                        newCubeArray.push(new cube(x + i, y, colorChoose));
                        break;
                    case 1:
                        newCubeArray.push(new cube(x + i, y - 1, colorChoose));
                        newCubeArray.push(new cube(x + i, y, colorChoose));
                        break;
                    case 2:
                        newCubeArray.push(new cube(x + i, y - 1, colorChoose));
                        break;
                }
            }
            break;
        }
        case 6: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                switch (i) {
                    case 0:
                        newCubeArray.push(new cube(x + i, y - 1, colorChoose));
                        break;
                    case 1:
                        newCubeArray.push(new cube(x + i, y - 1, colorChoose));
                        newCubeArray.push(new cube(x + i, y, colorChoose));
                        break;
                    case 2:
                        newCubeArray.push(new cube(x + i, y, colorChoose));
                        break;
                }
            }
            break;
        }
    }

    variantArray.push(newCubeArray);
    resetRadians();
}