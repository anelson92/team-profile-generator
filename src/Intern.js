const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, "Intern", id, email);
        this.school = school; 
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Intern;