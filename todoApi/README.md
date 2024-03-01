base url =>'localhost:8000/v1'

<!-- middle -->
todo => '/todo'


<!-- EndPoint -->
get todo  => '/read'                      //get all todo list
get todo by user => '/getUser/:userId'     // get list create by user 
post todo => '/create'                    // create todo list
put todo => '/update/:todoId'             //update todo
delete todo => '/delete/:todoId'           // delete todo


todo body sand=> {
    "title":"node",
    "description":"node work",
    "workStatus":false,
    "userId":"65e1df41e42fc8ed4e2fbfbf"
}


todo body get =>{
    "message": "data get scusses",
    "data": [
        {
            "_id": "65e1e30ee11fe43b0cb8655b",
            "title": "work",
            "description": "project work",
            "workStatus": false,
            "userId": {
                "_id": "65e1df41e42fc8ed4e2fbfbf",
                "userName": "krishna sharma",
                "email": "abc@gmail.com",
                "password": "abc123",
                "__v": 0
            },
            "__v": 0
        }
    ]
}






<!-- middle -->
user => '/user'


<!-- EndPoint -->
get user  => '/read'                      //get all user list
post user => '/create'                    // create user list
put user => '/update/:userId'             //update user
delete user => '/delete/:userId'           // delete user




user body sand=> {
    "userName": "abhi",
"email":"abhi@gmail.com",
"password":"abhisa123"
}


user body get =>{
    "message": "get data",
    "data": [
        {
            "_id": "65e1df41e42fc8ed4e2fbfbf",
            "userName": "krishna sharma",
            "email": "abc@gmail.com",
            "password": "abc123",
            "__v": 0
        },
    ]
}
