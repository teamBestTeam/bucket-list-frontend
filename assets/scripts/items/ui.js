// const fillers = require('../fillers/events')
// const store = require('../store')

const onCreateItemSuccess = function (data) {
  console.log('Created Item!', data)
}

const onCreateItemFailure = function () {
  console.log('You failed...')
}

module.exports = {
  onCreateItemSuccess,
  onCreateItemFailure
}
