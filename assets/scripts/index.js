'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

$(() => {
  setAPIOrigin(location, config)

  let clicks = 0

  // hides sign in when clicking sign up
  $('#sign-up-button').click(function () {
    $('#nav-collapse2').removeClass('hide')
    $('#nav-collapse3').removeClass('hide')
    clicks = $(this).data('clicks')
    if (clicks) {
      $('#sign-in-button').removeClass('hide')
    } else {
      $('#sign-in-button').addClass('hide')
    }
    $(this).data('clicks', !clicks)
  })

  // hides sign-up when selecting sign in
  $('#sign-in-button').click(function () {
    $('#nav-collapse2').removeClass('hide')
    $('#nav-collapse3').removeClass('hide')
    clicks = $(this).data('clicks')
    if (clicks) {
      $('#sign-up-button').removeClass('hide')
    } else {
      $('#sign-up-button').addClass('hide')
    }
    $(this).data('clicks', !clicks)
  })

  $('#changePW').click(function () {
    $('#nav-collapse4').removeClass('hide')
  })

  // signup
  $('#sign-up-form').on('submit', submitValues.onSignUp)

  // signin
  $('#sign-in-form').on('submit', submitValues.onSignIn)

  // changePW
  $('#changePW-form').on('submit', submitValues.onChangePassword)

  // signOut
  $('#logOut-button').on('click', submitValues.onSignOut)
  $('#logOut-button').on('click', clicks = 0)
  console.log('clicks is ', clicks)

  // get Weather ID
  $('#getWeatherId').on('submit', submitValues.onGetWeatherId)
  // edit weather submit
  $('#editWeatherSubmit').on('submit', submitValues.onEditWeatherSubmit)

  // releaad widgets after edit/Delete
  // $('#getWeatherIdClose').on('click', submitValues.onGetWeatherId)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
