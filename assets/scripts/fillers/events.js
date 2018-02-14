const mainTemplate = require('../templates/main.handlebars')
const signUpTemplate = require('../templates/signUp.handlebars')
const signInTemplate = require('../templates/signIn.handlebars')
const profileTemplate = require('../templates/profile.handlebars')
const changePassTemplate = require('../templates/changePass.handlebars')

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

const onChangePassLoad = function () {
  const changePassHTML = changePassTemplate()
  $('#content').html(changePassHTML)
}

const onProfileLoad = function () {
  const profileHTML = profileTemplate()
  $('#content').html(profileHTML)
}

const eventListeners = function () {
  $('#content').on('click', '#signIn', onSignInLoad)
  $('#content').on('click', '#signUp', onSignUpLoad)
  $('#content').on('click', '#changePass', onChangePassLoad)
}

module.exports = {
  onPageLoad,
  onProfileLoad,
  eventListeners

}
