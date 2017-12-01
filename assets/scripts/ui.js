'use strict'
const store = require('./store')
const showWeathersTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/fullDashboard.handlebars')
const showSportsTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/sportDashboard.handlebars')
const showCelebTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/celebDashboard.handlebars')
const showNewsTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/news.handlebars')
const showUndergroundTemplate = require('/Users/n0252077/wdi/projects/capstone_client/capstone client/assets/scripts/templates/undergroundWeather.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unsuccessful. Please try again.', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully. To get started select a create button above!')
  store.user = data.user
  $('#userName').text(store.user.email)
}

const showWeatherData = function (data) {
  const showPlaysHtml = showWeathersTemplate({ weathers: data.weathers })
  store.weathers = data.weathers
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
  $('.welcomeMessage').addClass('hide')
}

const hideOnSignOut = function () {
  $('#logOut-button').addClass('hide')
  $('#changePW').addClass('hide')
  $('#createNavBar').addClass('hide')
  $('#dash').addClass('hide')
  $('#signUpHelp').empty()
}

const showOnSignIn = function () {
  $('#logOut-button').removeClass('hide')
  $('#changePW').removeClass('hide')
  $('#createNavBar').removeClass('hide')
  $('#dash').removeClass('hide')
  $('#nav-collapse4').removeClass('hide')
}

const showOnSignOut = function () {
  $('#sign-in-button').removeClass('hide')
  $('#sign-up-button').removeClass('hide')
  $('#nav-collapse4').addClass('hide')
  $('#nav-collapse2').removeClass('hide')
  $('#nav-collapse3').removeClass('hide')
  $('.welcomeMessage').removeClass('hide')
}

const getWeatherIdSuccess = function (data) {
  store.weather1 = data.weather
  $('.getWeatherIdForm').addClass('hide')
  $('#editWeatherForm').removeClass('hide')
  // for 3rd party api
  $('#undergroundForm').removeClass('hide')
  $('#editWeatherUndergroundMessage').empty()
  $('#undergroundCity').val(store.weather1.city)
  $('#undergroundState').val(store.weather1.state)

  $('#editWeatherCity').val(store.weather1.city)
  $('#editWeatherState').val(store.weather1.state)
  $('#editWeatherGoogle').val(store.weather1.google)
  $('#editMessage').text('Your input play has been selected to be edited')
}

const getSportIdSuccess = function (data) {
  store.sport1 = data.sport
  $('#getSportIdForm').addClass('hide')
  $('#editSportForm').removeClass('hide')
  $('#editSportTeam').val(store.sport1.team)
  $('#editSportLeague').val(store.sport1.league)
  $('#editSportGoogle').val(store.sport1.google)
  $('#editSportMessage').text('Your input Sport Widget has been selected to be edited')
}

const getCelebIdSuccess = function (data) {
  store.celeb1 = data.celeb
  $('#getCelebIdForm').addClass('hide')
  $('#editCelebForm').removeClass('hide')
  $('#editCelebName').val(store.celeb1.name)
  $('#editCelebAge').val(store.celeb1.age)
  $('#editCelebOccupation').val(store.celeb1.occupation)
  $('#editCelebGoogle').val(store.celeb1.google)
  $('#editCelebMessage').text('Your input Celeb Widget has been selected to be edited')
}

const getNewsIdSuccess = function (data) {
  store.news1 = data.news_paper
  $('#getNewsIdForm').addClass('hide')
  $('#editNewsForm').removeClass('hide')
  $('#editNewsName').val(store.news1.name)
  $('#editNewsSite').val(store.news1.site)
  $('#editNewsRegion').val(store.news1.region)
  $('#editNewsMessage').text('Your input News Widget has been selected to be edited')
}

const getWeatherIdFailure = function (error) {
  $('#editMessage').text('We were unable to locate your widget ID. Please try again.', error)
  $('#editWeatherUndergroundMessage').text('We were unable to locate your widget ID. Please try again.', error)
}

const getSportIdFailure = function (error) {
  $('#editSportMessage').text('We were unable to locate your widget ID. Please try again.', error)
}

const getCelebIdFailure = function (error) {
  $('#editCelebMessage').text('We were unable to locate your widget ID. Please try again.', error)
}

const getNewsIdFailure = function (error) {
  $('#editNewsMessage').text('We were unable to locate your widget ID. Please try again.', error)
}

