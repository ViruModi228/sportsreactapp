import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NoMatch } from '../../../NoMatch';

const socket = io('http://localhost:3001');

export const OngoingMatches3 = ({ sport }) => {
  const [matches, setMatches] = useState([])
  const capitalizedSport = sport.charAt(0).toUpperCase() + sport.slice(1);  // for passing model

  useEffect(() => {
    console.log("in use effect 1")
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/${sport}/ongoing`)
        console.log("api resp", response?.data?.data)

        setMatches(response?.data?.data);
      }
      catch (error) {
        console.error(`Error fetching ${sport} matches `, error)
      }
    }
    if (matches.length == 0) {
      fetchMatches()
    }
  }, []);

  socket.on("winner_change", (data) => {
    console.log("in client side update winner of match")
    const name_winner = document.getElementById(`winnername_${data.matchId}`)
    name_winner.textContent = `Winner : ${data.wname}`
    axios.put(`http://localhost:3001/api/v1/${sport}/transfer/played/${data.matchId}`, {})
      .then(response => {
        console.log('PUT Request Successful:', response.data);
      })
      .catch(error => {
        console.error('Error making PUT Request:', error);
      });
  })

  const handleWinnerChange = (matchId) => {
    console.log("in winner change function of client side socket!")
    const winnerInput = document.getElementById(`winner_${matchId}`).value
    const nameWinner = document.getElementById(`winnername_${matchId}`);
    nameWinner.textContent = `Winner : ${winnerInput}`;
    console.log(capitalizedSport)
    socket.emit("winner_change", { matchId: matchId, wname: winnerInput, model: `${capitalizedSport}Model` });
  };

  const MatchComponent = ({ match, index }) => {
    return (
      <div className="parent">
        <div className="table">
          <div className="enlist">
            <div className="playerkename">
              <div id="palyer1" className="name">
                {match.player1}
              </div>
              <div className="opponent" id="palyer2">
                {match.player2}
              </div>
            </div>
            {
              sport === "carrom" ? <>
                <div className="playerkename">
                  <div id="palyer1" className="name">
                    {match.player3}
                  </div>
                  <div className="opponent" id="palyer2">
                    {match.player4}
                  </div>
                </div></> :<></>
            }
          </div>
          <p className="win_consists" id={`winnername_${match._id}`}>Winner : </p>
        </div>
        <div className="input_winnerbox">
          <input
            type="text"
            name=""
            id={`winner_${match._id}`}
            placeholder="Enter Winner"
            className="enter_input12"
          />
          <button id={`button_${match._id}`} className="confirm_win12" onClick={() => (handleWinnerChange(match._id))}>
            Update
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="category">
        <div className="specification" id="up">
          <Link to={`/coordinator/${sport}/upcoming`} id="up">
            Upcoming
          </Link>
        </div>
        <div className="specification" id="on" style={{ backgroundColor: "darkblue", color: "white" }}>
          <Link to={`/coordinator/${sport}/ongoing`} id="on">
            Ongoing
          </Link>
        </div>
      </div>
      <div id="maintable" className="maindivv">
        {matches.length === 0 ? <NoMatch /> : <></>}
        {matches.map((match, index) => (
          <MatchComponent key={match._id} match={match} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
