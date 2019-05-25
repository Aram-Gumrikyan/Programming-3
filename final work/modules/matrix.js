function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

var matrix = [];
var m = 40;
var n = m;
var i;
for (y = 0; y < m; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        var a = getRndInteger(1,20);
        matrix[y][x] = a;
    }
} 
console.log(matrix);
module.exports = matrix;