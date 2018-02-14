const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateItemSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.onCreateItemSuccess)
    .catch(ui.onCreateItemFailure)
}

const onIndexItemsClick = function () {
  api.indexItems()
    .then(ui.onIndexItemsSuccess)
    .catch(ui.onIndexItemsFailure)
}

const onShowItemSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showItem(data)
    .then(ui.onShowItemSuccess)
    .catch(ui.onShowItemFailure)
}

const onUpdateItemSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateItem(data)
    .then(ui.onUpdateItemSuccess)
    .catch(ui.onUpdateItemFailure)
}

const onDeleteItemSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteItem(data)
    .then(ui.onDeleteItemSuccess)
    .catch(ui.onDeleteItemFailure)
}

const userEventListeners = function () {
  $('#content').on('submit', '#createItemForm', onCreateItemSubmit)
  $('#content').on('click', '#indexItems', onIndexItemsClick)
  $('#content').on('submit', '#showItemForm', onShowItemSubmit)
  $('#content').on('submit', '#updateItemForm', onUpdateItemSubmit)
  $('#content').on('submit', '#deleteItemForm', onDeleteItemSubmit)
}

module.exports = {
  userEventListeners
}
