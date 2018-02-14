'use strict'
// Use strict affects what config.apiOrigin does.
const config = require('../config.js')
const store = require('../store')

const createItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createItem
}
