import { context } from "./canvasSetup.js";
import { setDrawingStyles } from './drawFunctions.js';

// Line path coordinates
const redPath = [
    [0.5, 8],
    [0.5, 5.5],
    [1.5, 5.5],
    [1.5, 3.5],
    [2.5, 3.5],
    [2.5, 2.5],
    [3.5, 2.5],
    [3.5, 1.5],
    [4.5, 1.5],
    [4.5, 0.5],
    [11.5, 0.5],
    [11.5, 1.5],
    [12.5, 1.5],
    [12.5, 2.5],
    [13.5, 2.5],
    [13.5, 3.5],
    [14.5, 3.5],
    [14.5, 5.5],
    [15.5, 5.5],
    [15.5, 8]
];

const orangePath = [
    [1.5, 8],
    [1.5, 6],
    [2, 4.5],
    [3, 4.5],
    [3, 3.5],
    [4, 3.5],
    [4, 2.5],
    [5, 2.5],
    [5, 1.5],
    [11, 1.5],
    [11, 2.5],
    [12, 2.5],
    [12, 3.5],
    [13, 3.5],
    [13, 4.5],
    [14, 4.5],
    [14.5, 6],
    [14.5, 8],
];

const yellowPath = [
    [2.5, 8],
    [2.5, 5],
    [3, 4.5],
    [4, 4.5],
    [4, 3.5],
    [5, 3.5],
    [5, 2.5],
    [11, 2.5],
    [11, 3.5],
    [12, 3.5],
    [12, 4.5],
    [13, 4.5],
    [13.5, 5],
    [13.5, 8]
];

const greenPath = [
    [3.5, 8],
    [3.5, 5.5],
    [4.5, 5.5],
    [4.5, 4.5],
    [5.5, 4.5],
    [5.5, 3.5],
    [10.5, 3.5],
    [10.5, 4.5],
    [11.5, 4.5],
    [11.5, 5.5],
    [12.5, 5.5],
    [12.5, 8]
];

const cyanPath = [
    [4.5, 8],
    [4.5, 6],
    [5, 5.5],
    [6, 5.5],
    [6, 4.5],
    [10, 4.5],
    [10, 5.5],
    [11, 5.5],
    [11.5, 6],
    [11.5, 8],
];

const bluePath = [
    [6, 5.5],
    [10, 5.5]
];

// Scale coordinates 
const scalePath = (coordinates, scaleFactor) =>{
    return coordinates.map(([x, y]) => [x * scaleFactor, y * scaleFactor]);
};

// Draw functions
function continuousPath(position, coordinates, color, scaleFactor) {
    context.beginPath();

    const scaledPath = scalePath(coordinates, scaleFactor);

    for (let i = 0; i < coordinates.length; i++) {
        if (i === 0) {
            const [moveToX, moveToY] = scaledPath[0];
            context.moveTo(moveToX + position.x, moveToY + position.y);
        } else {
            const [x, y] = scaledPath[i];
            context.lineTo(x + position.x, y + position.y);
        }
    }
    
    setDrawingStyles('thin line', color, scaleFactor);
    context.stroke();
    context.closePath();
}

function segmentedPath(position, coordinates, color, scaleFactor) {
    context.beginPath();

    const scaledPath = scalePath(coordinates, scaleFactor);

    for (let i = 0; i < coordinates.length; i += 2) {
        const [moveToX, moveToY] = scaledPath[i];
        context.moveTo(moveToX + position.x, moveToY + position.y);

        const [x, y] = scaledPath[i + 1];
        context.lineTo(x + position.x, y + position.y);
    }
    
    setDrawingStyles('thin line', color, scaleFactor);
    context.stroke();
    context.closePath();
}

export { redPath, orangePath, yellowPath, greenPath, cyanPath, bluePath, continuousPath, segmentedPath };