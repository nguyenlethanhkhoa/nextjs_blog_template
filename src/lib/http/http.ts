import axios from 'axios';


export const HttpApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export interface ApiErrorData {
    status: string;
    message: string;
    result: null;
}
