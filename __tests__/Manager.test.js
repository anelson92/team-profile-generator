import Manager from "./src/Manager.js";

describe("Manager class", () => {

    let manager = new Manager('Amanda', '123', 'amanda@mail.com', 'umn')

    it('should return the employees name', () => {
        expect(intern.getName()).toEqual('Rick');
    })

    it('should return the employees id', () => {
        expect(intern.getId()).toEqual('345');
    })
        
    it("should return the employee's email", () => {
        expect(intern.getEmail()).toEqual('rick@mail.com'); 
    })

    it("should return the intern's school name", () => {
        expect(intern.getSchool()).toEqual('umn')
    })

    it("should return the employee's role", () => {
        expect(intern.getRole()).toEqual('Intern');
    })
})