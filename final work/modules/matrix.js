function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
var a = getRndInteger(1,5);
var matrix = [];
var m = 40;
var n = m;

for (y = 0; y < m; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        matrix[y][x] = a;
    }
}
module.exports = matrix;