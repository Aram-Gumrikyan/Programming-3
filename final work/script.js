function setup(){
    var socket = io();
    var side = 20;
    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data){
        matrix = data.matrix; 
        console.log(matrix);

        grassCountElement.innerText = data.grassCounter;

        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill('yellow');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill('#545258');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill('red');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill('#663300');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill('blue');
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}