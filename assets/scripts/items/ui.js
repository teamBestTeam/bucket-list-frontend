// const fillers = require('../fillers/events')
// const store = require('../store')

const onCreateItemSuccess = function (data) {
  console.log('Created Item!', data)
}

const onCreateItemFailure = function () {
  console.log('You failed...')
}

const onIndexItemsSuccess = function (data) {
  console.log('See your items!', data)
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

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure,
  onIndexItemsSuccess,
  onIndexItemsFailure,
  onShowItemSuccess,
  onShowItemFailure
}
