const gridContainer = document.getElementById('grid');

const startValues = [[9,0,0,3,4,0,0,7,0],
                     [8,5,0,7,0,0,3,4,9],
                     [0,7,0,8,9,1,2,0,0],
                     [0,6,8,0,0,0,4,0,0],
                     [3,0,0,6,8,7,0,1,5],
                     [0,0,0,0,5,4,0,0,3],
                     [0,0,0,0,0,8,0,0,0],
                     [0,0,4,1,0,2,5,0,0],
                     [6,0,5,0,7,9,1,0,2]];

// create 9x9 sudoku game board grid
for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);



        if (startValues[i][j] === 0) {
            const input = document.createElement('input');
            input.min = 1;
            input.max = 1;
            input.classList.add('input-cell');
            cell.appendChild(input);
        } else {
            cell.textContent = startValues[i][j];
        }
     

        // console.log(i + ' ' + j);
    }
}