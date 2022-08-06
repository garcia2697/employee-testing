// export function to generate entire page

const Manager = require("../lib/Manager");
const index=require('../index.js')

const generateManager = (manager) => {
  return `



    <div class="card-body"> 
        <div>
            <ul class="list-group">
              <li class="list-group-item">${index.managerResponses.id}</li>
              <li class="list-group-item">Email:${index.managerResponses.id}</li>
              <li class="list-group-item">Office Number: ${index.managerResponses.id} </li>
            </ul>
        </div>
    </div>

      
    
  `;
};
  

// const generateEngineer = EngineerArr => {
//   return `
//     <section class="my-3" id="portfolio">
//       <div class="flex-row justify-space-between">
//       ${EngineerArr
//         .filter(({ confirmAddUser }) => confirmAddUser)
//         .map(({ name}) => {
//           return `
//           <div class="col-12 mb-2 bg-dark text-light p-3">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
            
//           </div>
//         `;
//         })
//         return job.join('')}

//         ${EngineerArr
//           .filter(({ confirmAddUser }) => !confirmAddUser)
//           .map(({ name}) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>

//             </div>
//           `;
//           })
//           .join('')}

//       </div>
//     </section>
//   `;
// };

// const generateIntern = InternArr => {
//   return `
//     <section class="my-3" id="portfolio">
//       <div class="flex-row justify-space-between">
//       ${InternArr
//         .filter(({ confirmAddUser }) => confirmAddUser)
//         .map(({ name}) => {
//           return `
//           <div class="col-12 mb-2 bg-dark text-light p-3">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
            
//           </div>
//         `;
//         })
//         return job.join('')}

//         ${InternArr
//           .filter(({ confirmAddUser }) => !confirmAddUser)
//           .map(({ name}) => {
//             return `
//             <div class="col-12 mb-2 bg-dark text-light p-3">
//               <h3 class="portfolio-item-title text-light">${name}</h3>

//             </div>
//           `;
//           })
//           .join('')}

//       </div>
//     </section>
//   `;
// };


module.exports = templateData => {
  const { users,manager, ...data } = templateData;
  

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
            <h5 class="card-title">${data.name}</h5>
            <img src="..." class="card-img-top" alt="...">
            <p class="card-text"></p>  
        </div>

        <div class="card-body"> 
            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID:${data.id}</li>
                    <li class="list-group-item">Email:${data.email}</li>
                    <li class="list-group-item">Office Number: ${data.office} </li>
                </ul>
            </div>
            <br>
        
        
        </div>
    </div>

      
  </main>
  </body>
  </html>
  `;
};