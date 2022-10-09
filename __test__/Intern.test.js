
const Intern= require('../lib/Intern');

test('role',()=>{
    const intern = new Intern('tony','gmail@gmail.com',1,2)

    expect(intern.getRole()).toBe('Intern')
})

test('school',()=>{
    const intern = new Intern('tony','gmail@gmail.com',1,'UT')

    expect(intern.getSchool()).toBe('UT')
})
