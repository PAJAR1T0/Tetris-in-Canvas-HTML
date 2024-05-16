import '../assets/style.css'

const app: HTMLElement = document.getElementById('app')!;

const canvas: HTMLCanvasElement = document.createElement('canvas');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

const width = Math.max(window.innerWidth * .2, 350);
const height = width * 2;

const columns = 10
const rows = columns * 2;

const boxMeasure = width / columns;

canvas.width = width;
canvas.height = height;

app.appendChild(canvas);

let variantArray: cube[][] = [];
let interval: number = 40;
let isKeyDown: boolean = false;
let frame = 0;
let gameLoop: number;
let isGameOver = false;
let radiansFactor = Math.PI / 2;
let radians = radiansFactor;

const colors: string[] = ['#00e4ff', '#ff8d01', '#ff8d01', '#faff00', '#9e0196', '#f60001', '#68b624']

const createCube = (x: number, y: number, color: string) => {
    return new cube(x,y,color);
}

const createVariant = () => {
    let variantChoose = Math.round(Math.random() * 6)
    let colorChoose = colors[variantChoose];
    
    let newCubeArray: cube[] = [];

    switch(variantChoose) {
        

        case 0: {
            let x = Math.round(Math.random() * 6);
            let y = 0;
            for (let i = 0; i < 4; i++){
                newCubeArray.push(createCube(x + i, y, colorChoose));
            }
            break;
        }
        case 1: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(createCube(x + i, y, colorChoose));
                if (!i) newCubeArray.push(createCube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 2: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(createCube(x + i, y, colorChoose));
                if (i === 2) newCubeArray.push(createCube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 3: {
            let x = Math.round(Math.random() * 8);
            let y = 0;
            for (let i = 0; i < 2; i++){
                newCubeArray.push(createCube(x + i, y, colorChoose));
                newCubeArray.push(createCube(x + i, y + 1, colorChoose));
            }
            break;
        }
        case 4: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                newCubeArray.push(createCube(x + i, y, colorChoose));
                if (i === 1) newCubeArray.push(createCube(x + i, y - 1, colorChoose));
            }
            break;
        }
        case 5: {
            let x = Math.round(Math.random() * 7);
            let y = 1;
            for (let i = 0; i < 3; i++){
                switch (i) {
                    case 0:
                        newCubeArray.push(createCube(x + i, y, colorChoose));
                        break;
                    case 1:
                        newCubeArray.push(createCube(x + i, y - 1, colorChoose));
                        newCubeArray.push(createCube(x + i, y, colorChoose));
                        break;
                    case 2:
                        newCubeArray.push(createCube(x + i, y - 1, colorChoose));
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
                        newCubeArray.push(createCube(x + i, y - 1, colorChoose));
                        break;
                    case 1:
                        newCubeArray.push(createCube(x + i, y - 1, colorChoose));
                        newCubeArray.push(createCube(x + i, y, colorChoose));
                        break;
                    case 2:
                        newCubeArray.push(createCube(x + i, y, colorChoose));
                        break;
                }
            }
            break;
        }
    }

    variantArray.push(newCubeArray);
    radians = 0;
}

class cube {
    initialX: number;
    initialY: number;

    constructor(public x: number, public y: number, private color: string){
        this.initialX = x;
        this.initialY = y;
    }

    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x * boxMeasure, this.y * boxMeasure, boxMeasure, boxMeasure);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    move(number: number){
        this.x += number;
        this.initialX += number;

    }

    gravity(){
        this.y += 1;
        this.initialY += 1;
    }

    colitionChecker(index: number = 9999){
        let returnValue = false;

        if (this.y === rows - 1){
            returnValue =  true;
        }

        variantArray.forEach((variant, indexofVariant)=>{
            if (index !== indexofVariant) {
                variant.forEach((element) => {
                    if (this.y + 1 === element.y && this.x === element.x) returnValue = true
                })
            }
        })
        
        return returnValue;
    }
}




const rotateLogic = (cubesArray: cube[], radians: number) => {
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
            radians += radiansFactor;
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

const gameLoopLogic = () => {
    frame += 1;
    ctx.clearRect(0,0,width, height);

    let variantToWork = variantArray.pop()!;

    let isColitioned: boolean = false;

    variantToWork.forEach((variant)=>{
        if (!isColitioned) {
            isColitioned = variant.colitionChecker();
        }
    });

    

    if (!isColitioned && frame % interval === 0) {
        variantToWork.forEach((variant)=>{
            variant.gravity();
        });
        lineChecker();
    }
    
    if (frame % 10 === 0) {
        variantArray.forEach((variant, index) => {
            let haveColition: boolean = false;
            variant.forEach((element) => {
                if (!haveColition) haveColition = element.colitionChecker(index);
            })

            if (!haveColition) {
                variant.forEach((element) => {
                    element.gravity();
                })
            }
        })
    }
    
    variantArray.push(variantToWork);
    
    variantArray.forEach((variant) => {
        variant.forEach((element) => { 
            element.draw();
        })
    })

    if (isColitioned) {
        let isInTop = false
        variantToWork.forEach((element) => {
            if (element.y === 0) isInTop = true;
        })
        if (isInTop) gameOverLogic();
    }

    if (isColitioned) createVariant();
}

const lineChecker = () => {
    let yArray: number[] = [];
    for (let i = rows - 1; i >= 0; i--){
        variantArray.forEach((variant, variantIndex) => {
            variant.forEach((element) => {
                if (element.y === i) yArray.push(variantIndex)
            })
        })
        
        if (yArray.length === columns) {

            yArray = yArray.filter((value, index, array) => {
                return array.indexOf(value) === index;
            });
            
            yArray.sort((a, b) => a - b)

            for (let i = 0; i < yArray.length; i++) {
                let removeValue = yArray[i] - i;
                variantArray.splice(removeValue, 1);
            }
        }

        yArray = []
    }
}

const moveLogic = (value: number | string) => {
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

const gameOverLogic = () => {
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

const eventListener = () => {
    window.addEventListener('keydown', (key) => {
        if (!isKeyDown) {

            isKeyDown = true;

            if (isGameOver) {
                isGameOver = false;
                interval = 40;
                variantArray = []
                main()
                
            }

            let keyPressed = key.key;

            switch(keyPressed) {
                case 'ArrowLeft':
                    moveLogic(-1);
                    break;
                case 'ArrowRight':
                    moveLogic(1);
                    break;
                case 'ArrowDown':
                    moveLogic('downKeyDown');
                    break;
                case 'ArrowUp':
                    moveLogic('up')
                    break;
            };
        };
    });

    window.addEventListener('keyup', (key) => {
        let keyPressed = key.key;

        if (keyPressed === 'ArrowDown') {
            moveLogic('upKeyDown');
        }

        isKeyDown = false;
    })
}

const main = () => {
    createVariant();
    if (!isGameOver) eventListener()
    gameLoop = setInterval(gameLoopLogic, 10);
}

main();