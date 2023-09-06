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

console.log(lastKey);

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

export { keys, lastKey };