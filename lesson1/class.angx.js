class Angx {
   constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.energy = 20;
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
           [this.x + 1, this.y + 1],

           [this.x - 2, this.y - 2],
           [this.x - 1, this.y - 2],
           [this.x, this.y -2],
           [this.x + 1, this.y - 2],
           [this.x + 2, this.y - 2],
           [this.x + 2, this.y - 1],
           [this.x + 2, this.y,],
           [this.x + 2, this.y + 1],
           [this.x + 2, this.y + 2],
           [this.x + 1, this.y + 2],
           [this.x, this.y + 2],
           [this.x - 1, this.y + 2],
           [this.x - 2, this.y + 2],
           [this.x - 2, this.y + 1],
           [this.x - 2, this.y],
           [this.x - 2, this.y - 1],

           [this.x - 3, this.y - 3],
           [this.x - 2, this.y - 3],
           [this.x - 1, this.y - 3],
           [this.x, this.y - 3],
           [this.x + 1, this.y - 3],
           [this.x + 2, this.y - 3],
           [this.x + 3, this.y - 3],
           [this.x + 3, this.y - 2],
           [this.x + 3, this.y - 1],
           [this.x + 3, this.y],
           [this.x + 3, this.y + 1],
           [this.x + 3, this.y + 2],
           [this.x + 3, this.y + 3],
           [this.x + 2, this.y + 3],
           [this.x + 1, this.y + 3],
           [this.x, this.y + 3],
           [this.x - 1, this.y + 3],
           [this.x - 2, this.y + 3],
           [this.x - 3, this.y + 3],
           [this.x - 3, this.y + 2],
           [this.x - 3, this.y + 1],
           [this.x - 3, this.y],
           [this.x - 3, this.y - 1],
           [this.x - 3, this.y - 2],
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
       else if (this.energy >= 40) {
           this.multiply();
           return;
       }
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if (newCell) {
           matrix[this.y][this.x] = 0;
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 5;
           this.x = newX;
           this.y = newY;
       }
   }
   eat() {
       var emptyCells = this.chooseCell(4);
       var newCell = random(emptyCells);
       if (newCell) {
           this.energy += 5;
           matrix[this.y][this.x] = 0;
           var newX = newCell[0];
           var newY = newCell[1];

           for (var i in deadanimalsArr) {
               if (newX == deadanimalsArr[i].x && newY == deadanimalsArr[i].y) {
                   deadanimalsArr.splice(i, 1);
                   break;
               }
           }
           matrix[newY][newX] = 5;
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
       for (var i in angxArr) {
           if (this.x == angxArr[i].x && this.y == angxArr[i].y) {
               angxArr.splice(i, 1);
               break;
           }
       }
   }
   multiply() {
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if (newCell) {
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 3;
           var newAngx = new Angx(newX, newY, this.index);
           angxArr.push(newAngx);
       }
       this.energy = 40;
   }
}