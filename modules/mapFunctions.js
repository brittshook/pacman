import map from './map.js';

const numRows = map.length;
const rowHeightInVH = 1 / numRows;
let wallHeight = Math.floor(rowHeightInVH * window.innerHeight);

if (wallHeight < 20) {
    wallHeight = 20;
} else if (wallHeight > 50) {
    wallHeight = 50;
}

let wallWidth = wallHeight;

export { wallWidth, wallHeight };