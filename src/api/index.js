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

export const PaymentCheck = (params) => {return APIService.post(`/payment/check`, params)}; //



