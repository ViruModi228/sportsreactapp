import '../../../../styles/userOngoing.css'
import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import liveGif from '../../../../images/live.gif'
import versusImg from '../../../../images/vs-removebg-preview.png'
import { Link } from 'react-router-dom'
import { NoMatch } from '../../../NoMatch';


const socket = io('http://localhost:3001');

export const OngoingUserMatches2 = ({ sport }) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        console.log(`in use effect 1 of user side ${sport} ongoing matches`)
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/${sport}/ongoing`)
                setMatches(response?.data?.data)
                console.log("api resp", response?.data?.data)
                console.log(matches)
            } catch (error) {
                console.error(`Error fetching ${sport} matches `, error)
            }
        }
        if (matches.length === 0) {
            fetchMatches()
        }
    }, []);

    socket.on('update_score', (data) => {
        console.log(`in client side update socket score on user ongoing ${sport} boi`)
        const p1scoreElement = document.getElementById(`t1scoreround${data.round}_${data.matchId}`);
        const t2scoreElement = document.getElementById(`t2scoreround${data.round}_${data.matchId}`);

        if (p1scoreElement && t2scoreElement) {
            p1scoreElement.textContent = data.newt1;
            t2scoreElement.textContent = data.newt2;
        }
    });

    const UserMatchCompoment = ({ match, index }) => (
        <div className="display">
            <div className="scoreboard">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr style={{ width: "100%" }}>
                            <td style={{ width: "50%" }}>
                                <div className="slantedShare">MATCH-{index}</div>
                            </td>
                            <td style={{ width: "50%" }}>
                                <div className="slantedDonate">
                                    <img className="live" src={liveGif} alt="" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="teams">
                    <div className="team">
                        <h2 className="team-name">{match.team1}</h2>
                    </div>
                    <div className="score">
                        <span>
                            <img className="vs" src={versusImg} alt="" />
                        </span>
                    </div>
                    <div className="team">
                        <h2 className="team-name">{match.team2}</h2>
                    </div>
                </div>
                <div className="summary">
                    <p>Match has been Started</p>
                </div>
                <div className="accordion" id="accordianExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`accordian_${match._id}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                SCORECARD
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className="players">
                                    <div className="player" id={`t1scoreround1_${match._id}`}>{match.team1Rounds[0]}</div>
                                    <div className="Set">Half-1</div>
                                    <div className="player" id={`t2scoreround1_${match._id}`}>{match.team2Rounds[0]}</div>
                                </div>
                                <div className="players">
                                    <div className="player" id={`t1scoreround2_${match._id}`}>{match.team1Rounds[1]}</div>
                                    <div className="Set">Half-2</div>
                                    <div className="player" id={`t2scoreround2_${match._id}`}>{match.team2Rounds[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    return (
        <div>
            <div className="bt">
                <div className="container">
                    <div className="tabs">

                        <div className="tab" htmlFor="radio-1">
                            <Link to={`/${sport}/upcoming`} style={{color:"white"}}>
                                Upcoming
                            </Link>
                        </div>
                        
                        <div className="tab" htmlFor="radio-2" style={{color:"black", backgroundColor:"white"}}>
                            <Link to={`/${sport}/ongoing`} style={{color:"black"}}>
                                Ongoing
                            </Link>
                        </div>
                        <div className="tab" htmlFor="radio-3">
                            <Link to={`/${sport}/played`} style={{color:"white"}}>
                                Played
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="maintable">
            {matches.length === 0 ? <NoMatch/> : <></>}
                {matches.map((match, index) => (
                    <UserMatchCompoment key={match._id} match={match} index={index + 1} />
                ))}
            </div>
        </div>
    )
}
