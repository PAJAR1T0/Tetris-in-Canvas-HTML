import { ctx, variantArray, rows, boxMeasure } from "./index";

export class cube {
    xWithoutRotation: number;
    yWithoutRotation: number;

    constructor(public x: number, public y: number, private color: string){
        this.xWithoutRotation = x;
        this.yWithoutRotation = y;
    }

    draw(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'gray'
        ctx.rect(this.x * boxMeasure, this.y * boxMeasure, boxMeasure, boxMeasure);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    move(number: number){
        this.x += number;
        this.xWithoutRotation += number;

    }

    gravity(){
        this.y += 1;
        this.yWithoutRotation += 1;
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