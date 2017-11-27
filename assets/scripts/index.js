'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

$(() => {
  setAPIOrigin(location, config)

  // hides sign in when clicking sign up
  $('#sign-up-button').click(function () {
    const clicks = $(this).data('clicks')
    if (clicks) {
      $('#sign-in-button').removeClass('hide')
    } else {
      $('#sign-in-button').addClass('hide')
    }
    $(this).data('clicks', !clicks)
  })

  // hides sign-up when selecting sign in
  $('#sign-in-button').click(function () {
    const clicks = $(this).data('clicks')
    if (clicks) {
      $('#sign-up-button').removeClass('hide')
    } else {
      $('#sign-up-button').addClass('hide')
    }
    $(this).data('clicks', !clicks)
  })

  // signup
  $('#sign-up-form').on('submit', submitValues.onSignUp)

  // signin
  $('#sign-in-form').on('submit', submitValues.onSignIn)

  // changePW
  $('#changePW-form').on('submit', submitValues.onChangePassword)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
