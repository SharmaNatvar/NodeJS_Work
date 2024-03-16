project-name/
├── index.js     ()          
├── config/
│   ├── environment.js   
│   └── ...               
├── controllers/
│   ├── index.js    (all controller file call here example - user etc )
│   ├── userController.js   (all user controller here , get post logic write here , controller file call services file)
│   └── ...              
├── db/
│   ├── connection.js   (connect with database)  
│   └── ... 
├─  models/
│   ├── index.js    (all models file call here example - user etc )            
│   ├── User.js      (user model here)  
│   └── ...            
├── middleware/
│   ├── auth.js            
│   └── ...              
├── public/
│   ├── css/             
│   ├── images/           
│   └── js/              
├── routes/
│   ├── index.js              (all router file call here example - user etc )    
│   ├── user.js              (user router here , router call controller file )  
│   └── ...            
├── services/
│   ├── index.js              (all services file call here example - user etc )    
│   ├── userService.js                 (user service here , service file connet model and database and give respone to conteroller file)  
│   └── ...                         
└── views/
    ├── index.ejs           
    └── ...              

README.md               
package.json  