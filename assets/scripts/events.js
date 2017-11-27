'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignUp(data)
    .then(ui.signUpSuccess)
    .then(() => api.createSignIn(data))
    .then(ui.signInSuccess)
    .then(ui.hideOnSignIn)
    .then(ui.showOnSignIn)
    .then(() => {
      $('#sign-up-form')[0].reset()
    })
    .then(() => {
      $('#sign-in-form')[0].reset()
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignIn(data)
    .then(ui.signInSuccess)
    .then(ui.hideOnSignIn)
    .then(ui.showOnSignIn)
    .then(onPageLoad)
    .then(() => {
      $('#sign-in-form')[0].reset()
    })
    .then(() => {
      $('#sign-up-form')[0].reset()
    })
    .catch(ui.signInFailure)
}

const onPageLoad = function () {
  api.weatherData()
    .then(ui.showWeatherData)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then(() => {
      $('#changePW-form')[0].reset()
    })
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .then(ui.hideOnSignOut)
    .then(ui.showOnSignOut)
    .catch(ui.signOutFailure)
}

export {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPageLoad
}
