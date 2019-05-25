function getRndInteger(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
var xot = getRndInteger(1,6);
var xotaker = getRndInteger(7,10);
var gail = getRndInteger(11,13);
var trjun = getRndInteger(14,16);
var jur = getRndInteger(17,19);

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

        grassCountElement.innerText = data.grassCount;

        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == xot) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == xotaker) {
                    fill('yellow');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == gail) {
                    fill('#545258');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 20) {
                    fill('red');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == trjun) {
                    fill('#663300');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == jur) {
                    fill('blue');
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}