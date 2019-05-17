var matrix = require("./modules/class.deadanimal.js");

module.exports = class Deadanimal {
   constructor(x, y, index) {
       this.x = x;
       this.y = y;
       this.energy = 0;
       this.index = index;
   }
   erosion() {
       this.energy++;
       if (this.energy >= 30) {
           this.die();
           return;
       }
   }
   die() {
       for (var i in deadanimalsArr) {
           if (this.x == deadanimalsArr[i].x && this.y == deadanimalsArr[i].y) {
               deadanimalsArr.splice(i, 1);
               break;
           }
       }
       matrix[this.y][this.x] = 0;
   }
}