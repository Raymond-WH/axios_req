import axios from 'axios'
const request = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net/',
  timeout: 5000
})
// 给每个请求，保存它的cancel方法
let map = {}

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 取消之前的请求
  // console.log(config);
  config.cancelToken = new axios.CancelToken(c => { 
    // 重复发送请求，先把上一次请求清空
    map[config.url]?.('取消请求')
    // 用于请求取消
    map[config.url] = c
    console.log(map);
  })
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const cancel = function (url) {
  map[url] && map[url]('取消请求')
}
export default request