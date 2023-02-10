const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, role, id, email, github){
        super(name, role, id, email);
        this.github = github; 
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;