
import axios from "axios";

axios.defaults={
  baseURL:'http://pmyh.sxcoal.com',
  withCredentials:true
}
// http request 拦截器
axios.interceptors.request.use(
  config => {
    let tokenId = localStorage.getItem("TOKEN");
    let lang = localStorage.getItem("lang");   
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["access-token"] =accessToken;
    }
    if (tokenId) {
      config.headers["user-token"] = tokenId;
      // config.headers['Authorization'] = 'JWT ' + tokenId;
    }
    if (lang) {
      config.headers["Accept-Language"] = lang;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response)
  
    return response;
  },
  error => {
    // Message({
    //   message: error.response.data.data.gender[0],
    //   type: "error",
    //   center: true,
    //   duration: 5000
    // });
    return Promise.reject(error);
  }
);

//get请求
export const GET = (url, param) => {
  if (param) {
    return axios.get(url, {
      params: param
    });
  } else {
    return axios.get(url);
  }
};
//post请求
export const POST = (url, param, config) => {
  if (config) {
    return axios.post(url, param, config);
  } else {
    return axios.post(url, param);
  }
};

export const PUT = (url, param) => {
  return axios.put(url, param);
};

export const DELETE = url => {
  return axios.delete(url);
};
