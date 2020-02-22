const fs = require ("fs");
const path = require ("path");
const util = require ("util");
const inquirer = require("inquirer");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
// const render = require("./generateHtml");

const templateDir = path.resolve(__dirname,"../templates")
const buildDir = path.resolve(__dirname, "../build/") 
const teamMembers = [
     new Manager("Manny", 1, "manny@heiscool.com", 200),
      new Engineer("Chaz", 2, "chaz@heiscool.com", "viachaz"),
      new Intern("vas", 3, "vas@heiscool.com", "UofA"),
      new Intern("Caleb", 4, "caleb@heiscool.com", "ASU")
    ];
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)

async function render(employer){
    const html = []

   
    

    const [
        managerTemplate,
        engineerTemplate,
        internTemplate,
        mainTemplate,
    ]= await Promise.all([
        readFile(path.resolve(templateDir,"manager.html"),"utf8"),
        readFile(path.resolve(templateDir,"engineer.html"),"utf8"),
        readFile(path.resolve(templateDir,"intern.html"),"utf8"),
        readFile(path.resolve(templateDir,"main.html"),"utf8"),
    ])

    /* html.push(
        employees
          .filter(employee => employee instanceof Manager)
          .map(employee => {
            let template = managerTemplate;
            for (const key in employee) {
              template = replacePlaceholder(template, key, employee[key]);
            }
            return template;
          })
          .join("")
      );
 */
    console.log (managerTemplate)
    await writeFile (   path.resolve(buildDir,"index.html")          ,   replacePlaceholder(mainTemplate,"body",    BuildHtml(teamMembers))           )

}

//permet d'injecter les variables dans le html
 
function replacePlaceholder(template, target, value) {
    const regex = new RegExp("{{ " + target + " }}", "gm");
    const newTemplate = template.replace(regex, value);
    return newTemplate;
  }


function BuildHtml(teammbers){
    var html="";
    teammbers.forEach(employee=>{
        console.log(employee)
        //build the html and add it to the html variable
        html+= `<div class="card employee-card m-3">
        <div class="card-header bg-primary m-0 p-2 text-light">
            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: <a href=""></a></li>
                <li class="list-group-item">Office number: </li>
            </ul>
        </div>
    </div>`
    })
    return html
}


render(teamMembers)
module.exports = render

