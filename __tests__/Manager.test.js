import Manager from "./src/Manager.js";

describe("Manager class", () => {

    let manager = new Manager('Amanda', '123', 'amanda@mail.com', '999')

    it('should return the employees name', () => {
        expect(manager.getName()).toEqual('Amanda');
    })

    it('should return the employees id', () => {
        expect(manager.getId()).toEqual('123');
    })
        
    it("should return the employee's email", () => {
        expect(manager.getEmail()).toEqual('Amanda@mail.com'); 
    })

    it("should return the employee's role", () => {
        expect(manager.getRole()).toEqual('Manager');
    })

    it("should return the employee's office number", () => {
        expect(manager.getOfficeNum()).toEqual('999');
    })
})