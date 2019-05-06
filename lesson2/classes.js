class Mard{
	constructor(anun, azganun, tariq){
		this.anun = anun;
		this.azganun = azganun;
		this.tariq = tariq
	}
}
class Hai extends Mard{
	constructor(anun, azganun, tariq, mazeriguin){
		super(anun, azganun, tariq);
		this.mazeriguin = "sev";
	}
}
var mard1 = new Mard("Aram", "Gumrikyan", 16);
console.log(mard1);
var hai1 = new Hai("Aram", "Gumrikyan", 16);
console.log(hai1);