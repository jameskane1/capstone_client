'use strict'
const store = require('./store')
const showWeathersTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/fullDashboard.handlebars')
const showSportsTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/sportDashboard.handlebars')
const showCelebTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/celebDashboard.handlebars')
const showNewsTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/news.handlebars')

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
  const showPlaysHtml = showWeathersTemplate({ weathers: data.weathers })
  store.weathers = data.weathers
  console.log('sore.weathers is ', store.weathers)
  $('#fullDashboard').append(showPlaysHtml)
}

const showSportData = function (data) {
  const showSportHtml = showSportsTemplate({ sports: data.sports })
  $('#fullDashboard').append(showSportHtml)
}

const showCelebData = function (data) {
  const showCelebHtml = showCelebTemplate({ celebs: data.celebs })
  $('#fullDashboard').append(showCelebHtml)
}

const showNewsData = function (data) {
  const showNewsHtml = showNewsTemplate({ news_papers: data.news_papers })
  $('#fullDashboard').append(showNewsHtml)
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
  $('#createNavBar').addClass('hide')
  $('#dash').addClass('hide')
}

const showOnSignIn = function () {
  $('#logOut-button').removeClass('hide')
  $('#changePW').removeClass('hide')
  $('#createNavBar').removeClass('hide')
  $('#dash').removeClass('hide')
}

const showOnSignOut = function () {
  $('#sign-in-button').removeClass('hide')
  $('#sign-up-button').removeClass('hide')
  $('#nav-collapse4').addClass('hide')
  $('#nav-collapse2').removeClass('hide')
  $('#nav-collapse3').removeClass('hide')
}

const getWeatherIdSuccess = function (data) {
  store.weather1 = data.weather
  $('#getWeatherIdForm').addClass('hide')
  $('#editWeatherForm').removeClass('hide')
  $('#editWeatherCity').val(store.weather1.city)
  $('#editWeatherZip').val(store.weather1.zip)
  $('#editWeatherGoogle').val(store.weather1.google)
  $('#editMessage').text('Your input play has been selected to be edited')
}

const getWeatherIdFailure = function (error) {
  $('#editMessage').text('We were unable to locate your widget ID. Please try again.', error)
}

const editWeatherSuccess = function () {
  $('#editMessage').text('You have successfully updated your weather app')
}

const deleteWeatherSuccess = function () {
  $('#editMessage').text('You have successfully deleted your weather app')
  $('#editWeatherForm').addClass('hide')
}

const createWeatherSuccess = function () {
  $('#editWeatherMessage').text('You have successfully created your weather app')
  $('#fullCreateWeatherForm').addClass('hide')
}

const createWeatherFailure = function (error) {
  $('#editWeatherMessage').text('We were unable to create your widget. Please try again.', error)
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
  failure,
  showSportData,
  showCelebData,
  showNewsData,
  editWeatherSuccess,
  getWeatherIdSuccess,
  deleteWeatherSuccess,
  createWeatherSuccess,
  createWeatherFailure,
  getWeatherIdFailure
}
