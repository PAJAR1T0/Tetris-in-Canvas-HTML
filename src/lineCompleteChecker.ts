import { variantArray, columns, rows } from "./index";

export const lineChecker = () => {
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