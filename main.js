import animate from "./modules/animate.js";

/* canvasSetup.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.imageSmoothingEnabled = true;

canvas.width = innerWidth;
canvas.height = innerHeight;*/

/* map.js
const map = [
    ['1', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '^1', '^2', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '2'],
    ['||', ' ', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['||', 'r', '-1', '-', '-', '-2', 'r', '-1', '-', '-', '-', '-2', 'r', '|', '|', 'r', '-1', '-', '-', '-', '-2', 'r', '-1', '-', '-', '-2', 'r', '||'],
    ['||', 'r', '|', ' ', ' ', '|', 'r', '|', ' ', ' ', ' ', '|', 'r', '|', '|', 'r', '|', ' ', ' ', ' ', '|', 'r', '|', ' ', ' ', '|', 'r', '||'],
    ['||', 'r', '-4', '-', '-', '-3', 'r', '-4', '-', '-', '-', '-3', 'r', '-4', '-3', 'r', '-4', '-', '-', '-', '-3', 'r', '-4', '-', '-', '-3', 'r', '||'],
    ['||', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['||', 'r', '-1', '-', '-', '-2', 'r', '-1', '-2', 'r', '-1', '-', '-', '-', '-', '-', '-', '-2', 'r', '-1', '-2', 'r', '-1', '-', '-', '-2', 'r', '||'],
    ['||', 'r', '-4', '-', '-', '-3', 'r', '|', '|', 'r', '-4', '-', '-', '-2', '-1', '-', '-', '-3', 'r', '|', '|', 'r', '-4', '-', '-', '-3', 'r', '||'],
    ['||', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['4', '=', '=', '=', '=', '2', 'r', '|', '-4', '-', '-', '-2', 'r', '|', '|', 'r', '-1', '-', '-', '-3', '|', 'r', '1', '=', '=', '=', '=', '3'],
    [' ', ' ', ' ', ' ', ' ', '||', 'r', '|', '-1', '-', '-', '-3', 'r', '-4', '-3', 'r', '-4', '-', '-', '-2', '|', 'r', '||', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '||', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', '||', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '||', 'r', '|', '|', 'r', '1', '=', ']', '-', '-', '[', '=', '2', 'r', '|', '|', 'r', '||', ' ', ' ', ' ', ' ', ' '],
    ['=', '=', '=', '=', '=', '3', 'r', '-4', '-3', 'r', '||', ' ', ' ', ' ', ' ', ' ', ' ', '||', 'r', '-4', '-3', 'r', '4', '=', '=', '=', '=', '='],
    ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||', ' ', ' ', ' ', ' ', ' ', ' ', '||', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
    ['=', '=', '=', '=', '=', '2', 'r', '-1', '-2', 'r', '4', '=', '=', '=', '=', '=', '=', '3', 'r', '-1', '-2', 'r', '1', '=', '=', '=', '=', '='],
    [' ', ' ', ' ', ' ', ' ', '||', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', '||', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '||', 'r', '|', '|', 'r', '-1', '-', '-', '-', '-', '-', '-', '-2', 'r', '|', '|', 'r', '||', ' ', ' ', ' ', ' ', ' '],
    ['1', '=', '=', '=', '=', '3', 'r', '-4', '-3', 'r', '-4', '-', '-', '-2', '-1', '-', '-', '-3', 'r', '-4', '-3', 'r', '4', '=', '=', '=', '=', '2'],
    ['||', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['||', 'r', '-1', '-', '-', '-2', 'r', '-1', '-', '-', '-', '-2', 'r', '|', '|', 'r', '-1', '-', '-', '-', '-2', 'r', '-1', '-', '-', '-2', 'r', '||'],
    ['||', 'r', '-4', '-', '-2', '|', 'r', '-4', '-', '-', '-', '-3', 'r', '-4', '-3', 'r', '-4', '-', '-', '-', '-3', 'r', '|', '-1', '-', '-3', 'r', '||'],
    ['||', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', '||'],
    ['<1', '-', '-2', 'r', '|', '|', 'r', '-1', '-2', 'r', '-1', '-', '-', '-', '-', '-', '-', '-2', 'r', '-1', '-2', 'r', '|', '|', 'r', '-1', '-', '>1'],
    ['<2', '-', '-3', 'r', '-4', '-3', 'r', '|', '|', 'r', '-4', '-', '-', '-2', '-1', '-', '-', '-3', 'r', '|', '|', 'r', '-4', '-3', 'r', '-4', '-', '>2'],
    ['||', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['||', 'r', '-1', '-', '-', '-', '-', '-3', '-4', '-', '-', '-2', 'r', '|', '|', 'r', '-1', '-', '-', '-3', '-4', '-', '-', '-', '-', '-2', 'r', '||'],
    ['||', 'r', '-4', '-', '-', '-', '-', '-', '-', '-', '-', '-3', 'r', '|', '|', 'r', '-4', '-', '-', '-', '-', '-', '-', '-', '-', '-3', 'r', '||'],
    ['||', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['4', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', 'V1', 'V2', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '3']
]; */

