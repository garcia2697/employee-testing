
const Manager= require('../lib/Manager');

test('role',()=>{
    const manager = new Manager('tony','gmail@gmail.com',1,2)

    expect(manager.getRole()).toBe('Manager')
})

test('office',()=>{
    const manager = new Manager('tony','gmail@gmail.com',1,2)

    expect(manager.getOfficeNumber()).toBe(2)
})
