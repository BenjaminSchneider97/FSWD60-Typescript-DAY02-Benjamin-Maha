class vehicles {
	productionYear : number;
	model = "";
	color = "";
	seats : number;
	kilometers : number;
	img = "";

	constructor(year, model, color, seats, kilometers, img){
		this.productionYear = year;
		this.model = model;
		this.color = color;
		this.seats = seats;
		this.kilometers = kilometers;
		this.img = img;
	}

	calcPrice(){
			return ((this.seats*3)+(this.kilometers*3)+this.productionYear);
		}
}

class Motorbike extends vehicles{
	handlebar="";


	constructor(year, model, color, seats, kilometers, img, handlebar){
		super(year, model, color, seats, kilometers, img);
		this.handlebar = handlebar;
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
}


var allvehicles = new Array();

allvehicles[0] = new Motorbike(2009, "Honda", "black", 1, 20000, "img/honda.jpg", "good");
allvehicles[1] = new Motorbike(2015, "Yamaha", "black", 1, 3000, "img/bike.png", "nice");
allvehicles[2] = new Truck(2016, "Ford", "black", 2, 15000, "img/truck.png", 1, "1.5t");
allvehicles[3] = new Truck(2014, "Chevrolet", "darkblue", 4, 10000, "img/truck2.png", 1, "2t");

for(let value in allvehicles){
	document.getElementById("vehicles").innerHTML +=`
		<div class="alldata" id="vehicle` + [value] + `">
			<div class="imgbtn">
				<img src='img/` + value + `.jpg'>
				<button class="descbtn" id="` + value + `">Show price</button>
			</div>
			<div class="description">
				<p>The production Year is ` + allvehicles[value].productionYear + `.</p>
				<p>The model is ` + allvehicles[value].model + `.</p>
				<p>The color of your vehicle is ` + allvehicles[value].color + `.</p>
				<p>Your vehicle has ` + allvehicles[value].seats + ` seat(s).</p>
				<p>Your vehicle has ` + allvehicles[value].kilometers + ` kilometers.</p>
			</div>
		</div>
	`
}
for (let value in allvehicles) {
	document.getElementById(value).addEventListener('click', function(){priceoutput(this.getAttribute("id"));},false);
}

function priceoutput(id){
	document.getElementById("vehicle"+id).innerHTML +=  "<p>Current Market Price is: €" + allvehicles[id].calcPrice() + "</p><br>";

}
