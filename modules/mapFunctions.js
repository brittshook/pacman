import { canvas  } from './canvasSetup.js'
import map from './map.js';

const numRows = map.length;
const rowHeightInVH = 1 / numRows; 

// Calculate the height of each row in pixels
let wallHeight = Math.floor(rowHeightInVH * canvas.height);

// Minimum height of 20
if (wallHeight < 20) {
    wallHeight = 20;
} else {
    // Round down to the nearest 5
    wallHeight = Math.floor(wallHeight / 5) * 5;
}

let wallWidth = wallHeight;

export { wallWidth, wallHeight };