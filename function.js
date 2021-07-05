const axios = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: function(){
        return null;
    },
    checkValue: x => x,  // same as function(x){return x}
    createUser: () => {
        const user = {
            firstName: "Ridwan"
        }
        user.lastName = "Olaniyi"
        return user
    },
    fetchUser: () => axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.data)
        .catch(err => "error")
}

module.exports = functions