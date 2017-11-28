
var inquirer = require ("inquirer");


inquirer
.prompt([

{
type: "input",
message:"What is your first name?",
name: "firstname"
},

{
type: "input",
message:"What is your last name?",
name: "lastname"
},

{
type:"confirm",
message: "Are you excited about learning to code?",
default: true
}

{
type: "input",
message: "Other than coding, what do you enjoy doing as a hobby?",
name: "hobby"
}

{
type: "list",
message:"Which genre of move do you enjoy most?",
choices:["Comedy", "Drama", "SciFi", "Thrillers", "Horror"],
name:"movie"
},
])
.then(function(res){
if (res.confirm){console.log("\nIt's great to know that you are excited about coding" + res.firstname + ".");
}
else{

	console.log("\nThis homework assignemnt doesn't give me time to review my coding challenges. I need to go back to the beginning of javascript again.\n");
}
});

// below...I will create a constructor for a user.

function User(name, hobby, movie, confirm){
this.name = name;
this.hobby = hobby;
this.movie = movie;
this.confirm = confirm;
this.res = function(){

	if(this.confirm === true){

		console.log("You are freakin' awesome!");
	}
};

}

var userOne = new User("Veronica", "Working Out", "The Sandlot", true);
var userTwo = new User("Martha", "Coding", "Baby Driver", true);

userOne.res();
userTwo.res();


