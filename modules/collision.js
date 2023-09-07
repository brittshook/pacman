import Wall from './wall.js';
import Pellet from './pellet.js';
import { walls , pellets } from './render.js';
import { pac } from './players.js';
import { stopX, stopY } from './movement.js';

// getting stuck at crossroads, collision or movement issue

function collision({ player, object }) {
    const pacTop = player.position.y - player.radius;
    const pacBottom = player.position.y + player.radius;
    const pacLeft = player.position.x - player.radius;
    const pacRight = player.position.x + player.radius;

    const objectTop = object.position.y;
    const objectBottom = object.position.y + object.height;
    const objectLeft = object.position.x;
    const objectRight = object.position.x + object.width;

    if (object instanceof Wall) {
        const velocityX = player.velocity.x;
        const velocityY = player.velocity.y;

        return pacTop + velocityY < objectBottom && pacBottom + velocityY > objectTop && pacLeft + velocityX < objectRight && pacRight + velocityX > objectLeft;
    } else if (object instanceof Pellet) {
        return pacTop <= objectBottom && pacBottom >= objectTop && pacLeft <= objectRight && pacRight >= objectLeft;
    }
}

function detectCollision() {
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];

        if (collision({
            player: pac, 
            object: wall 
        })) {
            console.log('we collided and are now stopped');
            console.log('My x coordinate ' + (pac.position.x) + ' My y coordinate ' + (pac.position.y));

            stopY();
            stopX();
            break;
        };
    }

    for (let i = 0; i < pellets.length; i++) {
        const pellet = pellets[i];

        if (collision({
            player: pac,
            object: pellet 
        })) {
            pellets.splice(i, 1);
        }
    }
}

export { collision, detectCollision, stopX, stopY };