module.exports = matrix;
var matrix = [];
var m = 40;
var n = m;

for (y = 0; y < m; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        matrix[y][x] = random([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5, 6]);
    }
}