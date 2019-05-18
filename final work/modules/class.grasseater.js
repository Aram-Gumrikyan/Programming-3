var matrix = require("./modules/matrix.js");

module.exports = class GrassEater {
   constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.energy = 8;
       this.index = index;
   }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       var found = [];
       for (var i in this.directions) {
           var x = this.directions[i][0];
           var y = this.directions[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
               if (matrix[y][x] == character) {
                   found.push(this.directions[i]);
               }
           }
       }
       return found;
   }
   move() {
       this.energy--;
       if (this.energy <= 0) {
           this.die();
           return;
       }
       else if (this.energy >= 12) {
           this.multiply();
           return;
       }
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if (newCell) {
           matrix[this.y][this.x] = 0;
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 2;
           this.x = newX;
           this.y = newY;
       }
   }
   eat() {
       var emptyCells = this.chooseCell(1);
       var newCell2 = random(emptyCells);
       if (newCell2) {
           this.energy += 5;
           matrix[this.y][this.x] = 0;
           var newX = newCell2[0];
           var newY = newCell2[1];

           for (var i in grassArr) {
               if (newX == grassArr[i].x && newY == grassArr[i].y) {
                   grassArr.splice(i, 1);
                   break;
               }
           }
           matrix[newY][newX] = 2;
           this.x = newX;
           this.y = newY;
       } else {
           this.move();
       }
   }
   die() {
       matrix[this.y][this.x] = 4;
       var newX = this.x;
       var newY = this.y;
       var newDeadanimal = new Deadanimal(newX, newY, this.index);
       deadanimalsArr.push(newDeadanimal);
       for (var i in grasseaterArr) {
           if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
               grasseaterArr.splice(i, 1);
               break;
           }
       }
   }
   multiply() {
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       var emptyCells2 = this.chooseCell(1);
       var newCell2 = random(emptyCells2);
       if (newCell) {
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 2;
           var newGrassEater = new GrassEater(newX, newY, this.index);
           grasseaterArr.push(newGrassEater);
       }
       this.energy = 8;
   }
}
