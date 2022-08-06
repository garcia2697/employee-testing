const Employee = require('./Employee.js') 

class Intern extends Employee{

    constructor(school,name,ID,email){
    
        super(name,ID,email)
    this.school=school;
}
getSchool(){
    return this.school;
}
getRole(){
    return 'Intern'
}
};

module.exports = Intern;