import axios from 'axios';

const APIService = axios.create({
    baseURL: 'https://api.onlysense.app',
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const Register = (code, params) => {return APIService.post(`/register/${code}`, params)}; //
export const ConfirmRegister = (params) => {return APIService.post(`/register/confirm`, params)}; //



