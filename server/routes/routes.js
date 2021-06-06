import express from 'express';
import { getSummonerData } from '../controllers/apiFunctions.js'


const router = express.Router();

router.get('/summonerData/:name', getSummonerData);


export default router;
