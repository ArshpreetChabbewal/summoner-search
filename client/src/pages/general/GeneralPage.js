import React from 'react'
import './GeneralPage.css'
import imageSrcSolo from '../../assets/ranked-emblems/Emblem_Silver.png'
import imageSrcFlex from '../../assets/ranked-emblems/Emblem_Challenger.png'
import imageSrcSoloTop from '../../assets/ranked-positions/Position_Silver-Top.png'
import imageSrcSoloJungle from '../../assets/ranked-positions/Position_Silver-Jungle.png'
import imageSrcSoloMid from '../../assets/ranked-positions/Position_Silver-Mid.png'
import imageSrcSoloBot from '../../assets/ranked-positions/Position_Silver-Bot.png'
import imageSrcSoloSupport from '../../assets/ranked-positions/Position_Silver-Support.png'
import imageSrcFlexTop from '../../assets/ranked-positions/Position_Challenger-Top.png'
import imageSrcFlexJungle from '../../assets/ranked-positions/Position_Challenger-Jungle.png'
import imageSrcFlexMid from '../../assets/ranked-positions/Position_Challenger-Mid.png'
import imageSrcFlexBot from '../../assets/ranked-positions/Position_Challenger-Bot.png'
import imageSrcFlexSupport from '../../assets/ranked-positions/Position_Challenger-Support.png'

import Champions from './Champions'

