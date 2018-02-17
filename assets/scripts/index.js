'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const fillers = require('./fillers/events')
const users = require('./users/events')
const items = require('./items/events')
// const twitter = require('./twitter')

$(() => {
  // window.twttr = (function (d, s, id) {
  //   const fjs = d.getElementsByTagName(s)[0]
  //   const t = window.twttr || {}
  //   if (d.getElementById(id)) return t
  //   const js = d.createElement(s)
  //   js.id = id
  //   js.src = 'https://platform.twitter.com/widgets.js'
  //   fjs.parentNode.insertBefore(js, fjs)
  //
  //   t._e = []
  //   t.ready = function (f) {
  //     t._e.push(f)
  //   }
  //   return t
  // }(document, 'script', 'twitter-wjs'))

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
