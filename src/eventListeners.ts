import { isGameOver, moveLogic, main, resetGameOver, resetInterval, resetVariantArray, resetPoints } from "./index";


let isKeyDown: boolean = false;

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
                
            }

            let keyPressed = key.key;

            if (keyPressed === 'ArrowLeft' || keyPressed === 'a') return moveLogic(-1);
            if (keyPressed === 'ArrowRight' || keyPressed === 'd') return moveLogic(1);
            if (keyPressed === 'ArrowUp' || keyPressed === 'w') return moveLogic('up');
            if (keyPressed === 'ArrowDown' || keyPressed === 's' || key.code === 'Space' ) return moveLogic('downKeyDown');
        };
    });

    window.addEventListener('keyup', (key) => {
        let keyPressed = key.key;

        if (keyPressed === 'ArrowDown' || keyPressed === 's' || key.code === 'Space' ) {
            moveLogic('upKeyDown');
        }

        isKeyDown = false;
    })
}