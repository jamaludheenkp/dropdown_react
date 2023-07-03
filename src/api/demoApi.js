import axios from 'axios'

export default  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    timeout: 1000,
    headers:{},
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
