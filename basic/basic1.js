"use strict";
exports.__esModule = true;
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
exports.person = person;
var fullstring = new person("Maha", "20", "Developer");
exports.fullstring = fullstring;
var fullstring2 = new person("Ben", "19", "Developer");
console.log(fullstring.string());
console.log(fullstring2.string());
