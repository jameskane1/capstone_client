'use strict'
const store = require('./store')

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

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW. Please try again', error)
}

const hideOnSignIn = function () {
  $('#sign-in-button').addClass('hide')
  $('#sign-up-button').addClass('hide')
  $('#nav-collapse2').addClass('hide')
  $('#nav-collapse3').addClass('hide')
}

const hideOnSignOut = function () {

}

const showOnSignIn = function () {
  $('#logOut-button').removeClass('hide')
  $('#changePW').removeClass('hide')
}

const showOnSignOut = function () {

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
  changePasswordFailure
}
