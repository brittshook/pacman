import  { context } from './canvasSetup.js';
import Wall from './wall.js';

export default class Pellet {
    static width = Math.ceil(Wall.width / 1.75);
    static height = Math.ceil(this.width / 2);
    constructor({ position }) {
        this.position = position;
        this.image = new Image();
        this.image.src = '../img/svg/rainbow-pellet.svg';
        this.width = Pellet.width;
        this.height =  Pellet.height
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}
