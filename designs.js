//variables to set canvas element,height,width
const k = document.getElementById('pixel_canvas');
let temph = $("#input_height");
let tempw = $("#input_width");

//An event listener for clicking the submit button.
$('#input_submit').click(function(ev) {
    ev.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//create the grid
function makeGrid() {

    k.innerHTML = '';
    let height = temph.val();
    let width = tempw.val();

    //A function for color filling and changeColor
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //An event listener to call addEvent function and changeColor
    for (let i = 0; i < height; i++) {
        let row = k.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}