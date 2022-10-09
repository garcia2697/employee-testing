const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer=require('inquirer');
const fs = require('fs');

// was being used, decided to generate the index.js file since I wouldn't have to deal with export and import
const generatePage = require('./src/page-template.js');

// initializes employee array
const employees = [];
this.manager=[];
this.engineer=[];
this.intern=[];

// asks you what employee you want to add
const promptUser = () => {
    return inquirer.prompt([{
        type:'list',
        name:'Employee',
        messages:'List Employee Position',
        choices:["Manager","Engineer","Intern"]
    }
    ])
    .then(choices)
};


// based off what the user pick, the if statement will take you to employee role array
const choices= (promptUser)=>{
    if (promptUser.Employee === "Manager"){
        return addManager();
        
    } else if(promptUser.Employee === "Engineer") {
        return addEngineer();
    } else{
        return addIntern(); 
    }
}


// adds a manager
addManager= () =>{
  
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'id',
            message:'What is your ID?'
        },
        {
        type:'input',
        name:'office',
        message:'What is your office number?'
        }   
    ])
    .then(userData =>{
        this.manager= new Manager(userData.name, userData.email, userData.id,userData.office)
        this.manager.getRole();
        employees.push(this.manager);
        console.log(employees)
    })
    .then(addUsers)
    
    
};


addEngineer= () =>{

    // Ask what the employee's roles are
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'id',
            message:'What is your ID?'
        },
        {
        type:'input',
        name:'github',
        message:'What is your github username?'
        }   
    ])
    .then(userData =>{
        this.engineer= new Engineer(userData.name, userData.email, userData.id,userData.github)
        this.engineer.getRole();
        employees.push(this.engineer);
        console.log(employees)
    })
    .then(addUsers)
    
}

addIntern = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?'
        },
        {
            type:'input',
            name:'email',
            message:'What is your email?'
        },
        {
            type:'input',
            name:'id',
            message:'What is your ID?'
        },
        {
        type:'input',
        name:'school',
        message:'What school do you attend?'
        }   
    ])
    .then(userData =>{
        this.intern= new Intern(userData.name, userData.email, userData.id,userData.school)
        this.intern.getRole();
        employees.push(this.intern);
        console.log(employees)
    })
    .then(addUsers)
    
    
}

// Function confirms if you want to add another user or finish all the users.
addUsers = () => {
    
    return inquirer
        .prompt([
        {
            type: 'confirm',
            name: 'confirmAddUser',
            message: 'Would you like to add another user?',
            default: false
        }
        ])
        .then(employeeData => {
        
        if (employeeData.confirmAddUser) {
            return  promptUser();
            
        } else {
            return console.log("finished")
        }
    })
};


// generates the page using the generateHTML function, distributes it into the dist folder.
generates= () =>{
    const pageHTML= generateHTML(employees);
    console.log( employees);


    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
}



// starts the user 
promptUser()
.then(generates)







// originally in the generatepage file in the src folder. It was brought into the index for ease of use.

const generateHTML = (employees) => {

  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Employee</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
      <link rel="stylesheet" href="../assets/style.css">
  </head>
  <body>


  <style>
    h1 {
        text-align: center;
        color: white;
      
    }
    
    header{
        background-color: rgb(240, 74, 56);
        padding: 50px;
    }

  </style>

  <header>

    <h1>My Team</h1>
  
  </header>  
      
  <main>
    <br>
    <div class="card " style="width: 18rem;">
        
        
        <div class = "text-bg-primary mb-3">
            <h5 class="card-title"></h5>
            
            <p class="card-text">Manager</p>  
        </div>

        <div class="card-body"> 
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Name:${employees[0].name}</li>
                    <li class="list-group-item">ID:${employees[0].id}</li>
                    <li class="list-group-item">Email:<a href="mailto:${employees[0].email}">${employees[0].email}<a></li>
                    <li class="list-group-item">Office Number:${employees[0].office}  </li>
                </ul>
            </div>
            <br>
        </div>

        

    </div>
    <br>
    <div class="card " style="width: 18rem;">
        
        
        <div class = "text-bg-primary mb-3">
            <h5 class="card-title"></h5>
    
            <p class="card-text">Engineer</p>  
        </div>

        <div class="card-body"> 
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Name:${employees[1].name}</li>
                    <li class="list-group-item">ID:${employees[1].id}</li>
                    <li class="list-group-item">Email:<a href="mailto:${employees[1].email}"> ${employees[1].email}<a></li>
                    <li class="list-group-item">GitHub:<a href="https://github.com/${employees[1].github}"> ${employees[1].github}<a></li>
                </ul>
            </div>
            <br>
        </div>

        

    </div>

    <br>

    <div class="card " style="width: 18rem;">
        
        
        <div class = "text-bg-primary mb-3">
            <h5 class="card-title"></h5>
    
            <p class="card-text">Intern</p>  
        </div>

        <div class="card-body"> 
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Name:${employees[2].name}</li>
                    <li class="list-group-item">ID:${employees[2].id}</li>
                    <li class="list-group-item">Email:<a href="mailto:${employees[2].email}">${employees[2].email}<a></li>
                    <li class="list-group-item">School:${employees[2].school}  </li>
                </ul>
            </div>
            
        </div>

        

    </div>

    
      
  </main>
  </body>
  </html>
  `;
    
};
    



        