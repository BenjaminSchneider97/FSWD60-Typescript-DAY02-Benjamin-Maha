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
var person = /** @class */ (function () {
    function person(name, age, JobTitle) {
        this.name = "";
        this.age = "";
        this.JobTitle = "";
        this.name = name;
        this.age = age;
        this.JobTitle = JobTitle;
    }
    person.prototype.string = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.JobTitle;
    };
    return person;
}());
var data = /** @class */ (function (_super) {
    __extends(data, _super);
    function data(name, age, JobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, JobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    data.prototype.fullsentence = function () {
        return _super.prototype.string.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + "<br>";
    };
    return data;
}(person));
var info = new data("Ben", "19", "Developer", "7000$", "Paris");
var info2 = new data("maha", "17", "developer", "2000$", "Dubai");
document.write(info.fullsentence());
document.write(info2.fullsentence());
