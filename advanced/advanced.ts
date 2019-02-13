class vehicles {
	productionYear = "";
	model = "";
	color = "";
	seats = "";
	kilometers = "";
	img = "";

	constructor(year, model, color, seats, kilometers, img){
		this.productionYear = year;
		this.model = model;
		this.color = color;
		this.seats = seats;
		this.kilometers = kilometers;
		this.img = img;
	}
	infos(){
		return `<div class="alldata">
					<img src="${this.img}"><br>
					<button class="descbtn" onclick="toggledesc()">Show description</button>
					<div class="description">
					The production Year is ${this.productionYear}.<br>
					The model is ${this.model}.<br>
					The color of your vehicle is ${this.color}.<br>
					Your vehicle hast ${this.seats} seats.<br>
					Your vehicle has ${this.kilometers} kilometers.<br>`
	}

}

class Motorbike extends vehicles{
	handlebar="";


	constructor(year, model, color, seats, kilometers, img, handlebar){
		super(year, model, color, seats, kilometers, img);
		this.handlebar = handlebar;
	}
	motorOutput(){
		return `${super.infos()} Your vehicle is a Motorbike and has an ${this.handlebar} handlebar.</div></div>`
	}
}

class Truck extends vehicles{
	trailer = "";
	weight = "";

	constructor(year, model, color, seats, kilometers, img, trailer, weight){
		super(year, model, color, seats, kilometers, img);
		this.trailer = trailer;
		this.weight = weight;
	}
	truckOutput(){
		return `${super.infos()} Your vehicle is a Truck and has ${this.trailer} trailers and a max weight of ${this.weight}!</div></div>`
	}
}

var motorbike1 = new Motorbike(2009, "Honda", "black", 1, 20000, "img/honda.jpg", "good");
var motorbike2 = new Motorbike(2015, "Yamaha", "black", 1, 3000, "img/bike.png", "nice");
var truck1 = new Truck(2016, "Ford", "black", 2, 15000, "img/truck.png", 1, "1.5t");
var truck2 = new Truck(2014, "Chevrolet", "darkblue", 4, 10000, "img/truck2.png", 1, "2t");

document.write(motorbike1.motorOutput());

$(".descbtn").on("click", function(){
	var a = $(".description");
	a.fadeIn(200);
})














/*class cars extends vehicles{
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
}*/