'use strict'
const store = require('./store')
const showPlaysTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/fullDashboard.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unsuccessful. Please try again.', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
}

const showWeatherData = function (data) {
  console.log('data is ', data)
  const showPlaysHtml = showPlaysTemplate({ weathers: data.weathers })
  $('#fullDashboard').append(showPlaysHtml)
}

const failure = function (error) {
  $('#message').text('Your signup was unsuccessful. Please try again.', error)
}

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW. Please try again', error)
}

const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('We were unable to sign you out')
}

const hideOnSignIn = function () {
  $('#sign-in-button').addClass('hide')
  $('#sign-up-button').addClass('hide')
  $('#nav-collapse2').addClass('hide')
  $('#nav-collapse3').addClass('hide')
}

const hideOnSignOut = function () {
  $('#logOut-button').addClass('hide')
  $('#changePW').addClass('hide')
}

const showOnSignIn = function () {
  $('#logOut-button').removeClass('hide')
  $('#changePW').removeClass('hide')
}

const showOnSignOut = function () {
  $('#sign-in-button').removeClass('hide')
  $('#sign-up-button').removeClass('hide')
  $('#nav-collapse4').addClass('hide')
  $('#nav-collapse2').removeClass('hide')
  $('#nav-collapse3').removeClass('hide')
}

export {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  hideOnSignIn,
  hideOnSignOut,
  showOnSignIn,
  showOnSignOut,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showWeatherData,
  failure
}
