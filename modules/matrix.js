function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

var matrix = [];
var m = 40;
var n = m;
for (y = 0; y < m; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        var a = getRndInteger(1,5);
        matrix[y][x] = a;
    }
}
module.exports = matrix;