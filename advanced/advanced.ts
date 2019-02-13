class vehicles {
	productionYear = "";
	model = "";
	color = "";
	seats = "";
	kilometers = "";

	constructor(year, model, color, seats, kilometers){
		this.productionYear = year;
		this.model = model;
		this.color = color;
		this.seats = seats;
		this.kilometers = kilometers;
	}
	infos(){
		return `The production Year is ${this.productionYear}.<br>
				The model is ${this.model}.<br>
				The color of your vehicle is ${this.color}.<br>
				Your vehicle hast ${this.seats} seats.<br>
				Your vehicle has ${this.kilometers} kilometers.<br>`
	}

}
var test = new vehicles("2010", "bmw", "black", "4", "100000");
document.write(test.infos());

class Motorbike extends vehicles{
	engine="";

	constructor(year, model, color, seats, kilometers, engine){
		super(year, model, color, seats, kilometers);
		this.engine = engine;
	}
	motorOutput(){
		return `${super.infos()} Your vehicle is a Motorbike and has an ${this.engine} engine.`
	}
}
var motortest = new Motorbike("2009", "honda", "black", "1", "20000", "good");
document.write(motortest.motorOutput());

class Truck extends vehicles{
	engine="";

	constructor(year, model, color, seats, kilometers, engine){
		super(year, model, color, seats, kilometers);
		this.engine = engine;
	}
}
class cars extends vehicles{
	engine = "";
	horsepower = "";

	constructor(year, model, color, seats, kilometers, engine, horsepower){
		super(year, model, color, seats, kilometers);
		this.engine = engine;
		this.horsepower = horsepower;
	}
}	
class bicycle extends vehicles{
	type = "";

	constructor(year, model, color, seats, kilometers, type){
		super(year, model, color, seats, kilometers);
		this.type = type;
	}
}
class boats extends vehicles{
	type = "";
	size = "";

	constructor(year, model, color, seats, kilometers, type, size){
		super(year, model, color, seats, kilometers);
		this.type = type;
		this.size = size;
	}
}
class horse extends vehicles{
	species = "";
	power = "";

	constructor(year, model, color, seats, kilometers, species, power){
		super(year, model, color, seats, kilometers);
		this.species = species;
		this.power = power;
	}
}