
const Engineer= require('../lib/Engineer');

test('role',()=>{
    const engineer = new Engineer('tony','gmail@gmail.com',1,2)

    expect(engineer.getRole()).toBe('Engineer')
})

test('getGithub',()=>{
    const engineer = new Engineer('tony','gmail@gmail.com',1,'gitName')

    expect(engineer.getGithub()).toBe('gitName')
})
