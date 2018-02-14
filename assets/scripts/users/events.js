
const onSignInSubmit = function () {
  console.log('yo girl')
}

const userEventListeners = function () {
  $('#content').on('submit', '#signInForm', onSignInSubmit)
}

module.exports = {
  userEventListeners
}
