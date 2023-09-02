const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// Set up map + wall boundaries
const map = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', '-', '-', ' ', ' ', '-', '-', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', '-', '-', ' ', ' ', '-', '-', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
];

class Wall {
    static width = 20;
    static height = 20;
    constructor({ position }) {
        this.position = position;
        this.width = Wall.width;
        this.height = Wall.height;
        // this.image = image;
    }

    draw() {
        context.fillStyle = '#0004ff';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
        // context.drawImage(this.image, this.position.x, this.position.y);
    }
}

const walls = [];

function renderWalls(map) {
    map.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === '-') {
                const position = {
                    x: Wall.width * x,
                    y: Wall.height * y
                };
                walls.push(new Wall({ position }));
            }
        });
    });

    walls.forEach(wall => wall.draw());
}

// Create pac
class Pac {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
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
console.log(Wall.height);
const pac = new Pac({
    position: {
        x: 2 * Wall.width,
        y: 2 * Wall.height
    }, 
    velocity: {
        x: 0,
        y: 0
    }
});

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

    return pacTop + velocityY <= wallBottom && pacBottom + velocityY >= wallTop && pacLeft + velocityX <= wallRight && pacRight + velocityX >= wallLeft;
}

const stopY = () => pac.velocity.y = 0;
const stopX = () => pac.velocity.x = 0;

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

// Put it all together... and wa la 
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas in between frames
    movePac();
    renderWalls(map);
    detectCollision();
    pac.render();
}

animate();