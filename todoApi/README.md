# API Documentation

Base URL: `localhost:8000/v1`

## To-do Endpoints

### GET All To-do Items
- **URL:** `/todo/read`
- **Description:** Retrieves all to-do items.
- **Request Type:** GET

### GET To-do Items by User
- **URL:** `/todo/getUser/:userId`
- **Description:** Retrieves to-do items created by a specific user.
- **Request Type:** GET

### Create To-do Item
- **URL:** `/todo/create`
- **Description:** Creates a new to-do item.
- **Request Type:** POST
- **Body Format:**
  ```json
  {
      "title": "node",
      "description": "node work",
      "workStatus": false,
      "userId": "65e1df41e42fc8ed4e2fbfbf"
  }


### Update To-do Item

- URL: `/todo/update/:todoId`
- Description: Updates an existing to-do item.
- Request Type: `PUT`

### Delete To-do Item

- URL: `/todo/delete/:todoId`
- Description: Deletes a to-do item.
- Request Type: `DELETE`



## User Endpoints

### GET All Users

- URL: `/user/read`
- Description: Retrieves all users.
- Request Type: `GET`

### Create User

- URL: `/user/create`
- Description: Creates a new user.
- Request Type: `POST`
- Body Format:
  ```json
  {
      "userName": "abhi",
      "email": "abhi@gmail.com",
      "password": "abhisa123"
  }



### Update User

- URL: `/user/update/:userId`
- Description: Updates an existing user.
- Request Type: `PUT`

### Delete User

- URL: `/user/delete/:userId`
- Description: Deletes a user.
- Request Type: `DELETE`