import axios from "axios";

export const instance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
},
    { synchronous: true, runWhen: () => /* This function returns true */}
);

// Add a response interceptor
instance.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
