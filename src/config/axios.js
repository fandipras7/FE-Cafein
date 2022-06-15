// import axios from "axios";

// const axiosApiInstance = axios.create({
//   baseURL: process.env.REACT_APP_URL_API,
// });

// axiosApiInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers = {
//         Authorization: `Bearer ${token}`,
//       };
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
