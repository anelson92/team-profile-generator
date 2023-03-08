const Engineer = require("../src/Engineer")

describe('Engineer', () => {

    let engineer = new Engineer('bob', '987', 'bob@mail.com', 'bobgit', 'Engineer')

    it('should return the engineers name', () => {
        expect(engineer.getName()).toEqual('bob');
    })

    it('should return the employees id', () => {
        expect(engineer.getId()).toEqual('987');
    })
        
    it("should return the employee's email", () => {
        expect(engineer.getEmail()).toEqual('bob@mail.com'); 
    })

    it("should return the engineer's github", () => {
        expect(engineer.getGithub()).toEqual('bobgit');
    })

    it("should return the engineer's role (engineer)", () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })

})