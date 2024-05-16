import { isGameOver, moveLogic, main, resetGameOver, resetInterval, resetVariantArray } from "./index";


let isKeyDown: boolean = false;

export const eventListener = () => {
    window.addEventListener('keydown', (key) => {
        if (!isKeyDown) {

            isKeyDown = true;

            if (isGameOver) {
                resetGameOver();
                resetInterval();
                resetVariantArray()
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