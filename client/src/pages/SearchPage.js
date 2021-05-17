import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../features/accountSlice';

import './SearchPage.css'

function SearchPage() {
    const dispatch = useDispatch();

    const setSummonerName = () => {
        const accountName = document.getElementById("userInput").value;
        dispatch(setName(accountName));
    }


    return (
        <div className="loginPage">
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
        </div>
    )
}

export default SearchPage
