import { context } from './canvasSetup.js';
import Wall from './wall.js';

export default class Pac {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = Math.floor(Wall.height / 2);
    }

    draw() {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'yellow';
        context.fill();
        context.closePath();
    }

    render() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}