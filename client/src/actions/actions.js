import { getSummonerData } from '../api/api';

export const displaySummonerData = (name) => async (dispatch) => {
    try {
        const data = await getSummonerData(name).catch((err) => { console.log(err) });
        dispatch({type: 'SUMMONER_DATA', payload: data });
    } catch (err) {
        console.log(err);
    }
}