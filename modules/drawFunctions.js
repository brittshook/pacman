import { context } from './canvasSetup.js';
import { deg90, deg180, deg270 } from './math.js';

// Drawing variables
function initializeDrawingParameters(position, width, height) {
    const x = position.x;
    const y = position.y;

    const oneThirdWidth = x + width / 3;
    const halfWidth = x + width / 2;
    const twoThirdWidth = x + (2 * width) / 3;
    const fullWidth = x + width;

    const oneThirdHeight = y + height / 3;
    const halfHeight = y + height / 2;
    const twoThirdHeight = y + (2 * height) / 3;
    const fullHeight = y + height;

    const cornerRadiusOneThird = height / 3;
    const cornerRadiusSixth = height / 6;
    const cornerRadiusHalf = height / 2;
    const cornerRadiusTwoThird = (2 * height) / 3;

  return { x, y, oneThirdWidth, halfWidth, twoThirdWidth, fullWidth, oneThirdHeight, halfHeight, twoThirdHeight, fullHeight, cornerRadiusOneThird, cornerRadiusSixth, cornerRadiusHalf, cornerRadiusTwoThird };
}

function setDrawingStyles(type = null, color = '#9747FF', scalingFactor = null) {
    // Line color
    context.strokeStyle = color; // Default color is purple for walls

    // Line width
    if (type === 'corner') {
        context.lineWidth = 2.4; // Decrease thickness on corners
    } else if (type === 'thin line') {
      context.lineWidth = 1 * scalingFactor; // For use on pellets
    } else {
        context.lineWidth = 2.5; // Default thickness for wall lines
    }
}

// Map symbols to draw functions
const symbolToDrawFunction = {
    '-': drawHorizontalLine,
    '=': drawDoubleHorizontalLine,
    '|': drawVerticalLine,
    '||': drawDoubleVerticalLine,
    '-1': drawSingleCornerTL,
    '-2': drawSingleCornerTR,
    '-3': drawSingleCornerBR,
    '-4': drawSingleCornerBL,
    '1': drawDoubleCornerTL,
    '2': drawDoubleCornerTR,
    '3': drawDoubleCornerBR,
    '4': drawDoubleCornerBL,
    ']': drawCapL,
    '[': drawCapR,
    '^1': drawComboHorizontalTL,
    '^2': drawComboHorizontalTR,
    'V1': drawComboHorizontalBL,
    'V2': drawComboHorizontalBR,
    '<1': drawComboVerticalTL,
    '<2': drawComboVerticalBL,
    '>1': drawComboVerticalTR,
    '>2': drawComboVerticalBR
};

