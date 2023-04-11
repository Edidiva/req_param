const express = require("express");
const app = express();
const users =[
     {
        name: "edikan",
        age: 26,
        sex: "female"
     }

]

app.get("/", function (request, response) {
    return response.send("Hello world");
});

app.get("/user/:name", function(request, response){
    const name = request.params.name;
    const user = users.find(user => user.name == name)
    if (!user) {
        return response.status(404).json(
            {
                status: "404 error",
                message: "user not found, pls enter a valid username"
            }
        )
        
    }
    else
    return response.status(200).json({
        status: "200 OK",
        user
    })

})

app.post("/user/create")


app.listen(8000, function(){
    console.log("The server has started at the port 8000")
})

