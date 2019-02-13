var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicles = /** @class */ (function () {
    function vehicles(year, model, color, seats, kilometers, img) {
        this.productionYear = "";
        this.model = "";
        this.color = "";
        this.seats = "";
        this.kilometers = "";
        this.img = "";
        this.productionYear = year;
        this.model = model;
        this.color = color;
        this.seats = seats;
        this.kilometers = kilometers;
        this.img = img;
    }
    vehicles.prototype.infos = function () {
        return "<div class=\"alldata\">\n\t\t\t\t\t<img src=\"" + this.img + "\"><br>\n\t\t\t\t\t<button class=\"descbtn\" onclick=\"toggledesc()\">Show description</button>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\tThe production Year is " + this.productionYear + ".<br>\n\t\t\t\t\tThe model is " + this.model + ".<br>\n\t\t\t\t\tThe color of your vehicle is " + this.color + ".<br>\n\t\t\t\t\tYour vehicle hast " + this.seats + " seats.<br>\n\t\t\t\t\tYour vehicle has " + this.kilometers + " kilometers.<br>";
    };
    return vehicles;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(year, model, color, seats, kilometers, img, handlebar) {
        var _this = _super.call(this, year, model, color, seats, kilometers, img) || this;
        _this.handlebar = "";
        _this.handlebar = handlebar;
        return _this;
    }
    Motorbike.prototype.motorOutput = function () {
        return _super.prototype.infos.call(this) + " Your vehicle is a Motorbike and has an " + this.handlebar + " handlebar.</div></div>";
    };
    return Motorbike;
}(vehicles));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(year, model, color, seats, kilometers, img, trailer, weight) {
        var _this = _super.call(this, year, model, color, seats, kilometers, img) || this;
        _this.trailer = "";
        _this.weight = "";
        _this.trailer = trailer;
        _this.weight = weight;
        return _this;
    }
    Truck.prototype.truckOutput = function () {
        return _super.prototype.infos.call(this) + " Your vehicle is a Truck and has " + this.trailer + " trailers and a max weight of " + this.weight + "!</div></div>";
    };
    return Truck;
}(vehicles));
var motorbike1 = new Motorbike(2009, "Honda", "black", 1, 20000, "img/honda.jpg", "good");
var motorbike2 = new Motorbike(2015, "Yamaha", "black", 1, 3000, "img/bike.png", "nice");
var truck1 = new Truck(2016, "Ford", "black", 2, 15000, "img/truck.png", 1, "1.5t");
var truck2 = new Truck(2014, "Chevrolet", "darkblue", 4, 10000, "img/truck2.png", 1, "2t");
document.write(motorbike1.motorOutput());
$(".descbtn").on("click", function () {
    var a = $(".description");
    a.fadeIn(200);
});
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
