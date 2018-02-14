'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const fillers = require('./fillers/events')
const users = require('./users/events')
const items = require('./items/events')

$(() => {
  setAPIOrigin(location, config)
  fillers.onPageLoad()
  fillers.eventListeners()
  users.userEventListeners()
  items.userEventListeners()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