function GeneralPage() {
    return (
        <div className="generalPage">
            <div className="generalPage__rowOne">
                <div className="generalPage__rankedOverview">
                    <div className="generalPage__rankedSoloOverview">
                        <h2>RANKED SOLO</h2>
                        <div className="generalPage__rankedSoloContents">
                            <img src={imageSrcSolo} alt="not working"/>
                            <div className="generalPage__rankedSoloText">
                                <h5>Rank - LP</h5>
                                <h5>Wins: Losses: Remakes: </h5>
                            </div>
                        </div>
                    </div>
                    <div className="generalPage__rankedFlexOverview">
                        <h2>RANKED FLEX</h2>
                        <div className="generalPage__rankedFlexContents">
                            <img src={imageSrcFlex} alt="not working"/>
                            <div className="generalPage__rankedFlexText">
                                <h5>Rank - LP</h5>
                                <h5>Wins: Losses: Remakes: </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="generalPage__champions">
                    <h2>CHAMPIONS</h2>
                    <div className="generalPage__championOverview">
                        <div className="generalPage__championThree">
                            <img src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/Aatrox.png"
                            />
                            <h6>120,000</h6>
                        </div>
                        <div className="generalPage__championOne">
                            <img src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/Irelia.png"
                            />
                            <h6>150,000</h6>
                        </div>
                        <div className="generalPage__championTwo">
                            <img src="http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/Jax.png"
                            />
                            <h6>100,000</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="generalPage__rowTwo">
                <div className="generalPage__rankedSolo">
                    <h2>RANKED SOLO STATISTICS</h2>
                    <h3>Overview</h3>
                    <div className="generalPage__rankedSoloGraph">
                        <div className="generalPage__rankedSoloPercent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="generalPage__rankedSoloWinrate">
                                <h4>50<span>%</span></h4>
                            </div>
                        </div>
                        <h5>172 Games Played</h5>
                        <h6>80 Wins - 80 Losses - 12 Remakes</h6>
                    </div>
                    <h3>Positions</h3>
                    <div className="generalPage__rankedSoloPositions">
                        <div className="generalPage__rankedSoloTop">
                            <div className="generalPage__rankedSoloTopHeader">
                                <img src={imageSrcSoloTop} alt="Not Working"/>
                                <div className="generalPage__rankedSoloTopText">
                                    <h5>Games Played: 30</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloJungle">
                            <div className="generalPage__rankedSoloJungleHeader">
                                <img src={imageSrcSoloJungle} alt="Not Working"/>
                                <div className="generalPage__rankedSoloJungleText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 10 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloMid">
                            <div className="generalPage__rankedSoloMidHeader">
                                <img src={imageSrcSoloMid} alt="Not Working"/>
                                <div className="generalPage__rankedSoloMidText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 10 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloBot">
                            <div className="generalPage__rankedSoloBotHeader">
                                <img src={imageSrcSoloBot} alt="Not Working"/>
                                <div className="generalPage__rankedSoloBotText">
                                    <h5>Games Played: 30</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloSupport">
                            <div className="generalPage__rankedSoloSupportHeader">
                                <img src={imageSrcSoloSupport} alt="Not Working"/>
                                <div className="generalPage__rankedSoloSupportText">
                                    <h5>Games Played: 30</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                    </div>
                </div>
                <div className="generalPage__draftPick">
                    <h2>DRAFT PICK STATISTICS</h2>
                    <h3>Overview</h3>
                    <div className="generalPage__rankedSoloGraph">
                        <div className="generalPage__rankedSoloPercent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="generalPage__rankedSoloWinrate">
                                <h4>50<span>%</span></h4>
                            </div>
                        </div>
                        <h5>172 Games Played</h5>
                        <h6>80 Wins - 80 Losses - 12 Remakes</h6>
                    </div>
                    <h3>Positions</h3>
                    <div className="generalPage__rankedSoloPositions">
                        <div className="generalPage__rankedSoloTop">
                            <div className="generalPage__rankedSoloTopHeader">
                                <img src={imageSrcSoloTop} alt="Not Working"/>
                                <div className="generalPage__rankedSoloTopText">
                                    <h5>Games Played: 40</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloJungle">
                            <div className="generalPage__rankedSoloJungleHeader">
                                <img src={imageSrcSoloJungle} alt="Not Working"/>
                                <div className="generalPage__rankedSoloJungleText">
                                    <h5>Games Played: 40</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloMid">
                            <div className="generalPage__rankedSoloMidHeader">
                                <img src={imageSrcSoloMid} alt="Not Working"/>
                                <div className="generalPage__rankedSoloMidText">
                                    <h5>Games Played: 20</h5>
                                    <h6>10 Wins - 10 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloBot">
                            <div className="generalPage__rankedSoloBotHeader">
                                <img src={imageSrcSoloBot} alt="Not Working"/>
                                <div className="generalPage__rankedSoloBotText">
                                    <h5>Games Played: 32</h5>
                                    <h6>10 Wins - 10 Losses - 12 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloSupport">
                            <div className="generalPage__rankedSoloSupportHeader">
                                <img src={imageSrcSoloSupport} alt="Not Working"/>
                                <div className="generalPage__rankedSoloSupportText">
                                    <h5>Games Played: 40</h5>
                                    <h6>20 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                    </div>
                </div>
            </div>
            <div className="generalPage__rowThree">
                <div className="generalPage__rankedFlex">
                    <h2>RANKED FLEX STATISTICS</h2>
                    <h3>Overview</h3>
                    <div className="generalPage__rankedSoloGraph">
                        <div className="generalPage__rankedSoloPercent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="generalPage__rankedSoloWinrate">
                                <h4>67<span>%</span></h4>
                            </div>
                        </div>
                        <h5>158 Games Played</h5>
                        <h6>80 Wins - 56 Losses - 12 Remakes</h6>
                    </div>
                    <h3>Positions</h3>
                    <div className="generalPage__rankedSoloPositions">
                        <div className="generalPage__rankedSoloTop">
                            <div className="generalPage__rankedSoloTopHeader">
                                <img src={imageSrcFlexTop} alt="Not Working"/>
                                <div className="generalPage__rankedSoloTopText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloJungle">
                            <div className="generalPage__rankedSoloJungleHeader">
                                <img src={imageSrcFlexJungle} alt="Not Working"/>
                                <div className="generalPage__rankedSoloJungleText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloMid">
                            <div className="generalPage__rankedSoloMidHeader">
                                <img src={imageSrcFlexMid} alt="Not Working"/>
                                <div className="generalPage__rankedSoloMidText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloBot">
                            <div className="generalPage__rankedSoloBotHeader">
                                <img src={imageSrcFlexBot} alt="Not Working"/>
                                <div className="generalPage__rankedSoloBotText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                        <div className="generalPage__rankedSoloSupport">
                            <div className="generalPage__rankedSoloSupportHeader">
                                <img src={imageSrcFlexSupport} alt="Not Working"/>
                                <div className="generalPage__rankedSoloSupportText">
                                    <h5>Games Played: 30</h5>
                                    <h6>10 Wins - 20 Losses - 0 Remakes</h6>
                                </div>
                            </div>
                            <Champions />
                        </div>
                    </div>
                </div>
                <div className="generalPage__aram">
                    <h2>ARAM STATISTICS</h2>
                    <h3>Overview</h3>
                    <div className="generalPage__rankedSoloGraph">
                        <div className="generalPage__rankedSoloPercent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="generalPage__rankedSoloWinrate">
                                <h4>67<span>%</span></h4>
                            </div>
                        </div>
                        <h5>158 Games Played</h5>
                        <h6>80 Wins - 56 Losses - 12 Remakes</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralPage