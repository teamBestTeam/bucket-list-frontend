const fillers = require('../fillers/events')
const store = require('../store')

const onSignInSuccess = function (data) {
  fillers.onProfileLoad()
  store.user = data.user
}

const onSignInFailure = function () {
  $('#errorMessageSignIn').text('Sign in failed. It\'s not you, it\'s us.')
}

const onSignUpSuccess = function () {
  fillers.onSignInLoad()
}

const onSignUpFailure = function () {
  $('#errorMessageSignUp').text('Sign up failed. It\'s not you, it\'s us.')
}

const passwordMissMatch = function () {
  $('#errorMessageSignUp').text('Your passwords don\'t match! Try another password.')
}

const onChangePassSuccess = function () {
  console.log('YOU WERE SUCCESSFUL')
}

const onChangePassFailure = function () {
  console.log('you failed')
}

const onSignOutSuccess = function () {
  store.user = null
  fillers.onPageLoad()
}

const onSignOutFailure = function () {
  $('#errorMessageProfile').text('Unable to sign out.')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignUpSuccess,
  onChangePassSuccess,
  onChangePassFailure,
  onSignOutFailure,
  onSignOutSuccess,
  passwordMissMatch
}
