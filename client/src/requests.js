import { useSelector } from 'react-redux';
import { selectSummonerName } from './features/accountSlice';

const API_KEY = "INSERT API KEY";

const requests = {
    fetchAccountData: `/lol/summoner/v4/summoners/by-name/${summonerName}api_key=${API_KEY}`,
}


export default requests;