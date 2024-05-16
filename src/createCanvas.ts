export const columns = 10
export const rows = columns * 2;
export const width = Math.max(window.innerWidth * .2, 350);
export const height = width * 2;
export const boxMeasure = width / columns;

export const createCanvas = () => {
    const app: HTMLElement = document.getElementById('app')!;

    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;


   


    canvas.width = width;
    canvas.height = height;

    app.appendChild(canvas);
    return ctx;
}