
const onSignInSuccess = function () {
  console.log('YOU WERE SUCCESSFUL')
}

const onSignInFailure = function () {
  console.log('you failed')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure
}
