import { canvas, context } from './canvasSetup.js';
import { detectCollision } from './collision.js';
import { movePac } from './movement.js';
import { renderMap, renderPellets } from './render.js';
import { pac } from './players.js';

const { width, height } = canvas;

export default function animate() {
    // Clear canvas
    context.clearRect(0, 0, width, height); 

    // Update game logic
    movePac();
    detectCollision();

    // Render game elements
    renderMap();
    pac.render();
    renderPellets();

    requestAnimationFrame(animate);
}