const axios = require('axios')

const Practice = {
    add: (a, b) => a + b,
    checkValue: x => x,
    CreateUser: () => {
        const user = { Name: "Surya", Age: "21" }
        return user
    },

    FetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(error => "error"),

}

module.exports = Practice