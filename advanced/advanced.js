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
        this.model = "";
        this.color = "";
        this.img = "";
        this.productionYear = year;
        this.model = model;
        this.color = color;
        this.seats = seats;
        this.kilometers = kilometers;
        this.img = img;
    }
    vehicles.prototype.calcPrice = function () {
        return ((this.seats * 3) + (this.kilometers * 3) + this.productionYear);
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
    return Truck;
}(vehicles));
var allvehicles = new Array();
allvehicles[0] = new Motorbike(2009, "Honda", "black", 1, 20000, "img/honda.jpg", "good");
allvehicles[1] = new Motorbike(2015, "Yamaha", "black", 1, 3000, "img/bike.png", "nice");
allvehicles[2] = new Truck(2016, "Ford", "black", 2, 15000, "img/truck.png", 1, "1.5t");
allvehicles[3] = new Truck(2014, "Chevrolet", "darkblue", 4, 10000, "img/truck2.png", 1, "2t");
for (var value in allvehicles) {
    document.getElementById("vehicles").innerHTML += "\n\t\t<div class=\"alldata\" id=\"vehicle" + [value] + "\">\n\t\t\t<div class=\"imgbtn\">\n\t\t\t\t<img src='img/" + value + ".jpg'>\n\t\t\t\t<button class=\"descbtn\" id=\"" + value + "\">Show price</button>\n\t\t\t</div>\n\t\t\t<div class=\"description\">\n\t\t\t\t<p>The production Year is " + allvehicles[value].productionYear + ".</p>\n\t\t\t\t<p>The model is " + allvehicles[value].model + ".</p>\n\t\t\t\t<p>The color of your vehicle is " + allvehicles[value].color + ".</p>\n\t\t\t\t<p>Your vehicle has " + allvehicles[value].seats + " seat(s).</p>\n\t\t\t\t<p>Your vehicle has " + allvehicles[value].kilometers + " kilometers.</p>\n\t\t\t</div>\n\t\t</div>\n\t";
}
for (var value in allvehicles) {
    document.getElementById(value).addEventListener('click', function () { priceoutput(this.getAttribute("id")); }, false);
}
function priceoutput(id) {
    document.getElementById("vehicle" + id).innerHTML += "<p>Current Market Price is: €" + allvehicles[id].calcPrice() + "</p><br>";
}
