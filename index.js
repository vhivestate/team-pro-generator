const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const html =require('./src/page-template');
const teamEmp = [];

function generateMember() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter team member name (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter team member name!');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "role",
        message: "Select your team member role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
    },
    {
        type: "input",
        name: "memberId",
        message: "Please enter your team member ID number (Required)",
        validate: memberIdInput => {
            if(memberIdInput) {
                return true;
            } else {
                console.log('Please enter ID number!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter team member email (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("please enter email!");
                return false;
            }
        }
    },
  ])
  .then(function({ name, role, memberId, email}) {
      let userRole = "";
      if(role === "Manager") {
          userRole = "officeNumber";
      } else if(role === "Engineer") {
          userRole = "github";
      } else {
          userRole = "school"
      }
      inquirer.prompt([{
          type: "input",
          name: "userRoleInput",
          message: `Enter team members ${userRole} (Required)`,
          validate: roleInput => {
              if(roleInput) {
                  return true;
              } else {
                  console.log(`Please enter ${userRole}`);
                  return false;
              }
          }
          //loop add members
      }]).then(function({userRoleInput}) {
        console.log(userRoleInput)
        if(role === "Manager"){
            let newManager = new Manager(name, memberId, email, userRoleInput)
            teamEmp.push(newManager)
            console.log(teamEmp)
        }
        if(role === "Engineer"){
            let newEngineer = new Engineer(name, memberId, email, userRoleInput)
            teamEmp.push(newEngineer)
            console.log(teamEmp)
        }
        if(role === "Intern"){
            let newIntern = new Intern(name, memberId, email, userRoleInput)
            teamEmp.push(newIntern)
            console.log(teamEmp)
        }
        //asks user if they would like to add new user
        inquirer.prompt({name: "choice", type: "confirm", message: "Would you like to add another team member?" }).then(function({choice}){
            if(choice) {
                generateMember()
            } else {
                let empHtml = ""

                for (let index = 0; index < teamEmp.length; index++) {
                    let special = ""
                    if(teamEmp[index].getRole() === "Manager"){
                        special = teamEmp[index].getOfficeNumber()
                    }
                    if(teamEmp[index].getRole() === "Engineer"){
                        special = teamEmp[index].getGithub()
                    }
                    if(teamEmp[index].getRole() === "Intern"){
                        special = teamEmp[index].getSchool()
                    }
                    empHtml += `
                    <div>
                    <p>${teamEmp[index].getName()}</p>
                    <p>${teamEmp[index].getRole()}</p>
                    <ul>
                    <li>${teamEmp[index].getId()}</li>
                    <li>${teamEmp[index].getEmail()}</li>
                    <li>${special}</li>
                    </ul>

                    </div>
                    `
                }
                let html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">

                    <title>Document</title>
                </head>
                <body>
                    ${empHtml}
                </body>
                </html>`
                console.log('Team has been built!')
                // generates html
                fs.writeFile('./index.html', html, function(err){
                    if(err){
                        console.log(err)
                    }
                })
            }
        })
      })
  })
};

generateMember();