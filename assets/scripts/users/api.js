// const config = require('../config.js')

const signInUser = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/sign-in',
    method: 'POST',
    data
  })
}

module.exports = {
  signInUser
}
