
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
.then(function(res.confirm){
if (res.confirm){console.log("\nIt's great to know that you are excited about coding.")



}



})