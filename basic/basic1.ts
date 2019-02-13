class person{
	name = "";
	age = "";
	JobTitle = "";

	constructor(name, age, JobTitle){
		this.name = name;
		this.age = age;
		this.JobTitle = JobTitle;
	}
	string(){
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.JobTitle}`
	}
}

var fullstring = new person("Maha", "20", "Developer");
var fullstring2 = new person("Ben", "19", "Developer");
console.log(fullstring.string());
console.log(fullstring2.string());

export { person , fullstring }