import Employee from "./src/Employee.js";

describe("Employee class", () => {

    let worker = new Employee('Amanda', '123', 'amanda@mail.com')

    it('should return the employees name', () => {
        expect(worker.getName()).toEqual('Amanda');
    })

    it('should return the employees id', () => {
        expect(worker.getId()).toEqual('123');
    })
        
    it("should return the employee's email", () => {
        expect(worker.getEmail()).toEqual('amanda@mail.com'); 
    })

    it("should return the employee's role", () => {
        expect(worker.getRole()).toEqual('Employee');
    })
})