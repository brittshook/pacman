import { keys, lastKey } from './input.js';
import { collision } from './collision.js';
import { pac } from './players.js';
import { walls } from './render.js';

const stopX = () => pac.velocity.x = 0;
const stopY = () => pac.velocity.y = 0;

function movePac() {
    if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        for (const wall of walls) {
            if (collision({
            player: {
                ...pac,
                velocity: {
                    x: 0,
                    y: -5
                }
            }, 
            object: wall
        })) {
                stopY();
                break;
            } else {
                pac.velocity.y = -5;
            }
        }
    } else if (keys.ArrowDown.pressed && lastKey === 'ArrowDown') {
        for (const wall of walls) {
            if (collision({
            player: {
                ...pac,
                velocity: {
                    x: 0,
                    y: 5
                }
            }, 
            object: wall
        })) {
                stopY();
                break;
            } else {
                pac.velocity.y = 5;
            }
        }
    } else if (keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
        for (const wall of walls) {
            if (collision({
            player: {
                ...pac,
                velocity: {
                    x: -5,
                    y: 0
                }
            }, 
            object: wall
        })) {
                stopX();
                break;
            } else {
                pac.velocity.x = -5;
            }
        }
    } else if (keys.ArrowRight.pressed && lastKey === 'ArrowRight') {
        for (const wall of walls) {
            if (collision({
            player: {
                ...pac,
                velocity: {
                    x: 5,
                    y: 0
                }
            }, 
            object: wall
        })) {
                stopX();
                break;
            } else {
                pac.velocity.x = 5;
            }
        }
    }
}

export { stopX, stopY, movePac };