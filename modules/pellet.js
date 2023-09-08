import { context } from './canvasSetup.js';
import { deg180 } from './math.js';
import Wall from './wall.js';
//import { redPath, orangePath, yellowPath, greenPath, cyanPath, bluePath, continuousPath, segmentedPath } from './pelletHelperFunctions.js';

export default class Pellet {
    static width = Math.ceil(Wall.width / 1.25);
    static height = Math.ceil(this.width / 2);
    constructor({ position }) {
        this.position = position;
        //this.image = new Image();
        //this.image.src = '../img/svg/rainbow-pellet.svg';
        this.width = Pellet.width;
        this.height =  Pellet.height
    }

    draw() {
        const scaleFactor = Pellet.width / 16;
        const centerX = (5 * scaleFactor) + this.position.x;
        const centerY = (5 * scaleFactor) + this.position.y;
        const outerRadius = 5 * scaleFactor;
        const innerRadius = 3 * scaleFactor;

        // Outer arc
        context.beginPath();
        context.arc(centerX, centerY, outerRadius, deg180, 0);
        context.strokeStyle = '#F96359';
        context.lineWidth = 2 * scaleFactor;
        context.stroke();
        context.closePath();

        // Inner arc
        context.beginPath();
        context.arc(centerX, centerY, innerRadius, deg180, 0);
        context.strokeStyle = '#F9E759';
        context.lineWidth = 2 * scaleFactor;
        context.stroke();
        context.closePath();
    }
}
