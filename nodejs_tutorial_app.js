
const express = require("express");
const app = express();
const users =[];

app.get("/", function (request, response) {
    return response.send("Hello world");
});

app.get("/user/:name/:age/:sex", function(request, response){
    const name = request.params.name;
    const age = request.params.age;
    const sex = request.params.sex;
    const user = {name,age,sex};
    
    users.push(user);

    return response.json(user);

})

app.get('/users', (req, res) => {
    res.json(users);
  });

app.listen(8000, function(){
    console.log("The server has started at the port 8000")
})

