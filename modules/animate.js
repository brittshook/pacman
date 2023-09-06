import { canvas, context } from './canvasSetup.js';
import { detectCollision } from './collision.js';
import { movePac } from './movement.js';
import { renderMap, renderPellets } from './render.js';
import { pac } from './players.js';

export default function animate() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height); 

    // Update game logic
    detectCollision();
    movePac();

    // Render game elements
    pac.render();
    renderMap();
    renderPellets();

    requestAnimationFrame(animate);
}
