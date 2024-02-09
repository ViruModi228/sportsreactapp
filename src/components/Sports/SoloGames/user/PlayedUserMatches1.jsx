import '../../../../styles/userOngoing.css'
import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import versusImg from '../../../../images/vs-removebg-preview.png'
import { Link } from 'react-router-dom'
import { NoMatch } from '../../../NoMatch';


const socket = io('http://localhost:3001');

export const PlayedUserMatches1 = ({ sport }) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        console.log(`in use effect 1 of user side ${sport} played matches website user side`)
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/${sport}/played`)
                setMatches(response?.data?.data)
                console.log("api resp", response?.data?.data)
                console.log(matches)
            } catch (error) {
                console.error(`Error fetching ${sport} matches `, error)
            }
        }
        if (matches.length == 0) {
            fetchMatches()
        }
    }, [matches]);

    const UserMatchCompoment = ({ match, index }) => (
        <div className="display">
            <div className="scoreboard">
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr style={{ width: "100%" }}>
                            <td style={{ width: "50%" }}>
                                <div className="slantedShare">MATCH-{index}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="teams">
                    <div className="team">
                        <h2 className="team-name">{match.player1}</h2>
                    </div>
                    <div className="score">
                        <span>
                            <img className="vs" src={versusImg} alt="" />
                        </span>
                    </div>
                    <div className="team">
                        <h2 className="team-name">{match.player2}</h2>
                    </div>
                </div>
                <div className="summary">
                    <p>Winner : {match.winner}</p>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
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
                                    <div className="player" id={`p1scoreset1_${match._id}`}>{match.player1Sets[0]}</div>
                                    <div className="Set">Set-1</div>
                                    <div className="player" id={`p2scoreset1_${match._id}`}>{match.player2Sets[0]}</div>
                                </div>
                                <div className="players">
                                    <div className="player" id={`p1scoreset2_${match._id}`}>{match.player1Sets[1]}</div>
                                    <div className="Set">Set-2</div>
                                    <div className="player" id={`p2scoreset2_${match._id}`}>{match.player2Sets[1]}</div>
                                </div>
                                <div className="players">
                                    <div className="player" id={`p1scoreset3_${match._id}`}>{match.player1Sets[2]}</div>
                                    <div className="Set">Set-3</div>
                                    <div className="player" id={`p2scoreset3_${match._id}`}>{match.player2Sets[2]}</div>
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
                        <div className="tab" htmlFor="radio-1" >
                            <Link to={`/${sport}/upcoming`} style={{color:"white"}}>
                                Upcoming
                            </Link>
                        </div>
                        <div className="tab" htmlFor="radio-2" >
                            <Link to={`/${sport}/ongoing`} style={{color:"white"}}>
                                Ongoing
                            </Link>
                        </div>
                        <div className="tab" htmlFor="radio-3" style={{color:"black" , backgroundColor:"white"}}>
                            <Link to={`/${sport}/played`} style={{color:"black"}}>
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
