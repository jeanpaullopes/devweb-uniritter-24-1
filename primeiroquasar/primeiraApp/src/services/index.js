import axios from 'axios';

const services = {
  usersList: new Map(),
  getPosts: (callback) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (callback != undefined) callback(response.data)
    })
  },
  getUserById: async (id, callback) => {

        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (callback != undefined) callback(response.data)

    }



};

export default services;
