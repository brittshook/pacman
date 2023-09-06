import Wall from './wall.js';
import Pellet from './pellet.js';

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
}

export { walls , pellets , renderMap };