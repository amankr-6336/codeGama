import axios from 'axios';

let baseUrl="https://fakestoreapi.com/"

export const axiosClient=axios.create({
    baseURL:baseUrl,
})