/* mapFunctions.js
const numRows = map.length;
const rowHeightInVH = 1 / numRows;
let wallHeight = Math.floor(rowHeightInVH * window.innerHeight);

if (wallHeight < 20) {
    wallHeight = 20;
} else if (wallHeight > 50) {
    wallHeight = 50;
}

let wallWidth = wallHeight;*/

/* wall.js
class Wall {
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
} */

/* pellet.js
 class Pellet {
    static width = Math.ceil(Wall.width / 2);
    static height = Math.ceil(this.width / 2);
    constructor({ position }) {
        this.position = position;
        this.image = new Image();
        this.image.src = './img/svg/rainbow-pellet.svg';
        this.width = Pellet.width;
        this.height =  Pellet.height
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
} */

/* render.js
const walls = [];
const pellets = [];

function renderMap(map) {

    walls.length = 0;
    pellets.length = 0;
    
    map.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol !== ' ' && symbol !== 'r') {
                const position = {
                    x: Wall.width * x,
                    y: Wall.height * y
                };

                walls.push(new Wall({ position, symbol }));
            } else if (symbol === 'r') {
                const position = {
                    x: Wall.width * x + (Pellet.width / 2),
                    y: Wall.height * y + (Pellet.height * 1.25)
                };

                pellets.push(new Pellet({ position }));
            }
        });
    });

    walls.forEach(wall => wall.draw());
    pellets.forEach(pellet => pellet.draw());
} */

/* pac.js
class Pac {
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
*/
/* players.js
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
*/


/* input.js

let lastKey = '';

const keys = {
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }, 
    ArrowRight: {
        pressed: false
    }
}

addEventListener('keydown', ({key}) => {
    if (key in keys) {
        keys[key]['pressed'] = true;
        lastKey = key;
    }
});

addEventListener('keyup', ({ key }) => {
    if (key in keys) {
        keys[key]['pressed'] = false;
    }
});
*/

/* collision.js

// Detect wall or pellet collisions 
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
*/
/* movement.js
const stopY = () => pac.velocity.y = 0;
const stopX = () => pac.velocity.x = 0; 

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
*/

/*  collision.js 
function detectCollision() {
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];

        if (collision({ player: pac, object: wall })) {
            stopY();
            stopX();
            break;
        };
    }

    const consumedPellets = [];

    for (let i = 0; i < pellets.length; i++) {
        const pellet = pellets[i];

        if (collision({ player: pac, object: pellet })) {
            consumedPellets.push(pellet);
        }
    }

    // Remove consumed pellets
    consumedPellets.forEach(consumedPellet => {
        const { x, y } = consumedPellet.position;
        const rowIndex = Math.floor(y / Wall.height);
        const colIndex = Math.floor(x / Wall.width);

        // Remove the pellet from the map
        map[rowIndex][colIndex] = ' ';

        // Remove the pellet from the pellets array
        pellets.splice(pellets.indexOf(consumedPellet), 1);
    });
}*/

/* animate.js
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas in between frames
    movePac();
    renderMap(map);
    detectCollision();
    pac.render();
} */

animate();