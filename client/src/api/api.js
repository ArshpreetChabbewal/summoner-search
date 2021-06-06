import axios from 'axios';

const url = 'http://localhost:5000/data';

export const getSummonerData = (name) => axios.get(`${url}/summonerData/${name}`);
export const getMatchInformation = (puuid) => axios.get(`${url}/matchInformation/${puuid}`);