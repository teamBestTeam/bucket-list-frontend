const fillers = require('../fillers/events')
const store = require('../store')

const onSignInSuccess = function (data) {
  fillers.onProfileLoad()
  store.user = data.user
  console.log(store.user)
  console.log('YOU WERE SUCCESSFUL')
}

const onSignInFailure = function () {
  console.log('you failed')
}

const onSignUpSuccess = function () {
  console.log('YOU WERE SUCCESSFUL')
}

const onSignUpFailure = function () {
  console.log('you failed')
}

const onChangePassSuccess = function () {
  console.log('YOU WERE SUCCESSFUL')
}

const onChangePassFailure = function () {
  console.log('you failed')
}

const onSignOutSuccess = function () {
  console.log('YOU WERE SUCCESSFUL')
}

const onSignOutFailure = function (error) {
  console.log(error)
  console.log('you failed')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignUpSuccess,
  onChangePassSuccess,
  onChangePassFailure,
  onSignOutFailure,
  onSignOutSuccess
}
