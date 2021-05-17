import React, { useState, useEffect } from 'react'
import './ProfilePage.css'
import { useSelector } from 'react-redux';
import { selectSummonerName } from '../features/accountSlice';

import Header from './components/Header';
import GeneralPage from './components/GeneralPage';
import ChampionPage from './components/ChampionPage'
import api from '../api';

const ProfilePage = () => {
    const [accountInformation, setAccountInformation] = useState({});

    const summonerName = useSelector(selectSummonerName);
    const API_KEY = "RGAPI-1396fe0b-9971-46af-91d2-6ffa531c6383";
    const fetchAccountData = `/lol/summoner/v4/summoners/by-name/${summonerName}api_key=${API_KEY}`

    useEffect(() => {
        const fetchAccountInformation = async () => {
            const request = await api.get(fetchAccountData);
            console.log(request);
            setAccountInformation(request);
        }

        fetchAccountInformation();
    }, []);

    return (
        <div className="profilePage">
            <Header />
            <div className="profilePage__body" style={{
                background: `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg") no-repeat `,
            }}>
                <div className="profilePage__profile">
                    <img
                        className="profilePage__profileImage"
                        src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/profileicon/588.png"
                        alt=""
                    />
                    <h3>Bot Loelzs</h3>
                </div>
                <div className="profilePage__options">

                </div>
                <GeneralPage/>
            </div>
            <div className="profilePage__gradient">
            </div>
        </div>
    )
}

export default ProfilePage
