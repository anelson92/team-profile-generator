const Manager = require("../src/Manager")

describe("Manager", () => {

    let manager = new Manager('Amanda', '123', 'amanda@mail.com', 'Manager', '999')

    it('should return the employees name', () => {
        expect(manager.getName()).toEqual('Amanda');
    })

    it('should return the employees id', () => {
        expect(manager.getId()).toEqual('123');
    })
        
    it("should return the employee's email", () => {
        expect(manager.getEmail()).toEqual('amanda@mail.com'); 
    })

    it("should return the employee's role", () => {
        expect(manager.getRole()).toEqual('Manager');
    })

    it("should return the employee's office number", () => {
        expect(manager.getOfficeNum()).toEqual('999');
    })
})