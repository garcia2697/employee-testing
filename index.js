const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer=require('inquirer');
const fs = require('fs');

// was being used, decided to generate the index.js file since I wouldn't have to deal with export and import
const generatePage = require('./src/page-template.js');

// initializes employee array
const employees = [];


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


    // .then((managerResponses)=>{
    //     managerResponses.role="Manager";
    //     const {name, id, email, office, role}=managerResponses;
    //     const newManager = new Manager(name,id,email,office,role);
    //     employees.push(newManager);
    // })

    .then((managerResponses)=>{
        const newManager = new Manager(
            managerResponses.name,managerResponses.id,managerResponses.email,managerResponses.office,managerResponses.role
        )
        managerResponses.role="Manager";
        
        
        employees.push(newManager);
        console.log(managerResponses);
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
    .then((engineerResponses)=>{
        engineerResponses.role="Engineer";
        const {name, id, email, github, role}=engineerResponses;
        const newEngineer = new Engineer(name,id,email,github,role);
        employees.push(newEngineer);
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


    .then((internResponses)=>{
        internResponses.role="Intern";
        const {name, id, email, school, role}=internResponses;
        const newIntern = new Intern(name,id,email,school,role);
        employees.push(newIntern);
    })
    .then(addUsers)
    
    
}

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


generates= () =>{
    const pageHTML= generateHTML(employees);
    console.log( employees);


    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
}

test = (employees)=>{
    console.log(employees.addManager.managerResponses)
}




promptUser()

.then(generates)

// .then(test)






// the main issue here, been trying to generate the response to manager but keep having issues since it comes out as undefined. I'm trying to at least generate name.

const generateHTML = (employees) => {
    // const { users, ...data } = templateData;
  

  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Employee</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
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
      <div class="card " style="width: 18rem;">
          
          
        <div class = "text-bg-primary mb-3">
            <h5 class="card-title"></h5>
            <img src="..." class="card-img-top" alt="...">
            <p class="card-text"></p>  
        </div>

        <div class="card-body"> 
            <div>
                <ul class="list-group">
                    <li class="list-group-item">Name:${employees.managerResponses}:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">Office Number:  </li>
                </ul>
            </div>
            <br>
        
        
        </div>
    </div>

      
  </main>
  </body>
  </html>
  `;
    
    // return `
    
  
  
    //   <div class="card-body"> 
    //       <div>
    //           <ul class="list-group">
    //             <li class="list-group-item">${index.managerResponses.id}</li>
    //             <li class="list-group-item">Email:${index.managerResponses.id}</li>
    //             <li class="list-group-item">Office Number: ${index.managerResponses.id} </li>
    //           </ul>
    //       </div>
    //   </div>
  
        
      
    // `;
  };
    