/*
Simplified Prim's Algorithm
*/

let steps = [];

function prim() {
    let x = 1 + Math.floor(Math.random() * (ROWS - 1));
    let y = 1 + Math.floor(Math.random() * (COLS - 1));

    steps = [];
    generateMaze(x, y, steps);
    
    if (steps.length < 2) return;
    // choose two random steps to be the begin and end cells
    let beginIdx = Math.floor(Math.random() * steps.length);
    beginCell = steps[beginIdx];
    maze[beginCell[0]][beginCell[1]][1] = 'begin';
    
    // in the rare case beginIdx equals to endIdx
    let endIdx = Math.floor(Math.random() * steps.length);
    while (beginIdx == endIdx) endIdx = Math.floor(Math.random() * steps.length);
    endCell = steps[endIdx];
    maze[endCell[0]][endCell[1]][1] = 'end';

    return steps;
}

let unexplored = [];
function generateMaze(x, y) {
    maze[x][y][1] = "path";
    steps.push([x, y]);

    if (x >= 2 && maze[x - 2][y][1] == "wall") unexplored.push([x - 1, y, x - 2, y]);
    if (y >= 2 && maze[x][y - 2][1] == "wall") unexplored.push([x, y - 1, x, y - 2]);
    if (x < ROWS - 2 && maze[x + 2][y][1] == "wall") unexplored.push([x + 1, y, x + 2, y]);
    if (y < COLS - 2 && maze[x][y + 2][1] == "wall") unexplored.push([x, y + 1, x, y + 2]);

    while (unexplored.length != 0) {
        let idx = Math.floor(Math.random() * unexplored.length);
        let coords = unexplored[idx];
        unexplored.splice(idx, 1);

        if (maze[coords[2]][coords[3]][1] == "wall") {
            maze[coords[0]][coords[1]][1] = "path";
            steps.push([coords[0], coords[1]]);
            generateMaze(coords[2], coords[3]);
        }
    }
}