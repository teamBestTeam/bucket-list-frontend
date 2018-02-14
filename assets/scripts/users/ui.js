
const onSignInSuccess = function () {
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

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignUpSuccess
}
