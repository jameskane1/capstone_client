'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

$(() => {
  setAPIOrigin(location, config)

  // signup
  $('#sign-up-form').on('submit', submitValues.onSignUp)

  // signin
  $('#sign-in-form').on('submit', submitValues.onSignIn)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
