var tileSize = 25, rows = 20, colums = 20, floor, context;

window.onload = function(){
    floor = document.getElementById("floor");
    floor.height = rows * tileSize;
    floor.width = colums * tileSize;
    context = floor.getContext("2d"); //used to draw the board

    update();
}
    

function update(){
    context.fillStyle="black";
    context.fillRect(0, 0, floor.width, floor.height);
}

