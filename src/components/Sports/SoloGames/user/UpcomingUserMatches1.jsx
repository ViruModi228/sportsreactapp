import '../../../../styles/userOngoing.css'
import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import versusImg from '../../../../images/vs-removebg-preview.png'
import { Link } from 'react-router-dom'
import { NoMatch } from '../../../NoMatch';


const socket = io('http://localhost:3001');

export const UpcomingUserMatches1 = ({ sport }) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        console.log(`in use effect 1 of user side ${sport} upcoming matches website user side`)
        const fetchMatches = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/${sport}/upcoming`)
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
    }, []);

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
            </div>
        </div>

    )
    return (
        <div>
            <div className="bt">
                <div className="container">
                    <div className="tabs">
                       
                        <div className="tab" htmlFor="radio-1"  style={{color:"black", backgroundColor:"white"}}>
                            <Link to={`/${sport}/upcoming`} style={{color:"black"}}>
                                Upcoming
                            </Link>
                        </div>
                        <div className="tab" htmlFor="radio-2">
                            <Link to={`/${sport}/ongoing`} style={{color:"white"}}>
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
