const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.imageSmoothingEnabled = true;

canvas.width = innerWidth;
canvas.height = 0.9 * innerHeight;

export { canvas, context };