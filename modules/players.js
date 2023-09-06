import Pac from './pac.js';
import Wall from './wall.js';

const pac = new Pac({
    position: {
        x: 1.5 * Wall.width,
        y: 1.5 * Wall.height
    }, 
    velocity: {
        x: 0,
        y: 0
    }
});

export { pac };