import axios from 'axios'

export function userAppRequest(userData) {
  return dispatch => {
    return axios.post('api/users', userData)
  }
}
