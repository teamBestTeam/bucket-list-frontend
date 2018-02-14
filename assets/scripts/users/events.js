const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignInSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signInUser(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const userEventListeners = function () {
  $('#content').on('submit', '#signInForm', onSignInSubmit)
}

module.exports = {
  userEventListeners
}
