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
var vehicleimages = ["img/bmw.jpg", "img/honda.jpg", "img/truck.jpg"];
for (var value in vehicleimages) {
    var outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "images");
    var image = document.createElement("img");
    image.setAttribute("src", vehicleimages[value]);
    outerDiv.appendChild(image);
    document.getElementById("vehicleimages").append(outerDiv);
}
var vehicles = /** @class */ (function () {
    function vehicles(year, model, color, seats, kilometers) {
        this.productionYear = "";
        this.model = "";
        this.color = "";
        this.seats = "";
        this.kilometers = "";
        this.productionYear = year;
        this.model = model;
        this.color = color;
        this.seats = seats;
        this.kilometers = kilometers;
    }
    vehicles.prototype.infos = function () {
        return "<div class=\"alldata\">The production Year is " + this.productionYear + ".<br>\n\t\t\t\tThe model is " + this.model + ".<br>\n\t\t\t\tThe color of your vehicle is " + this.color + ".<br>\n\t\t\t\tYour vehicle hast " + this.seats + " seats.<br>\n\t\t\t\tYour vehicle has " + this.kilometers + " kilometers.<br>";
    };
    return vehicles;
}());
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(year, model, color, seats, kilometers, handlebar) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.handlebar = "";
        _this.handlebar = handlebar;
        return _this;
    }
    Motorbike.prototype.motorOutput = function () {
        return _super.prototype.infos.call(this) + " Your vehicle is a Motorbike and has an " + this.handlebar + " handlebar.</div>";
    };
    return Motorbike;
}(vehicles));
var motortest = new Motorbike("2009", "honda", "black", "1", "20000", "good");
document.write(motortest.motorOutput());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(year, model, color, seats, kilometers, trailer, weight) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.trailer = "";
        _this.weight = "";
        _this.trailer = trailer;
        _this.weight = weight;
        return _this;
    }
    return Truck;
}(vehicles));
var cars = /** @class */ (function (_super) {
    __extends(cars, _super);
    function cars(year, model, color, seats, kilometers, engine, horsepower) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.engine = "";
        _this.horsepower = "";
        _this.engine = engine;
        _this.horsepower = horsepower;
        return _this;
    }
    return cars;
}(vehicles));
var bicycle = /** @class */ (function (_super) {
    __extends(bicycle, _super);
    function bicycle(year, model, color, seats, kilometers, type) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.type = "";
        _this.type = type;
        return _this;
    }
    return bicycle;
}(vehicles));
var boats = /** @class */ (function (_super) {
    __extends(boats, _super);
    function boats(year, model, color, seats, kilometers, type, size) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.type = "";
        _this.size = "";
        _this.type = type;
        _this.size = size;
        return _this;
    }
    return boats;
}(vehicles));
var horse = /** @class */ (function (_super) {
    __extends(horse, _super);
    function horse(year, model, color, seats, kilometers, species, power) {
        var _this = _super.call(this, year, model, color, seats, kilometers) || this;
        _this.species = "";
        _this.power = "";
        _this.species = species;
        _this.power = power;
        return _this;
    }
    return horse;
}(vehicles));
