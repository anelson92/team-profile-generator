const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs"); 


const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");

const generateEmployees = require("./src/page-template");

const teamMembers = [];

const init = () => {
    const createManager = async () => {
    const managerInfo = await inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: 'What is this teams managers name?',
            validate: (answer) => {
                if(answer) {
                    return true
                }   
                return "Please enter a name.";        
            },
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'What is the managers ID?',
            validate: (answer) => {
                const id = answer.match(/^[1-9]\d*$/);
                if(id) {
                    return true
                }   
                return "Please enter an ID.";        
            },
        },
        {
            name: 'managerOfficeNum',
            type: 'input',
            message: 'What is the managers office number?',
            validate: (answer) => {
                const id = answer.match(/^[1-9]\d*$/);
                if(id) {
                    return true
                }   
                return "Please enter an office number.";        
            },
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: 'What is this managers email address?',
            validate: (answer) => {
                const email = answer.match(/\S+@\S+\.\S+/);
                if(email) {
                    return true
                }   
                return "Please enter a valid email address.";        
            },
        },
        
    ])
    const manager = new Manager(
        managerInfo.managerName,
        managerInfo.managerId,
        managerInfo.managerEmail,
        managerInfo.managerOfficeNum
        );

        teamMembers.push(manager);
        createTeam();
    };


    const createEngineer = async () => {
    const engineerInfo = await inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: 'What is this Engineers name?',
            validate: (answer) => {
                if(answer) {
                    return true
                }   
                return "Please enter a name.";        
            },
        },
        {
            name: 'engineerId',
            type: 'input',
            message: 'What is the Engineers ID?',
            validate: (answer) => {
                const id = answer.match(/^[1-9]\d*$/);
                if(id) {
                    return true
                }   
                return "Please enter an ID.";        
            },
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is the engineers github?',
            validate: (answer) => {
                if(answer) {
                    return true
                }   
                return "Please enter at least 1 character.";        
            },
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: 'What is this engineers email address?',
            validate: (answer) => {
                const email = answer.match(/\S+@\S+\.\S+/);
                if(email) {
                    return true
                }   
                return "Please enter a valid email address.";        
            },
        },
    ]);

        const engineer = new Engineer(
            engineerInfo.engineerName,
            engineerInfo.engineerId,
            engineerInfo.engineerEmail,
            engineerInfo.github
            );
        
            teamMembers.push(engineer);
            createTeam();
    };
        
    const createIntern = async () => {
            const internInfo = await inquirer.prompt([
                {
                    name: 'internName',
                    type: 'input',
                    message: 'What is this interns name?',
                    validate: (answer) => {
                        if(answer) {
                            return true
                        }   
                        return "Please enter a name.";        
                    },
                },
                {
                    name: 'internId',
                    type: 'input',
                    message: 'What is the interns ID?',
                    validate: (answer) => {
                        const id = answer.match(/^[1-9]\d*$/);
                        if(id) {
                            return true
                        }   
                        return "Please enter an ID.";        
                    },
                },
                {
                    name: 'school',
                    type: 'input',
                    message: 'Where does the intern attend school?',
                    validate: (answer) => {
                        if(answer) {
                            return true
                        }   
                        return "Please enter a school name.";        
                    },
                },
                {
                    name: 'internEmail',
                    type: 'input',
                    message: 'What is this interns email address?',
                    validate: (answer) => {
                        const email = answer.match(/\S+@\S+\.\S+/);
                        if(email) {
                            return true
                        }   
                        return "Please enter a valid email address.";        
                    },
                },
                
            ])

            const intern = new Intern(
                internInfo.internName,
                internInfo.internId,
                internInfo.internEmail,
                internInfo.school
                );

                teamMembers.push(intern);
                createTeam();
    };
        
    const createTeam = async () => {
    const teamMembers = await inquirer.prompt([
        {
        type: "list",
        name: "role",
        message: "What is the employee's role at your company?",
        choices: ["Engineer", "Intern", "There are no more employees to add"],
        },
    ]);

        switch (teamMembers.role) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                renderHtml();
        }
    };

   
    function renderHtml ()  {
        const outputDir = path.resolve(__dirname, "dist");
        const outputPath = path.join(outputDir, "team.html");

        fs.writeFileSync(outputPath, generateEmployees(teamMembers), "UTF-8")
        console.log("Team profile generated!")
    };


    createManager();

};

init();
