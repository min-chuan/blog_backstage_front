import axios from 'axios';
import { Message } from 'element-ui';

// 进行一些全局配置
axios.defaults.baseURL = 'http://127.0.0.1:7001';
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true; // 让axios发送请求的时候带上cookie

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // config.headers.Authorization = sessionStorage.getItem('token');
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么 (status: 2xx)
    if (response.headers['content-type'] === 'application/vnd.ms-excel') {
      // 获取文件名称
      const filename = response.headers['content-disposition'].split('=')[1];
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(
        new Blob([response.data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
        })
      );
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么 (status: 除2xx)
    Message.error(error.response.data.message);
    return Promise.reject(error);
  }
);

// 封装自己的get/post方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .get(path, {
          params: data,
        })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .post(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  delete: function (path = '') {
    return new Promise(function (resolve, reject) {
      axios
        .delete(path)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  put: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios
        .put(path, data)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
  all: function (list) {
    return new Promise(function (resolve, reject) {
      axios
        .all(list)
        .then(
          axios.spread(function (...result) {
            // 两个请求现在都执行完成
            resolve(result);
          })
        )
        .catch(function (err) {
          reject(err);
        });
    });
  },
};
