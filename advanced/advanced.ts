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

}
class cars extends vehicles{
	engine = "";
	horsepower = "";
}
class bike extends vehicles{
	
}
class boats extends vehicles{
	
}
class horse extends vehicles{

}