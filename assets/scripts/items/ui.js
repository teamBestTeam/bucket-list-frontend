// const store = require('../store')
const indexItemsTemplate = require('../templates/indexItems.handlebars')

const onCreateItemSuccess = function (data) {
  console.log('Created Item!', data)
}

const onCreateItemFailure = function () {
  console.log('You failed...')
}

const onIndexItemsSuccess = function (data) {
  console.log(data.items, 'items')
  const indexItemsHTML = indexItemsTemplate({'items': data.items})
  $('#bucketListBucket').html(indexItemsHTML)
}

const onIndexItemsFailure = function () {
  console.log('You failed...no items')
}

const onShowItemSuccess = function (data) {
  console.log('See your item!', data)
}

const onShowItemFailure = function () {
  console.log('You failed...no item for you')
}

const onUpdateItemSuccess = function (data) {
  console.log('Item updated', data)
}

const onUpdateItemFailure = function () {
  console.log('You failed...to update item')
}

const onDeleteItemSuccess = function () {
  console.log('Item deleted')
}

const onDeleteItemFailure = function () {
  console.log('You failed...to delete item')
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onIndexItemsSuccess,
  onIndexItemsFailure,
  onShowItemSuccess,
  onShowItemFailure,
  onUpdateItemSuccess,
  onUpdateItemFailure,
  onDeleteItemSuccess,
  onDeleteItemFailure
}
