import { context } from './canvasSetup.js';
import { deg90, deg180, deg270 } from './math.js';
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
        

        // Start drawing the first arc
        context.beginPath();
        context.arc(centerX, centerY, outerRadius, deg180, 0);
        context.strokeStyle = '#F96359';
        context.lineWidth = 2 * scaleFactor;
        context.stroke();
        context.closePath();


        // Start drawing the second arc
        context.beginPath();
        context.arc(centerX, centerY, innerRadius, deg180, 0);
        context.strokeStyle = '#F9E759';
        context.lineWidth = 2 * scaleFactor;
        context.stroke();
        context.closePath();

        /*continuousPath(this.position, redPath, '#DC3834', scaleFactor);
        segmentedPath(this.position, orangePath, '#EE963E', scaleFactor);
        segmentedPath(this.position, yellowPath, '#F9E759', scaleFactor);
        continuousPath(this.position, greenPath, '#60B157', scaleFactor);
        segmentedPath(this.position, cyanPath, '#72F9FC', scaleFactor);
        continuousPath(this.position, bluePath, '#4A99D3', scaleFactor);*/
    }
}
