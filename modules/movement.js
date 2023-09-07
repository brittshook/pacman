import { keys, lastKey } from './input.js';
import { collision } from './collision.js';
import { pac } from './players.js';
import { walls } from './render.js';

// Stop movement functions
const stopX = () => pac.velocity.x = 0;
const stopY = () => pac.velocity.y = 0;

function movePac() {
    // Map keys to velocity changes
    const velocityMapping = {
        ArrowUp: { x: 0, y: -5 },
        ArrowDown: { x: 0, y: 5 },
        ArrowLeft: { x: -5, y: 0 },
        ArrowRight: { x: 5, y: 0 }
    };

    const direction = keys[lastKey]?.pressed ? lastKey : null;
    
    if (direction && velocityMapping[direction]) {
        const { x, y } = velocityMapping[direction];

        for (const wall of walls) {
            if (collision({
                player: {
                    ...pac,
                    velocity: { x, y }
                },
                object: wall
            })) {
                if (x !== 0) {
                    console.log('Going to collide along X');
                    console.log('My x position is' + pac.position.x);
                    stopX();
                }
                if (y !== 0) {
                    console.log('Going to collide along Y');
                    console.log('My y position is' + pac.position.y);
                    stopY();
                }
                break;
            } else {
                if (x !== 0) pac.velocity.x = x;
                if (y !== 0) pac.velocity.y = y;
            }
        }
    }
}

export { stopX, stopY, movePac };