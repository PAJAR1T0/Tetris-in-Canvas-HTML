import { isGameOver, moveLogic, main, resetGameOver, resetInterval, resetVariantArray, resetPoints } from "./index";

let isKeyDown: boolean = false;
let up: string[] = ['ArrowUp', 'w']
let down: string[] = ['ArrowDown', 's', 'Space']
let left: string[] = ['ArrowLeft', 'a']
let right: string[] = ['ArrowRight', 'd']


export const eventListener = () => {
    window.addEventListener('keydown', (key) => {
        if (!isKeyDown) {

            isKeyDown = true;

            if (isGameOver) {
                resetGameOver();
                resetInterval();
                resetVariantArray()
                resetPoints()
                main()
                return;
            }

            let keyPressed = key.key;

            (up.find((value) => value === keyPressed)) ? moveLogic('up') : 
            (down.find((value) => value === keyPressed)) ? moveLogic('downKeyDown') : 
            (left.find((value) => value === keyPressed)) ? moveLogic(-1) : 
            (right.find((value) => value === keyPressed)) ? moveLogic(1) : false;
        };
    });

    window.addEventListener('keyup', (key) => {
        let keyPressed = key.key;

        if (down.find((value) => value === keyPressed)) {
            moveLogic('upKeyDown');
        }

        isKeyDown = false;
    })
}