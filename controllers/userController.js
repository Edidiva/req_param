

users = [
    {
      name:'edikan',
      age: '26',
      sex: 'female'
    }
  ]
  
  module.exports ={
   getUserController: (request, response) => {
        const name = request.params.name;
          const user = users.find(user => user.name == name)
          if (!user) {
              return response.status(400).json(
                  {
                      status: "400",
                      message: "user not found, pls enter a valid username"
                  }
              )
              
          }
          return response.status(200).json(
              user
          )
      },

    searchUsersController:  (request, response) => {
        const {name, age, sex} = request.query;
        let data = users;
        if(name) {
          data = data.filter(user => user.name.toLowerCase() == name.toLowerCase());
        }
        if(age) {
          data = data.filter(user => user.age == age);
        }
        if(sex) {
          data = data.filter(user => user.sex == sex);
        }
        return response.json(data);
      
      }


  }