import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import background from "../assets/images/league_background.jpeg";
import title from "../assets/images/league_title.png";

import './SearchPage.css'
import { displaySummonerData } from '../actions/actions';

function SearchPage() {
    const dispatch = useDispatch();

    const setSummonerName = () => {
        const accountName = document.getElementById("userInput").value;
        dispatch(displaySummonerData(accountName));
    }


    return (
        <div className="loginPage">
             <div className="loginPage__header">
                <h1 className="loginPage__title">Summoner Search</h1>
             </div>
             <img className="loginPage__background" src="https://img.particlenews.com/img/id/281r2V_0PhCdc7q00?type=thumbnail_1280x720"/>
             <div className="loginPage__overlay"> </div>

             <div className="loginPage__input">
                <h4 className="loginPage__subtitle">Enter Your Summoner Name</h4>
                <div className="loginPage__insert">
                    <div className="loginPage__insertData">
                        <input 
                            type="text"
                            id="userInput"
                            required
                            autoComplete="off"
                        />
                        <div className="loginPage__underline"></div>
                        <label className="loginPage__label">Summoner Name</label>
                    </div>
                </div>
                <Link to="/profile">
                    <button 
                        className="loginPage__search"
                        onClick={setSummonerName}
                    >
                        Search
                    </button>
                </Link>
             </div>
        </div>
    )
}

export default SearchPage

{/* <div className="loginPage">
            <div className="loginPage__header">
                <img 
                    className="logo"
                    src=""
                    alt=""
                />
                <h1 className="loginPage__title"><span aria-hidden="true">Summoner Search</span>Summoner Search<span aria-hidden="true">Summoner Search</span></h1>
            </div>
            <div className="loginPage__body">
                <div className="loginPage__backgroundBox loginPage__glow">

                </div>
                <div className="loginPage__infoBox">
                    <h3 className="loginPage__subtitle">Enter the Summoner's name</h3>
                    <form>
                        <input 
                            type="text"
                            placeholder="Summoner Name"
                            id="userInput"
                        />
                        <Link to="/profile">
                            <button 
                                className="loginPage__search"
                                onClick={setSummonerName}
                                >
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div> */}
