import axios from 'axios';

const api = axios.create({
    baseURL: "https://na1.api.riotgames.com",
})

export default api;