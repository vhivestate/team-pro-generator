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
      }])
  })
};

generateMember();