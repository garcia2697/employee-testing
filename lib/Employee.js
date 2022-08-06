class Employee{

    constructor(name,ID,email){
    this.name=name;
    this.ID=ID;
    this.email=email;
}
getName () {
    return this.name;
}

getID () {
    return this.ID;
}

getemail () {
    return this.email;
}

getRole(){
    return 'Employee'
}
};

module.exports = Employee