const editWeatherSuccess = function () {
  $('#editMessage').text('You have successfully updated your weather app')
}

const editSportSuccess = function () {
  $('#editSportMessage').text('You have successfully updated your Sport app')
}

const editCelebSuccess = function () {
  $('#editCelebMessage').text('You have successfully updated your Celeb app')
}

const editNewsSuccess = function () {
  $('#editNewsMessage').text('You have successfully updated your News app')
}

const editCelebFailure = function () {
  $('#editCelebMessage').text('We were unable to update your widget at this time, please try again')
}

const editNewsFailure = function () {
  $('#editNewsMessage').text('We were unable to update your widget at this time, please try again')
}

const editSportFailure = function () {
  $('#editSportMessage').text('We were unable to update your widget at this time, please try again')
}

const editWeatherFailure = function () {
  $('#editMessage').text('We were unable to update your widget at this time, please try again')
}

const deleteWeatherSuccess = function () {
  $('#editMessage').text('You have successfully deleted your weather app')
  $('#editWeatherForm').addClass('hide')
}

const deleteWeatherFailure = function () {
  $('#editMessage').text('We were unable to delete your weather app. Please try again')
}

const deleteSportSuccess = function () {
  $('#editSportMessage').text('You have successfully deleted your Sport app')
  $('#editSportForm').addClass('hide')
}

const deleteCelebSuccess = function () {
  $('#editCelebMessage').text('You have successfully deleted your Celeb app')
  $('#editCelebForm').addClass('hide')
}

const deleteNewsSuccess = function () {
  $('#editNewsMessage').text('You have successfully deleted your News app')
  $('#editNewsForm').addClass('hide')
}

const deleteSportFailure = function () {
  $('#editSportForm').text('We were unable to delete your sport app. Please try again')
}

const deleteCelebFailure = function () {
  $('#editCelebForm').text('We were unable to delete your sport app. Please try again')
}

const deleteNewsFailure = function () {
  $('#editNewsForm').text('We were unable to delete your sport app. Please try again')
}

const createWeatherSuccess = function () {
  $('#editWeatherMessage').text('You have successfully created your Weather app')
  $('#fullCreateWeatherForm').addClass('hide')
}

const createSportSuccess = function () {
  $('#createSportMessage').text('You have successfully created your Sport app')
  $('#fullCreateSportForm').addClass('hide')
}

const createCelebSuccess = function () {
  $('#createCelebMessage').text('You have successfully created your Celeb app')
  $('#fullCreateCelebForm').addClass('hide')
}

const createNewsSuccess = function () {
  $('#createNewsMessage').text('You have successfully created your News app')
  $('#fullCreateNewsForm').addClass('hide')
}

const createWeatherFailure = function (error) {
  $('#createWeatherMessage').text('We were unable to create your widget. Please try again.', error)
}

const createSportFailure = function (error) {
  $('#createSportMessage').text('We were unable to create your widget. Please try again.', error)
}

const createCelebFailure = function (error) {
  $('#createCelebMessage').text('We were unable to create your widget. Please try again.', error)
}

const createNewsFailure = function (error) {
  $('#createNewsMessage').text('We were unable to create your widget. Please try again.', error)
}

const getUndergroundSuccess = function (data) {
  const showNewsHtml = showUndergroundTemplate({ undergrounds: data.current_observation })
  $('#editWeatherUndergroundMessage').empty()
  $('#editWeatherUndergroundMessage').append(showNewsHtml)
}

export {
  getUndergroundSuccess,
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
  getWeatherIdFailure,
  getSportIdSuccess,
  editSportSuccess,
  deleteWeatherFailure,
  deleteSportSuccess,
  deleteSportFailure,
  getSportIdFailure,
  createSportSuccess,
  createSportFailure,
  createCelebSuccess,
  createCelebFailure,
  getCelebIdSuccess,
  getCelebIdFailure,
  editCelebSuccess,
  editCelebFailure,
  editSportFailure,
  editWeatherFailure,
  deleteCelebSuccess,
  deleteCelebFailure,
  createNewsFailure,
  createNewsSuccess,
  getNewsIdFailure,
  getNewsIdSuccess,
  editNewsSuccess,
  editNewsFailure,
  deleteNewsSuccess,
  deleteNewsFailure
}
