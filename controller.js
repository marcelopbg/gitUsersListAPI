const axios = require('axios');

exports.getUser = (req, res,  next) => {
  console.log(req.query.since);
  
  axios.get('http://api.github.com/users?since='+req.query.since).then(response => {
    // var lastId = response.data[respons   e.data.length-1].id
    console.log(response);
    // res.send(response.data)
    res.send({0: response.data, 1: 'localhost:5000/users/since='+req.query.since})
  }).catch(error => {
    res.send(error).status(500)
  })
}
exports.getUserDetails = (req, res, next) => {
  axios.get('http://api.github.com/users/'+req.params.username)
  .then(response => {
    res.send(response.data)
      console.log(response);
  }).catch(error => {
    res.send(error).status(500)
  })
}
exports.getUserRepos = (req, res, next) => {
  axios.get('http://api.github.com/users/'+req.params.username+'/repos')
  .then(response => {
    res.send(response.data)
      console.log(response);
  }).catch(error => {
    res.send(error).status(500)
  })
}
