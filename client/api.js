import request from 'superagent'

export function fetchTypes () {
  return request
    .get('/api/v1/types')
    .then((response) => {
      return response.body
    })
}

export function fetchSoftCoral () {
  return request
    .get('/api/v1/softCoral')
    .then((response) => {
      return response.body
    })
}

export function fetchSPSCoral () {
  return request
    .get('/api/v1/sPSCoral')
    .then((response) => {
      return response.body
    })
}

export function fetchLPSCoral () {
  return request
    .get('/api/v1/lPSCoral')
    .then((response) => {
      return response.body
    })
}

export function fetchAnemone () {
  return request
    .get('/api/v1/anemone')
    .then((response) => {
      return response.body
    })
}

export function fetchOneCoral (id) {
  return request
    .get(`/api/v1/oneCoral/Coral/${id}`)
    .then((response) => {
      return response.body
    })
}
