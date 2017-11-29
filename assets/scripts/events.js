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
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .then(() => {
      $('#sign-in-form')[0].reset()
    })
    .then(() => {
      $('#sign-up-form')[0].reset()
    })
    .then(() => {
      $('.weatherEdit').click(function () {
        $('.idSeltor').val('')
        $('#editMessage').empty()
        $('.getWeatherIdForm').removeClass('hide')
        $('.editWeatherForm').addClass('hide')
      })
    })
    .catch(ui.signInFailure)
}

const onPageLoadWeather = function () {
  api.weatherData()
    .then(ui.showWeatherData)
    .catch(ui.failure)
}

const onPageLoadSport = function () {
  api.sportData()
    .then(ui.showSportData)
    .catch(ui.failure)
}

const onPageLoadCeleb = function () {
  api.celebData()
    .then(ui.showCelebData)
    .catch(ui.failure)
}

const onPageLoadNews = function () {
  api.newsData()
    .then(ui.showNewsData)
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
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(() => {
      $('.createWeatherEmpty').val('')
    })
    .catch(ui.signOutFailure)
}

const onGetWeatherId = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getWeatherId(data)
    .then(ui.getWeatherIdSuccess)
    .catch(ui.getWeatherIdFailure)
}

const onGetSportId = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getSportId(data)
    .then(ui.getSportIdSuccess)
    .catch(ui.getSportIdFailure)
}

const onEditWeatherSubmit = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.editWeather(data)
    .then(ui.editWeatherSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.failure)
}

const onEditSportSubmit = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.editSport(data)
    .then(ui.editSportSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.editSportFailure)
}

const onCloseModal = function () {
  $('.idSeltor').val('')
  $('#editMessage').empty()
  $('#editSportMessage').empty()
  $('.getWeatherIdForm').removeClass('hide')
  $('.editWeatherForm').addClass('hide')
  $('.getSportIdForm').removeClass('hide')
  $('.editSportForm').addClass('hide')
}

const onWeatherDelete = function (event) {
  event.preventDefault()
  api.deleteWeather()
    .then(ui.deleteWeatherSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.deleteWeatherFailure)
}

const onSportDelete = function (event) {
  event.preventDefault()
  api.deleteSport()
    .then(ui.deleteSportSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.deleteSportFailure)
}

const onWeatherCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createWeather(data)
    .then(ui.createWeatherSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadWeather)
    .then(onPageLoadSport)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.createWeatherFailure)
}

const onSportCreate = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createSport(data)
    .then(ui.createSportSuccess)
    .then(() => {
      $('#fullDashboard').empty()
    })
    .then(onPageLoadSport)
    .then(onPageLoadWeather)
    .then(onPageLoadCeleb)
    .then(onPageLoadNews)
    .catch(ui.createSportFailure)
}

export {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPageLoadWeather,
  onEditWeatherSubmit,
  onGetWeatherId,
  onWeatherDelete,
  onWeatherCreate,
  onGetSportId,
  onCloseModal,
  onEditSportSubmit,
  onSportDelete,
  onSportCreate
}
