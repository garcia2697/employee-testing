const Employee = require("../lib/Employee")

test('create Employee object',()=>{
    const employee= new Employee('tony','gmail@gmail.com',1)

    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getemail()).toEqual(expect.any(String))
    expect(employee.getID()).toEqual(expect.any(Number))
})

test('name',()=>{
    const employee= new Employee('tony','gmail@gmail.com',1)

    expect(employee.getName()).toEqual(expect.any(String))
    
})

test('email',()=>{
    const employee= new Employee('tony','gmail@gmail.com',1)

    expect(employee.getemail()).toEqual(expect.any(String))
    
})

test('id',()=>{
    const employee= new Employee('tony','gmail@gmail.com',1)

    expect(employee.getID()).toBe(1)
    
})

