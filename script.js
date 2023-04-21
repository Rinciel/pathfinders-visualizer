let ROWS;
let COLS;

// ======================================================================================
const FRAMERATE = 60; // some browsers might not support framerates. Max framerate: 60
const BG_COLOR = [153, 157, 163];
const LINE_COLOR = [BG_COLOR[0] + 20, BG_COLOR[1] + 20, BG_COLOR[2] + 20];
const WALL_COLOR = [0, 0, 0];
const PATH_COLOR = BG_COLOR;
const BEGIN_COLOR = [0, 100, 0];
const END_COLOR = [139, 0, 0];
const EXPLORED_COLOR = [112, 128, 144];
const RES_COLOR = [0, 76, 153];

let CELL_PIXELS = 25;
let MAZE_GEN = "prim";
let SOLVER = "bfs";
let SKIP_PRIM_ANIM = false;
let SKIP_SOLVER_ANIM = false;
// ======================================================================================

function init() {
    ROWS = Math.ceil((windowHeight - windowHeight / CELL_PIXELS) / CELL_PIXELS);
    COLS = Math.ceil((windowWidth - windowWidth / CELL_PIXELS) / CELL_PIXELS);

    mazeInit();
}

function setup() {
    frameRate(FRAMERATE);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    init();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    init();
}

// ============================================================================================
function draw() {
    // console.log(getFrameRate());
    background(BG_COLOR);
    drawMaze();
}