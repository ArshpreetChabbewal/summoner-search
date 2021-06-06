import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;

export const getSummonerData = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name);
        let data;
        await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
        .then(res => {
            console.log(1)
            console.log(res);
            data = res;
        }).catch(err => {
            console.log(err)
        });
        res.status(200).send(data.data);
    } catch (err) {
        console.log(err);
    }
}