import axios from '~/plugins/axios'
const api = {
  home(params) {
    return axios.get('/home', {
      params
    }).then(res => res.data)
  },
  list(params) {
    return axios.get('/list', {
      params
    }).then(res => res.data)
  },
  detail(params) {
    return axios.get('/detail', {
      params
    }).then(res => res.data)
  },
  test2(params) {
    return axios.get('/test2', {
      params
    }).then(res => res.data)
  }
}
export default api