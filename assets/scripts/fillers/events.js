const mainTemplate = require('../templates/main.handlebars')
const signUpTemplate = require('../templates/signUp.handlebars')
const signInTemplate = require('../templates/signIn.handlebars')

const onPageLoad = function () {
  const mainHTML = mainTemplate()
  $('#content').html(mainHTML)
}
const onSignUpLoad = function () {
  const signUpHTML = signUpTemplate()
  $('#content').html(signUpHTML)
}

const onSignInLoad = function () {
  const signInHTML = signInTemplate()
  $('#content').html(signInHTML)
}

const eventListeners = function () {
  $('#content').on('click', '#signIn', onSignInLoad)
  $('#content').on('click', '#signUp', onSignUpLoad)
}

module.exports = {
  onPageLoad,
  eventListeners

}
