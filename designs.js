//function that creates rows and cells based on user input of height and width
function makeGrid(height,width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }

    table.innerHTML = grid;

    addClickEventToCells();

}
// function that gets values for height and width and uses them to call makeGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// function that adds click events to all cells
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

makeGrid(10, 10);