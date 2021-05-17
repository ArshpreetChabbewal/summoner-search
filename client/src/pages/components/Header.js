import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import PeopleIcon from '@material-ui/icons/People';


const Header = () => {
    const [show, setShow] = useState(false);

    const modifyHeader = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", modifyHeader);
        return () => window.removeEventListener("scroll", modifyHeader);
    }, [])

    return (
        <div className={`header ${show && 'header__background'}`}>
            <div className="header__contents">
                <div className={`${show ? "header__displayImage" : "header_hideImage"}`}>
                    <img
                        className="header__profileImage"
                        src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/profileicon/588.png"
                        alt=""
                    />
                </div>
                <div className="header__searchBar">
                    <form>
                        <input
                            type="text"
                            placeholder="Summoner Name"
                        />
                        <Link to="/profile">
                            <button className="header__search">
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
                <div className={`header__icons ${show ? "header__displayIcons" : "header_hideIcons"}`}>
                    <AccountCircleIcon color="primary"/>
                    <CalendarViewDayIcon color="primary"/>
                </div>
            </div>
        </div>
    )
}

export default Header