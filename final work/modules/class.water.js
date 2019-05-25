var matrix = require("./matrix.js");
var random = require("./random.js");

module.exports = class Water{
    constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.value = 10;
       this.index = index;
       this.directions = [
                [this.x, this.y - 1],
                [this.x, this.y + 1],
       ];
   }
   creategrasscoordinates(){
      [
        [this.x - 1, this.y + 1],
        [this.x + 1, this.y + 1],
      ];
   }
     a(){
      [
        [this.x - 1, this.y],
        [this.x + 1, this.y],
      ];
   }
   chooseCell(character) {
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
   chooseCell2(character) {
       var found = [];
       for (var i in this.creategrasscoordinates) {
           var x = this.creategrasscoordinates[i][0];
           var y = this.creategrasscoordinates[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
               if (matrix[y][x] == character) {
                   found.push(this.creategrasscoordinates[i]);
               }
           }
       }
       return found;
   }
      chooseCell3(character) {
       var found = [];
       for (var i in this.a) {
           var x = this.a[i][0];
           var y = this.a[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
               if (matrix[y][x] == character) {
                   found.push(this.a[i]);
               }
           }
       }
       return found;
   }
    move() {
       this.value --;
       if(this.value <= 0) {
          this.dry();
          return;
       }
       if(this.value / 2 % 1) {
           this.creategrass();
           return;
       }
       var emptyCells = this.chooseCell(0);
       var newCell = random(emptyCells);
       if (newCell) {
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 6;
           var newWater = new Water(newX, newY, this.index);
           waterArr.push(newWater);
           
       }
   }
   dry() {
        for (var i in waterArr) {
           if (this.x == waterArr[i].x && this.y == waterArr[i].y) {
               waterArr.splice(i, 1);
               break;
           }
       }
       matrix[this.y][this.x] = 0;
   }
   creategrass() {
      var emptyCells = this.chooseCell2(0);
      var newCell = random(emptyCells);
        if(newCell){
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 1;
           var newGrass = new Grass(newX, newY, this.index);
           grassArr.push(newGrass);
          
   }
  }
  a2() {
        var emptyCells = this.chooseCell3(0);
      var newCell = random(emptyCells);
        if(newCell){
           matrix[this.y][this.x] = 0;
           var newX = newCell[0];
           var newY = newCell[1];
           matrix[newY][newX] = 6;
           this.x = newX;
           this.y = newY;
   }
   this.move();
   return;
  }
}