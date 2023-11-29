import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";

const client = axios.create({ baseURL: 'https://medopt-pilj.onrender.com/api/v1/' });

export const request = ({ ...options }: AxiosRequestConfig) => {
    client.defaults.headers.common.Authorization = `medopt token`;

    const onSuccess = (response: AxiosResponse) => response;
    const onError = (error: AxiosError) => {
        console.log(error);
        return Promise.reject(error);
    };

    return client(options).then(onSuccess).catch(onError);
};
