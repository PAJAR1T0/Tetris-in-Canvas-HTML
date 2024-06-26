import { ctx, variantArray, width, height, interval, lineChecker, gameOverLogic, createVariant, updatePoints, 
         drawActualPoints, pointsPerIteration, pointsPerColition, newPieceAudio, 
         inWaitAudio} from './index';

export let frame = 0;

export const frameLogic = () => {
    if (!inWaitAudio.paused) {
        inWaitAudio.pause()
        inWaitAudio.currentTime = 0;
    } 
    
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
        updatePoints(pointsPerIteration)
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

    drawActualPoints();

    if (isColitioned) {
        variantToWork.forEach((element) => {
            if (element.y === 0) return gameOverLogic();
            
        })
        updatePoints(pointsPerColition)
        createVariant();
        newPieceAudio.play()
    }
}