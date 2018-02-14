const mainTemplate = require('../templates/main.handlebars')


const onPageLoad = function () {
  const mainHTML = mainTemplate()
  $('#content').html(mainHTML)
}




module.exports = {
  onPageLoad
}