// Draw functions
function drawHorizontalLine(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        halfHeight
      } = initializeDrawingParameters(position, width, height);
      
    context.moveTo(x, halfHeight);
    context.lineTo(fullWidth, halfHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawDoubleHorizontalLine(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        twoThirdHeight
    } = initializeDrawingParameters(position, width, height);
      
    // Top line
    context.moveTo(x, oneThirdHeight);
    context.lineTo(fullWidth, oneThirdHeight);

    // Bottom line
    context.moveTo(x, twoThirdHeight);
    context.lineTo(fullWidth, twoThirdHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawVerticalLine(position, width, height) {
    context.beginPath();

    const {
        y,
        halfWidth,
        fullHeight
      } = initializeDrawingParameters(position, width, height);

    context.moveTo(halfWidth, y);
    context.lineTo(halfWidth, fullHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawDoubleVerticalLine(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        fullHeight
      } = initializeDrawingParameters(position, width, height);

    // Left line
    context.moveTo(oneThirdWidth, y);
    context.lineTo(oneThirdWidth, fullHeight);

    // Right line
    context.moveTo(twoThirdWidth, y);
    context.lineTo(twoThirdWidth, fullHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawSingleCornerTL(position, width, height) {
    context.beginPath();

    const {
        fullWidth,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);

    context.arc(fullWidth, fullHeight, cornerRadiusHalf, deg180, deg270);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawSingleCornerTR(position, width, height) {
    context.beginPath();

    const {
        x,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);      
    
    context.arc(x, fullHeight, cornerRadiusHalf, deg270, 0);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawSingleCornerBR(position, width, height) {
    context.beginPath();

    const {
        x,
        y,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    context.arc(x, y, cornerRadiusHalf, 0, deg90);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawSingleCornerBL(position, width, height) {
    context.beginPath();

    const {
        y,
        fullWidth,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    context.arc(fullWidth, y, cornerRadiusHalf, deg90, deg180);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawDoubleCornerTL(position, width, height) {
    context.beginPath();

    const {
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusOneThird,
        cornerRadiusTwoThird
      } = initializeDrawingParameters(position, width, height);
      
    // Outer arc
    context.arc(oneThirdWidth + cornerRadiusTwoThird, fullHeight, cornerRadiusTwoThird, deg180, deg270);

    // Inner arc
    context.moveTo(twoThirdWidth, fullHeight);
    context.arc(twoThirdWidth + cornerRadiusOneThird, fullHeight, cornerRadiusOneThird, deg180, deg270);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawDoubleCornerTR(position, width, height) {
    context.beginPath();

    const {
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusOneThird,
        cornerRadiusTwoThird
      } = initializeDrawingParameters(position, width, height);
      
    // Outer arc
    context.arc(twoThirdWidth - cornerRadiusTwoThird, fullHeight, cornerRadiusTwoThird, deg270, 0);

    // Inner arc
    context.moveTo(oneThirdWidth, fullHeight);
    context.arc(oneThirdWidth - cornerRadiusOneThird, fullHeight, cornerRadiusOneThird, 0, deg270, true);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawDoubleCornerBR(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        cornerRadiusOneThird,
        cornerRadiusTwoThird
      } = initializeDrawingParameters(position, width, height);
      
    // Outer arc
    context.arc(twoThirdWidth - cornerRadiusTwoThird, y, cornerRadiusTwoThird, 0, deg90);

    // Inner arc
    context.moveTo(oneThirdWidth, y);
    context.arc(oneThirdWidth - cornerRadiusOneThird, y, cornerRadiusOneThird, 0, deg90);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawDoubleCornerBL(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        cornerRadiusOneThird,
        cornerRadiusTwoThird
      } = initializeDrawingParameters(position, width, height);
      
    // Outer arc
    context.arc(oneThirdWidth + cornerRadiusTwoThird, y, cornerRadiusTwoThird, deg90, deg180);
    
    // Inner arc
    context.moveTo(twoThirdWidth, y);
    context.arc(twoThirdWidth + cornerRadiusOneThird, y, cornerRadiusOneThird, deg180, deg90, true);

    setDrawingStyles('corner');
    context.stroke();
    context.closePath();
};

function drawCapL(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        halfHeight,
        twoThirdHeight,
        cornerRadiusSixth
      } = initializeDrawingParameters(position, width, height);
      
    // Top line
    context.moveTo(x, oneThirdHeight);
    context.lineTo(fullWidth - cornerRadiusSixth, oneThirdHeight);

    // Connecting curves
    context.quadraticCurveTo(fullWidth, oneThirdHeight, fullWidth, halfHeight);
    context.quadraticCurveTo(fullWidth, twoThirdHeight, fullWidth - cornerRadiusSixth, twoThirdHeight);

    // Bottom line
    context.lineTo(x, twoThirdHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawCapR(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        halfHeight,
        twoThirdHeight,
        cornerRadiusSixth
      } = initializeDrawingParameters(position, width, height);
      
    // Top line
    context.moveTo(fullWidth, oneThirdHeight);
    context.lineTo(x + cornerRadiusSixth, oneThirdHeight);

    // Connecting curves
    context.quadraticCurveTo(x, oneThirdHeight, x, halfHeight);
    context.quadraticCurveTo(x, twoThirdHeight, x + cornerRadiusSixth, twoThirdHeight);

    // Bottom Line
    context.lineTo(fullWidth, twoThirdHeight);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboHorizontalTL(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        twoThirdHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Top horizontal line
    context.moveTo(x, oneThirdHeight);
    context.lineTo(fullWidth, oneThirdHeight);

    // Bottom arc
    context.moveTo(x, twoThirdHeight);
    context.arc(x + 0.1, twoThirdHeight + cornerRadiusHalf , cornerRadiusHalf, deg270, 0);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboHorizontalTR(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        twoThirdHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Top horizontal line
    context.moveTo(x, oneThirdHeight);
    context.lineTo(fullWidth, oneThirdHeight);

    // Bottom arc
    context.moveTo(fullWidth, twoThirdHeight);
    context.arc(fullWidth - 0.1, twoThirdHeight + cornerRadiusHalf, cornerRadiusHalf, deg270, deg180, true);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboHorizontalBL(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        twoThirdHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Bottom horizontal line
    context.moveTo(x, twoThirdHeight);
    context.lineTo(fullWidth, twoThirdHeight);

    // Top arc
    context.moveTo(x, oneThirdHeight);
    context.arc(x + 0.1, oneThirdHeight - cornerRadiusHalf , cornerRadiusHalf, deg90, 0, true);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboHorizontalBR(position, width, height) {
    context.beginPath();

    const {
        x,
        fullWidth,
        oneThirdHeight,
        twoThirdHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Bottom horizontal line
    context.moveTo(x, twoThirdHeight);
    context.lineTo(fullWidth, twoThirdHeight);

    // Top arc
    context.moveTo(fullWidth, oneThirdHeight);
    context.arc(fullWidth - 0.1, oneThirdHeight - cornerRadiusHalf , cornerRadiusHalf, deg90, deg180);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboVerticalTL(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Left vertical line
    context.moveTo(oneThirdWidth, y);
    context.lineTo(oneThirdWidth, fullHeight);

    // Right arc
    context.moveTo(twoThirdWidth, y);
    context.arc(twoThirdWidth + cornerRadiusHalf, y + 0.1, cornerRadiusHalf, deg180, deg90, true);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboVerticalBL(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Left vertical line
    context.moveTo(oneThirdWidth, y);
    context.lineTo(oneThirdWidth, fullHeight);

    // Right arc
    context.moveTo(twoThirdWidth, fullHeight);
    context.arc(twoThirdWidth + cornerRadiusHalf, fullHeight - 0.1, cornerRadiusHalf, deg180, deg270);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboVerticalTR(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Right vertical line
    context.moveTo(twoThirdWidth, y);
    context.lineTo(twoThirdWidth, fullHeight);

    // Left arc
    context.moveTo(oneThirdWidth, y);
    context.arc(oneThirdWidth - cornerRadiusHalf, y + 0.1, cornerRadiusHalf, 0, deg90);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

function drawComboVerticalBR(position, width, height) {
    context.beginPath();

    const {
        y,
        oneThirdWidth,
        twoThirdWidth,
        fullHeight,
        cornerRadiusHalf
      } = initializeDrawingParameters(position, width, height);
      
    // Right vertical line
    context.moveTo(twoThirdWidth, y);
    context.lineTo(twoThirdWidth, fullHeight);

    // Left arc
    context.moveTo(oneThirdWidth, fullHeight);
    context.arc(oneThirdWidth - cornerRadiusHalf, fullHeight - 0.1, cornerRadiusHalf, 0, deg270, true);

    setDrawingStyles();
    context.stroke();
    context.closePath();
};

export { symbolToDrawFunction, setDrawingStyles };