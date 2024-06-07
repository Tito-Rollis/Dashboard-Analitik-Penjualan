import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const GET = axios
    .get(`${apiUrl}sales`)
    .then((e) => e)
    .catch((err) => console.log(err));
