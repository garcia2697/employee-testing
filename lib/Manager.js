const Employee = require('./Employee.js') 
class Manager extends Employee{

    constructor(office,name,id,email){
    
        super(name,id,email)
    this.office=office;
}
getOfficeNumber(){
    return this.office;
}
getRole(){
    return 'Manager'
}
getName(){
    return this.name
}
};

module.exports = Manager;
