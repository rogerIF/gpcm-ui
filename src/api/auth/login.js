import axios from "axios/index";

export const requestLogin = params => {
    return process.env.NODE_ENV==='production' ?
        axios.post('/token', params, {params: params}).then(res => res.data)
        :axios.get('/token/0').then(res=>res.data);
};
export const getUsers = params => {
    return axios.get('/users').then(res => res.data);
};
export const requestLogout = params => {
    return axios.post('/syslogin/logout', params, {params: params}).then(res => res.data);
};

