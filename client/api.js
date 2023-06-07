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
    .get('/api/v1/coral')
    .then((response) => {
      return response.body
    })
}
