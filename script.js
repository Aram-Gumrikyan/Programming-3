function setup(){
    var socket = io();
    var side = 20;
    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let wolfCountElement = document.getElementById('wolfCount');
    let angxCountElement = document.getElementById('angxCount');
    let waterCountElement = document.getElementById('waterCount');
    let deadanimalsCountElement = document.getElementById('deadanimalsCount');
    let dayCountElement = document.getElementById('dayCount');
    let weatherisElement = document.getElementById('weatheris');

    socket.on("data", drawCreatures);

    function drawCreatures(data){
        matrix = data.matrix; 

        grassCountElement.innerText = data.grassCount;
        grassEaterCountElement.innerText = data.grasseaterCount;
        wolfCountElement.innerText = data.wolfCount;
        angxCountElement.innerText = data.angxCount;
        waterCountElement.innerText = data.waterCount;
        deadanimalsCountElement.innerText = data.deadanimalsCount;
        dayCountElement.innerText = data.dayCount;
        weatherisElement.innerText = data.weatheris;

        var weather = data.weatheris;

        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');

        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    if(weather == "ձմեռ"){
                        fill("#ffffff");
                        rect(x * side, y * side, side, side);
                    } else if(weather == "գարուն"){
                        fill("green");
                        rect(x * side, y * side, side, side);
                    } else if(weather == "ամառ"){
                        fill("#ffff00");
                        rect(x * side, y * side, side, side);
                    } else if(weather == "աշուն"){
                        fill("#ff8000");
                        rect(x * side, y * side, side, side);
                    }
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