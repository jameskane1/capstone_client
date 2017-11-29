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

  // changePW
  $('#changePW-form').on('submit', submitValues.onChangePassword)

  // signOut
  $('#logOut-button').on('click', submitValues.onSignOut)
  // $('#logOut-button').on('click', loginClicks = 0)

  // get Weather ID
  $('.getWeatherId').on('submit', submitValues.onGetWeatherId)
  // get Sport ID
  $('#getSportId').on('submit', submitValues.onGetSportId)

  // get Celeb ID
  $('#getCelebId').on('submit', submitValues.onGetCelebId)

  // get News ID
  $('#getNewsId').on('submit', submitValues.onGetNewsId)

  // edit weather submit
  $('#editWeatherSubmit').on('submit', submitValues.onEditWeatherSubmit)
  // edit sport submit
  $('#editSportSubmit').on('submit', submitValues.onEditSportSubmit)

  // edit Celeb submit
  $('#editCelebSubmit').on('submit', submitValues.onEditCelebSubmit)

  // edit news submit
  $('#editNewsSubmit').on('submit', submitValues.onEditNewsSubmit)

  // delte Weather Widget
  $('#weatherDelete').on('click', submitValues.onWeatherDelete)
  //  sport delete
  $('#sportDelete').on('click', submitValues.onSportDelete)
  //  Celeb delete
  $('#celebDelete').on('click', submitValues.onCelebDelete)

  //  News delete
  $('#newsDelete').on('click', submitValues.onNewsDelete)

  // create Weather Widget
  $('#createWeatherForm').on('submit', submitValues.onWeatherCreate)

  // create Sport Widget
  $('#createSportForm').on('submit', submitValues.onSportCreate)

  // create Celeb Widget
  $('#createCelebForm').on('submit', submitValues.onCelebCreate)
  // create news Widget
  $('#createNewsForm').on('submit', submitValues.onNewsCreate)

  // create Weather field closeWeather
  $('#createWeather').click(function () {
    $('.createWeatherEmpty').val('')
    $('#editWeatherMessage').empty()
    $('#fullCreateWeatherForm').removeClass('hide')
  })

  // create Sport field closeModal
  $('#createSport').click(function () {
    $('.createSportEmpty').val('')
    $('#createSportMessage').empty()
    $('#fullCreateSportForm').removeClass('hide')
  })

  // create celeb field clear
  $('#createCeleb').click(function () {
    $('.createCelebEmpty').val('')
    $('#createCelebMessage').empty()
    $('#fullCreateCelebForm').removeClass('hide')
  })

  // create news field clear
  $('#createNews').click(function () {
    $('.createNewsEmpty').val('')
    $('#createNewsMessage').empty()
    $('#fullCreateNewsForm').removeClass('hide')
  })

  // close modal clearing
  $('.closeModal').on('click', submitValues.onCloseModal)

  // get weather wunderground Data
  $('#weatherUnderground').on('click', submitValues.onGetWeatherUnderground)
  // create weather underground widget

  // THIS IS WHAT YOU WANT FOR THE NEW WIDGET
  $('#createWeatherUndergroundForm').on('submit', submitValues.onUndergroundCreate)
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
