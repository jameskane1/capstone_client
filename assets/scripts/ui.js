'use strict'
const store = require('./store')
const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unsuccessful. Please try again.', error)
}

export {
  signUpFailure,
  signUpSuccess
}
