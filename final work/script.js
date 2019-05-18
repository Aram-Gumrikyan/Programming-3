/*
var m = 40;
var n = m;

function setup() {
   for (y = 0; y < m; y++) {
       matrix[y] = [];
       for (x = 0; x < n; x++) {
           matrix[y][x] = random([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5, 6]);
       }
   }
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');

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
           else if (matrix[y][x] == 4) {
               deadanimalsArr.push(new Deadanimal(x, y, 4));
           }
           else if (matrix[y][x] == 5) {
               angxArr.push(new Angx(x, y, 5));
           }
           else if (matrix[y][x] == 6) {
               waterArr.push(new Water(x, y, 6));
           }
       }
   }
}
function draw() {
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
           else if (matrix[y][x] == 4) {
               fill('red');
               rect(x * side, y * side, side, side);
           }
           else if (matrix[y][x] == 5) {
               fill('#663300');
               rect(x * side, y * side, side, side);
           }
           else if (matrix[y][x] == 6) {
               fill('blue');
               rect(x * side, y * side, side, side);
           }
       }
   }
   for (var i in grassArr) {
       grassArr[i].mul();
   }
   for (var i in grasseaterArr) {
       grasseaterArr[i].eat();
   }
   for (var i in wolfArr) {
       wolfArr[i].eat();
   }
   for (var i in deadanimalsArr) {
       deadanimalsArr[i].erosion();
   }
   for (var i in angxArr) {
       angxArr[i].eat();
   }
   for (var i in waterArr) {
       waterArr[i].move();
   }
}
*/
function setup(){
    var matrix = require("./modules/matrix.js");
    var socket = io();
    var side = 20;
    socket.on("data", drawCreatures);
    function drawCreatures(data){
        matrix = data.matrix; 
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
                else if (matrix[y][x] == 4) {
                    fill('red');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill('#663300');
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill('blue');
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
}