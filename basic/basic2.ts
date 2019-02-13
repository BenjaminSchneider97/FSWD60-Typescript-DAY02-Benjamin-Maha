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
class data extends person {
	salary = "";
	jobLocation = "";

	constructor(name, age, JobTitle, salary, jobLocation){
		super(name, age, JobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	fullsentence(){
		return ` ${super.string()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
	}
}

var info = new data("Ben", "19", "Developer", "7000$", "Paris");
var info2 = new data ("maha", "17", "developer", "2000$", "Dubai");
document.write(info.fullsentence());
document.write (info2.fullsentence());
