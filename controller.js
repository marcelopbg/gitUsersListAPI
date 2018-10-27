const axios = require('axios');

exports.getUser = (req, res,  next) => {
  axios.get('https://api.github.com/users?since='+req.query.number)
  .then(response => {
    var lastId = response.data[response.data.length-1].id

    res.send({0: response.data, 1: 'localhost:5000/users/since='+ (parseInt(lastId)+1)})
  }).catch(error => {
    res.send(error).status(500)
  })
}
exports.getUserDetails = (req, res, next) => {
  axios.get('https://api.github.com/users/'+req.params.username)
  .then(response => {
    res.send(response.data)
      console.log(response);
  }).catch(error => {
    res.send(error).status(500)
  })
}
exports.getUserRepos = (req, res, next) => {
  axios.get('https://api.github.com/users/'+req.params.username+'/repos')
  .then(response => {
    res.send(response.data)
      console.log(response);
  }).catch(error => {
    res.send(error).status(500)
  })
}
