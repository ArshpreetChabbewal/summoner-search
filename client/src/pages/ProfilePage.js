import React, { useState, useEffect } from 'react'
import './ProfilePage.css'
import { useSelector, useDispatch } from 'react-redux';
// import { selectSummonerName } from '../features/accountSlice';

import Header from './components/Header';
import GeneralPage from './general/GeneralPage';
import ChampionPage from './champions/ChampionPage'
import { summonerData } from '../reducers/reducers';

const ProfilePage = () => {
    const dispatch = useDispatch()

    const summonerData = useSelector(state => state.summonerData);
    // const championData = useSelector(state => state.championData);
    // const summonerRank = useSelector(state => state.rankData);
    // const matchHistory = useSelector(state => state.matchHistory);
    
    /*if (summonerData) {
        dispatch(displayChampionData(summonerData.id));
        dispatch(displaySummonerRank(summonerData.id));
        dispatch(displayMatchHistory(summonerData.puuid));
    }*/

    // Get Champion Data (CHAMPION MASTERY V4):
    // /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}


    // Get Ranked Data (LEAGUE V4)
    // lol/league/v4/entries/by-summoner/Uxz2OkUzMoF2P-Ohg55t3xq3w-AHDOzpXcvEI3zlYakaoUs


    /* let tabHeader = document.getElementsByClassName("profilePage__tabHeader")[0];
    let tabIndicator = document.getElementsByClassName("profilePage__tabIndicator")[0];
    let tabBody = document.getElementsByClassName("profilePage__tabBody")[0];
    let tabsPane = document.getElementsByTagName("div");

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener("click", () => {
            tabHeader.getElementsByClassName("profilePage__active")[0].classList.remove("profilePage__active");
            tabsPane[i].classList.add("profilePage__active");
        });

    } */

    console.log('here');
    console.log(summonerData);
    console.log('here');    

    return (
        <div className="profilePage">
        {summonerData ? (
            <>
                <img className="profilePage__background" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg"/>
                <div className="profilePage__overlay"></div>
                <div className="profilePage__body">
                    <div className="profilePage__profile">
                        <img
                            className="profilePage__profileImage"
                            src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/profileicon/${summonerData.data.profileIconId}.png`}
                            alt=""
                        />
                        <h3> {summonerData ? summonerData.data.name : null } </h3>
                    </div>
                    
                    <div className="profilePage__tabs">
                        <div className="profilePage__tabHeader">
                            <div className="profilePage__active">
                                Overview
                            </div>
                            <div >
                                Match History
                            </div>
                            <div >
                                Champion Page
                            </div>
                        </div>
                        <div className="profilePage__tabIndicator"></div>
                        <div className="profilePage__tabBody">
                            <div className="profilePage__active">
                                <GeneralPage/>
                            </div>
                            <div>
                                <h2>Match History, Coming Soon</h2>
                            </div>
                            <div>
                                <h2>Champion Page, Coming Soon</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (
                <>
                    <h1>Loading...</h1>
                </>
            )
        }
        </div>
    )
}

export default ProfilePage
