const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

var teammbers = [];
//setup the questions
function CreateManager() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What's Your Manager Name? "
        },
        {
            type: "input",
            name: "id",
            message: "What's Your Manager id? "
        },
        {
            type: "input",
            name: "email",
            message: "What's Your Manager email? "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What's Your Manager office number? "
        }
    ];       
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
         // create a manager
         const manager = new Manager(response.name,response.id,response.email,response.officeNumber);
         teammbers.push(manager);
         CreateEmployee();
    });
}

function CreateEmployee(){
    const createEmployee = [
        {
            type: "list",
            name: "employeeType",
            message: "What type of team member would like to add? ",
            choices: ["Engineer", "Intern", "I dont want to add anymore members."]
        }
    ];
    inquirer.prompt(createEmployee).then(function (response) {
        console.log(response);
        if (response.employeeType == "Engineer") {
            //create engineer
            console.log("we are creating an engineer");
        } else if (response.employeeType == "Intern") {
            //create inter
            console.log("we are creating an intern");
        } else {
            console.log("Stopped creating employee");
        }
    });
}




function CreateEngineer(){
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is  Your Engineer Name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is  Your Engineer id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your Engineer email?"
        },
        {
            type: "input",
            name: "github",
            message: "What's your Engineer GitHub?"
        }
    ];
    inquirer.prompt(questions).then(function (response){
        console.log(response);

        const engineer = new Engineer(response.name,response.id,response.eamail,response.github);
        teammbers,push(engineer)
        createEmployee();
    // //create Engineer
    //     const manager = new Engineer(response.name,response.id,response.email,response.GitHub);
    //     teammbers.push(manager);
    //     CreatEngineer();
    });
}


function CreateIntern(){
    const questions =[
        {
            type: "input",
            name: "name",
            message: "What is  Your Intern name?",
        },

        {
            type: "input",
            name: "id",
            message: "What is  Your Intern id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your Internm email?"
        },
        {
            type: "input",
            name: "github",
            message: "What's your Intern school?"
        }
    ];
    inquirer.createPromptModule(questions).then(function(response){
        console.log(response);
        const intern = new intern(response.name,response.id,response.email,response.school);
        teammbers.push(intern);
        createEmployee();
        
    });
}

CreateManager();  