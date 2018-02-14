'use strict'
// Use strict affects what config.apiOrigin does.
const config = require('../config.js')

const signInUser = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signUpUser = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  signInUser,
  signUpUser
}
