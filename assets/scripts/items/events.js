const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateItemSubmit = function (event) {
  console.log('here, item')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onCreateItemFailure)
}

const userEventListeners = function () {
  $('#content').on('submit', '#createItemForm', onCreateItemSubmit)
}

module.exports = {
  userEventListeners
}
