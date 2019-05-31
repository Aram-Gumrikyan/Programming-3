var matrix = require('./modules/matrix.js');
var Grass = require('./modules/class.grass.js');
var GrassEater = require('./modules/class.grasseater.js');
var Angx = require('./modules/class.angx.js');
var Deadanimal = require('./modules/class.deadanimal.js');
var Water = require('./modules/class.water.js');
var Wolf = require('./modules/class.wolf.js');
var random = require("./modules/random.js");
grassArr = [];
grasseaterArr = [];
wolfArr = [];
deadanimalsArr = [];
angxArr = [];
waterArr = [];
grassHashiv = 0;
grasseaterHashiv = 0;
wolfHashiv = 0;
angxHashiv = 0;
waterHashiv = 0;
deadanimalsHashiv = 0;
dayHashiv = 0;
var weather;

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function creatingObjects(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2) {
                grasseaterArr.push(new GrassEater(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                wolfArr.push(new Wolf(x, y, 3));
            }
            else if (matrix[y][x] == 6) {
                deadanimalsArr.push(new Deadanimal(x, y, 6));
            }
            else if (matrix[y][x] == 5) {
                angxArr.push(new Angx(x, y, 5));
            }
            else if (matrix[y][x] == 4) {
                waterArr.push(new Water(x, y, 4));
            }
        }
    }
}
creatingObjects();

function game(){

    dayHashiv += 10;
    var year = Math.floor(dayHashiv/360);
    var weather_0 = dayHashiv - (year * 360);

    if(weather_0 >= 0 && weather_0 <= 60){
        weather = "ձմեռ";
    } else if(weather_0 > 60 && weather_0 <= 150){
        weather = "գարուն";
    } else if(weather_0 > 150 && weather_0 <= 240){
        weather = "ամառ";
    } else if(weather_0 > 240 && weather_0 <=330){
        weather = "աշուն";
    } else if(weather_0 > 330 && weather_0 <=360){
        weather = "ձմեռ";
    }

    for (var i in grassArr) {
        grassArr[i].mul();
        grassHashiv++;
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].eat();
        grasseaterHashiv++;
    }
    for (var i in wolfArr) {
        wolfArr[i].eat();
        wolfHashiv++;
    }
    for (var i in deadanimalsArr) {
        deadanimalsArr[i].erosion();
        deadanimalsHashiv++;
    }
    for (var i in angxArr) {
        angxArr[i].eat();
        angxHashiv++;
    }
    for (var i in waterArr) {
        waterArr[i].move();
        waterHashiv++;
    }

    var sendData = {
        matrix: matrix,
        grassCount: grassHashiv,
        grasseaterCount: grasseaterHashiv,
        wolfCount: wolfHashiv,
        angxCount: angxHashiv,
        waterCount: waterHashiv,
        deadanimalsCount: deadanimalsHashiv,
        dayCount: dayHashiv,
        weatheris: weather
    }

    io.sockets.emit("data", sendData);
}

setInterval(game, 1000);