import { canvas, context } from './canvasSetup.js';
import { detectCollision } from './collision.js';
import { movePac } from './movement.js';
import { renderMap } from './render.js';
import { pac } from './players.js';
import map from './map.js';

export default function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas in between frames
    movePac();
    renderMap(map);
    detectCollision();
    pac.render();
}
