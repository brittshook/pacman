import animate from "./modules/animate.js";
import { createMap } from './modules/render.js';
import map from "./modules/map.js";

createMap(map);
requestAnimationFrame(animate);