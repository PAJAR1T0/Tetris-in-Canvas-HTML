export { loadAudios, cantRotateAudio, clearLineAudio, gameOverAudio, mainAudiosArray, newPieceAudio, newRecordAudio, nextLevelAudio, inWaitAudio } from './soundLogic';
export { main, loadGame, ctx, gameLoop, audioChoose } from './loadGame';
export { createCanvas, rows, columns, width, height, boxMeasure } from './createCanvas';
export { eventListener } from './eventListeners';
export { gameOverLogic, resetGameOver, isGameOver } from './gameOver';
export { moveLogic, resetInterval, interval, level } from './moveLogic';
export { lineChecker } from './lineCompleteChecker';
export { frameLogic, frame } from './frameLogic';
export { rotateLogic, resetRadians } from './rotateLogic';
export { cube } from './cubeClass';
export { createVariant, resetVariantArray, variantArray } from './createVariant';
export { updatePoints, resetPoints, drawActualPoints, loadHistoricalpoints, pointsPerColition, pointsPerIteration, pointsPerLine, points } from './pointslogic';

