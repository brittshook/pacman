const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Set up map + wall boundaries
const map = [
    ['1', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '^1', '^2', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '=', '2'],
    ['||', ' ', ' ', ' ', ' ', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '|', '|', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', '||'],
    ['||', ' ', '-1', '-', '-', '-2', 'r', '-1', '-', '-', '-', '-2', 'r', '|', '|', 'r', '-1', '-', '-', '-', '-2', 'r', '-1', '-', '-', '-2', 'r', '||'],
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
];

const numRows = map.length;
const rowHeightInVH = 1 / numRows;
let wallHeight = (rowHeightInVH * window.innerHeight);

if (wallHeight < 20) {
    wallHeight = 20;
} else if (wallHeight > 50) {
    wallHeight = 50;
}

let wallWidth = wallHeight;

class Wall {
    static width = wallWidth;
    static height = wallHeight;
    constructor({ position, image }) {
        this.position = position;
        this.width = Wall.width;
        this.height = Wall.height;
        this.image = image;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, Wall.width, Wall.height);
    }
}

const walls = [];

function renderWalls(map) {
    map.forEach((row, y) => {
        row.forEach((symbol, x) => {
            const position = {
                x: Wall.width * x,
                y: Wall.height * y
            };
            const image = new Image();

            switch (symbol) {
                /*case 'r':
                    image.src = './img/svg/rainbow-pellet.svg';
                    break;*/ // disabling to resolve movement issue
                case '-':
                    image.src = './img/svg/single-horizontal.svg';
                    break;
                case '=':
                    image.src = './img/svg/double-horizontal.svg';
                    break;
                case '|':
                    image.src = './img/svg/single-vertical.svg';
                    break;
                case '||':
                    image.src = './img/svg/double-vertical.svg';
                    break;
                case '-1':
                    image.src = './img/svg/single-corner-TL.svg';
                    break;
                case '-2':
                    image.src = './img/svg/single-corner-TR.svg';
                    break;
                case '-3':
                    image.src = './img/svg/single-corner-BR.svg';
                    break;
                case '-4':
                    image.src = './img/svg/single-corner-BL.svg';
                    break;
                case '1':
                    image.src = './img/svg/double-corner-TL.svg';
                    break;
                case '2':
                    image.src = './img/svg/double-corner-TR.svg';
                    break;
                case '3':
                    image.src = './img/svg/double-corner-BR.svg';
                    break;
                case '4':
                    image.src = './img/svg/double-corner-BL.svg';
                    break;
                case ']':
                    image.src = './img/svg/double-cap-L.svg';
                    break;
                case '[':
                    image.src = './img/svg/double-cap-R.svg';
                    break;
                case '^1':
                    image.src = './img/svg/double-horizontal-combo-TL.svg';
                    break;
                case '^2':
                    image.src = './img/svg/double-horizontal-combo-TR.svg';
                    break;
                case 'V1':
                    image.src = './img/svg/double-horizontal-combo-BL.svg';
                    break;
                case 'V2':
                    image.src = './img/svg/double-horizontal-combo-BR.svg';
                    break;
                case '<1':
                    image.src = './img/svg/double-vertical-combo-TL.svg';
                    break;
                case '<2':
                    image.src = './img/svg/double-vertical-combo-BL.svg';
                    break;
                case '>1':
                    image.src = './img/svg/double-vertical-combo-TR.svg';
                    break;
                case '>2':
                    image.src = './img/svg/double-vertical-combo-BR.svg';
                    break;
                default:
                    return;
            }
            
            walls.push(new Wall({ position, image }));
        });
    });

    walls.forEach(wall => wall.draw());
}

// Create pac
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

/*console.log('Wall height is: ' + Wall.height);
console.log('Pac radius is: ' + pac.radius);
console.log('Pac height is: ' + (pac.radius * 2));
console.log('Pac X position is: ' + pac.position.x);
console.log('Pac Y position is: ' + pac.position.y);*/

// EVENT LISTENERS

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

// MOVEMENT FUNCTIONS - issue here

// Detect wall collisions 
function wallCollision({ player, object }) {
    const pacTop = player.position.y - player.radius;
    const pacBottom = player.position.y + player.radius;
    const pacLeft = player.position.x - player.radius;
    const pacRight = player.position.x + player.radius;

    const wallTop = object.position.y;
    const wallBottom = object.position.y + object.height;
    const wallLeft = object.position.x;
    const wallRight = object.position.x + object.width;

    const velocityX = player.velocity.x;
    const velocityY = player.velocity.y;

    /*console.log('Pac top position is: ' + pacTop);
    console.log('Wall bottom position is: ' + wallBottom);
    console.log('Pac bottom position is: ' + pacBottom);
    console.log('Wall top position is: ' + wallTop);
    console.log('Pac left position is: ' + pacLeft);
    console.log('Wall right position is: ' + wallRight);
    console.log('Pac right position is: ' + pacRight);
    console.log('Wall left position is: ' + wallLeft);
    console.log('Pac X velocity is: ' + velocityX);
    console.log('Pac Y velocity is: ' + velocityY);*/

    return pacTop + velocityY < wallBottom && pacBottom + velocityY > wallTop && pacLeft + velocityX < wallRight && pacRight + velocityX > wallLeft;
}

const stopY = () => pac.velocity.y = 0;
const stopX = () => pac.velocity.x = 0;

/*function movePac() {
    let velocityX = 0;
    let velocityY = 0;

    if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        velocityY = -5;
    } else if (keys.ArrowDown.pressed && lastKey === 'ArrowDown') {
        velocityY = 5;
    } else if (keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
        velocityX = -5;
    } else if (keys.ArrowRight.pressed && lastKey === 'ArrowRight') {
        velocityX = 5;
    }

    // Check collisions with walls
    for (const wall of walls) {
        if (wallCollision({
            player: {
                ...pac,
                velocity: {
                    x: velocityX,
                    y: velocityY
                }
            },
            object: wall
        })) {
            console.log('colliding');
            velocityX = 0;
            velocityY = 0;
            break;
        }
    }

    pac.velocity.x = velocityX;
    pac.velocity.y = velocityY;
}*/

function movePac() {
    if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        for (const wall of walls) {
            if (wallCollision({
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
            if (wallCollision({
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
            if (wallCollision({
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
            if (wallCollision({
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

function detectCollision() {
    for (const wall of walls) {
        if (wallCollision({ player: pac, object: wall })) {
            stopY();
            stopX();
            break;
        };
    }
}

// Put it all together
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas in between frames
    movePac();
    renderWalls(map);
    detectCollision();
    pac.render();
}

animate();