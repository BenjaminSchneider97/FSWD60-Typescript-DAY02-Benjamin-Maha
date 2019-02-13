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
    return vehicles;
}());
var cars = /** @class */ (function (_super) {
    __extends(cars, _super);
    function cars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.engine = "";
        _this.horsepower = "";
        return _this;
    }
    return cars;
}(vehicles));
var bike = /** @class */ (function (_super) {
    __extends(bike, _super);
    function bike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return bike;
}(vehicles));
var boats = /** @class */ (function (_super) {
    __extends(boats, _super);
    function boats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return boats;
}(vehicles));
var horse = /** @class */ (function (_super) {
    __extends(horse, _super);
    function horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return horse;
}(vehicles));
