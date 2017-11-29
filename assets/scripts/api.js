'use strict'
const config = require('./config.js')
const store = require('./store')

const createSignUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const createSignIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const weatherData = function () {
  return $.ajax({
    url: config.apiOrigin + '/weathers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sportData = function () {
  return $.ajax({
    url: config.apiOrigin + '/sports',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const celebData = function () {
  return $.ajax({
    url: config.apiOrigin + '/celebs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newsData = function () {
  return $.ajax({
    url: config.apiOrigin + '/news_papers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getWeatherId = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/weathers/' + data.weather.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getSportId = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sports/' + data.sport.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const editWeather = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/weathers/' + store.weather1.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const editSport = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sports/' + store.sport1.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteWeather = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/weathers/' + store.weather1.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteSport = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sports/' + store.sport1.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createWeather = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/weathers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const createSport = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sports',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createSignUp,
  createSignIn,
  changePassword,
  signOut,
  weatherData,
  sportData,
  celebData,
  newsData,
  editWeather,
  getWeatherId,
  deleteWeather,
  createWeather,
  getSportId,
  editSport,
  deleteSport,
  createSport
}
