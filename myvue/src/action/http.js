// import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
const baseApi = 'http://localhost:3000'; // 默认域名地址
var filter = {
  post: 'data',
  get: 'params'
};
const request = (url, options, baseUrl, isLoading) => {
  return new Promise((resolve, reject) => {
    var innerUrl = '';
    var api = url
    if (!baseUrl) {
      innerUrl = baseApi
    } else {
      innerUrl = baseUrl
    }
    console.log(innerUrl)
    if (isLoading) {
      // Vue.$vux.loading.show({
      //   text: 'Loading'
      // })
    }
    axios({
      url: innerUrl + api,
      method: options.method,
      [filter[options.method]]: options.data,
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(({data}) => {
      // if (isLoading) {
      //   Vue.$vux.loading.hide()
      // }
      resolve(data)
    }).catch(err => { reject(err) })
  })
}

const get = (url, options = {}, baseUrl, isLoading = true) => {
  return request(url, {
    method: 'get',
    data: options
  }, baseUrl, isLoading)
}

const post = (url, options, baseUrl, isLoading = true) => {
  return request(url, {
    method: 'post',
    data: Qs.stringify(options)
  }, baseUrl, isLoading)
}

export default {
  get,
  post
}
