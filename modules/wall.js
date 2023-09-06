import { wallWidth, wallHeight } from './mapFunctions.js';
import { symbolToDrawFunction } from './drawFunctions.js';

export default class Wall {
    static width = wallWidth;
    static height = wallHeight;
    constructor({ position, symbol }) {
        this.position = position;
        this.width = Wall.width;
        this.height = Wall.height;
        this.symbol = symbol;
        this.drawFunction = symbolToDrawFunction[symbol];
    }

    draw() {
        this.drawFunction(this.position, this.width, this.height);
    }
}