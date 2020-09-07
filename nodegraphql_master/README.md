Clone the project on your Local.
Install node packages using "npm i / npm install".
Configure the Local MognoDb/ hosted Mongo DB in index js.
Run the app using "npm start".
Excute the GraphQL playground on "http://localhost:4000/".

### GraphQL Query

```
query {
  userList { 
    username
    age
    contact_no
    blood_group
    nationality
  }
}
```

```
mutation{
  createUser(newUser: {
    username: "Wai Phyo"
    age: 20
    blood_group: "A",
    nationality: "MM"
    contact_no: 12345
  }) {
    username
    age
    contact_no
    blood_group
    nationality
  }
}
```

```
mutation {
  deleteUser(username: "Wai Phyo") {
    response
  }
}
```

```
subscription{
  user{
    username
    age
    contact_no
    blood_group
    nationality
  }
}
```