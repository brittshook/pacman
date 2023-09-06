import { context } from './canvasSetup.js';
import { wallWidth, wallHeight } from './mapFunctions.js';


export default class Wall {
    static width = wallWidth;
    static height = wallHeight;
    constructor({ position, symbol }) {
        this.position = position;
        this.width = Wall.width;
        this.height = Wall.height;
        this.symbol = symbol;
    }

    draw() {
        const x = this.position.x; // Starting x position (0)
        const y = this.position.y; // Starting y position (0)

        // Width variables
        const oneThirdWidth = x + this.width / 3;
        const halfWidth = x + this.width / 2;
        const twoThirdWidth = x + (2 * this.width) / 3;
        const fullWidth =  x + this.width;

        // Height variables
        const oneThirdHeight = y + this.height / 3;
        const halfHeight =  y + this.height / 2;
        const twoThirdHeight = y + (2 * this.height) / 3;
        const fullHeight = y + this.height;

        // Curve variables
        const cornerRadiusOneThird = this.height / 3;
        const cornerRadiusSixth = this.height / 6;
        const cornerRadiusHalf = this.height / 2;
        const cornerRadiusTwoThird = (2 * this.height) / 3;
        const deg90 = Math.PI / 2;
        const deg180 = Math.PI;
        const deg270 = Math.PI * 1.5;

        context.beginPath();
        
        switch (this.symbol) {
            case '-':
                // Draw a horizontal line
                context.moveTo(x, halfHeight);
                context.lineTo(fullWidth, halfHeight);
                break;
            case '=':
                // Draw a double horizontal line
                context.moveTo(x, oneThirdHeight);
                context.lineTo(fullWidth, oneThirdHeight);
                context.moveTo(x, twoThirdHeight);
                context.lineTo(fullWidth, twoThirdHeight);
                break;
            case '|':
                // Draw a vertical line
                context.moveTo(halfWidth, y);
                context.lineTo(halfWidth, fullHeight);
                break;
            case '||':
                // Draw a double vertical line
                context.moveTo(oneThirdWidth, y);
                context.lineTo(oneThirdWidth, fullHeight);
                context.moveTo(twoThirdWidth, y);
                context.lineTo(twoThirdWidth, fullHeight);
                break;
            case '-1':
                // Draw arc for TL corner
                context.arc(fullWidth, fullHeight, cornerRadiusHalf, deg180, deg270);
                break;
            case '-2':
                // Draw arc for TR corner
                context.arc(x, fullHeight, cornerRadiusHalf, deg270, 0);
                break;
            case '-3':
                // Draw arc for BR corner
                context.arc(x, y, cornerRadiusHalf, 0, deg90);
                break;
            case '-4':
                // Draw arc for BL corner
                context.arc(fullWidth, y, cornerRadiusHalf, deg90, deg180);
                break;
            case '1':
                // Draw the outer arc for TL corner
                context.arc(oneThirdWidth + cornerRadiusTwoThird, fullHeight, cornerRadiusTwoThird, deg180, deg270);

                // Draw the inner arc for TL corner
                context.moveTo(twoThirdWidth, fullHeight);
                context.arc(twoThirdWidth + cornerRadiusOneThird, fullHeight, cornerRadiusOneThird, deg180, deg270);
                break;
            case '2':
                // Draw the outer arc for TR corner
                context.arc(twoThirdWidth - cornerRadiusTwoThird, fullHeight, cornerRadiusTwoThird, deg270, 0);

                // Draw the inner arc for TR corner
                context.moveTo(oneThirdWidth, fullHeight);
                context.arc(oneThirdWidth - cornerRadiusOneThird, fullHeight, cornerRadiusOneThird, 0, deg270, true);
                break;
            case '3':
                // Draw the outer arc for BR corner
                context.arc(twoThirdWidth - cornerRadiusTwoThird, y, cornerRadiusTwoThird, 0, deg90);

                // Draw the inner arc for BR corner
                context.moveTo(oneThirdWidth, y);
                context.arc(oneThirdWidth - cornerRadiusOneThird, y, cornerRadiusOneThird, 0, deg90);
                break;
            case '4':
                // Draw the outer arc for BL corner
                context.arc(oneThirdWidth + cornerRadiusTwoThird, y, cornerRadiusTwoThird, deg90, deg180);

                // Draw the inner arc for BL corner
                context.moveTo(twoThirdWidth, y);
                context.arc(twoThirdWidth + cornerRadiusOneThird, y, cornerRadiusOneThird, deg180, deg90, true);
                break;
            case ']':
                // Draw the top horizontal line
                context.moveTo(x, oneThirdHeight);
                context.lineTo(fullWidth - cornerRadiusSixth, oneThirdHeight);

                // Draw the curve
                context.quadraticCurveTo(fullWidth, oneThirdHeight, fullWidth, halfHeight);
                context.quadraticCurveTo(fullWidth, twoThirdHeight, fullWidth - cornerRadiusSixth, twoThirdHeight);

                // Draw the bottom horizontal line
                context.lineTo(x, twoThirdHeight);
                break;
            case '[':
                // Draw the top horizontal line
                context.moveTo(fullWidth, oneThirdHeight);
                context.lineTo(x + cornerRadiusSixth, oneThirdHeight);

                // Draw the curve (mirrored version)
                context.quadraticCurveTo(x, oneThirdHeight, x, halfHeight);
                context.quadraticCurveTo(x, twoThirdHeight, x + cornerRadiusSixth, twoThirdHeight);

                // Draw the bottom horizontal line
                context.lineTo(fullWidth, twoThirdHeight);
                break;
            case '^1':
                // Draw the top horizontal line
                context.moveTo(x, oneThirdHeight);
                context.lineTo(fullWidth, oneThirdHeight);

                // Draw the bottom arc (left)
                context.moveTo(x, twoThirdHeight);
                context.arc(x, twoThirdHeight + cornerRadiusHalf , cornerRadiusHalf, deg270, 0);
                break;
            case '^2':
                // Draw the top horizontal line
                context.moveTo(x, oneThirdHeight);
                context.lineTo(fullWidth, oneThirdHeight);

                // Draw the bottom arc (right)
                context.moveTo(fullWidth, twoThirdHeight);
                context.arc(fullWidth, twoThirdHeight + cornerRadiusHalf , cornerRadiusHalf, deg270, deg180, true);
                break;
           case 'V1':
                // Draw the bottom horizontal line
                context.moveTo(x, twoThirdHeight);
                context.lineTo(fullWidth, twoThirdHeight);

                // Draw the top arc (left)
                context.moveTo(x, oneThirdHeight);
                context.arc(x, oneThirdHeight - cornerRadiusHalf , cornerRadiusHalf, deg90, 0, true);
                break;
            case 'V2':
                // Draw the bottom horizontal line
                context.moveTo(x, twoThirdHeight);
                context.lineTo(fullWidth, twoThirdHeight);

                // Draw the top arc (right)
                context.moveTo(fullWidth, oneThirdHeight);
                context.arc(fullWidth, oneThirdHeight - cornerRadiusHalf , cornerRadiusHalf, deg90, deg180);
                break;
            case '<1':
                // Draw the left vertical line
                context.moveTo(oneThirdWidth, y);
                context.lineTo(oneThirdWidth, fullHeight);

                // Draw the right arc (top)
                context.moveTo(twoThirdWidth, y);
                context.arc(twoThirdWidth + cornerRadiusHalf, y, cornerRadiusHalf, deg180, deg90, true);
                break;
            case '<2':
                // Draw the left vertical line
                context.moveTo(oneThirdWidth, y);
                context.lineTo(oneThirdWidth, fullHeight);

                // Draw the right arc (bottom)
                context.moveTo(twoThirdWidth, fullHeight);
                context.arc(twoThirdWidth + cornerRadiusHalf, fullHeight, cornerRadiusHalf, deg180, deg270);
                break;
            case '>1':
                // Draw the right vertical line
                context.moveTo(twoThirdWidth, y);
                context.lineTo(twoThirdWidth, fullHeight);

                // Draw the left arc (top)
                context.moveTo(oneThirdWidth, y);
                context.arc(oneThirdWidth - cornerRadiusHalf, y, cornerRadiusHalf, 0, deg90);
                break;
            case '>2':
                // Draw the right vertical line
                context.moveTo(twoThirdWidth, y);
                context.lineTo(twoThirdWidth, fullHeight);

                // Draw the left arc (bottom)
                context.moveTo(oneThirdWidth, fullHeight);
                context.arc(oneThirdWidth - cornerRadiusHalf, fullHeight, cornerRadiusHalf, 0, deg270, true);
                break;
            default:
                return;
        }

        context.strokeStyle = '#9747FF'; 

        // Set line width
        if (this.symbol === '1' || this.symbol === '-1' || this.symbol === '2' || this.symbol === '-2' || this.symbol === '3' || this.symbol === '-3' || this.symbol === '4' || this.symbol === '-4') {
            context.lineWidth = 2.4; // Decrease thickness on corners
        } else {
            context.lineWidth = 2.5;
        }

        context.stroke();
        context.closePath();
    }
}