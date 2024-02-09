import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { NoMatch } from '../../../NoMatch';

const socket = io('http://localhost:3001');

export const OngoingMatches2 = ({ sport }) => {
  const [team1round, setTeam1round] = useState([])
  const [team2round, setTeam2round] = useState([])
  const [matches, setMatches] = useState([])
  const capitalizedSport = sport.charAt(0).toUpperCase() + sport.slice(1);  // for passing model

  useEffect(() => {
    console.log("in use effect 1")
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/${sport}/ongoing`)
        console.log("api resp", response?.data?.data)

        const team1rounds = [];
        const team2rounds = [];

        response.data.data.forEach((element) => {
          team1rounds.push([element.team1Rounds, element._id]);
          team2rounds.push([element.team2Rounds, element._id]);
        });

        setTeam1round((prevteam1set) => [...prevteam1set, ...team1rounds]);
        setTeam2round((prevteam2set) => [...prevteam2set, ...team2rounds]);
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


  socket.on('update_score', (data) => {
    console.log("in client side update socket score")
    const t1scoreElement = document.getElementById(`t1scoreround${data.round}_${data.matchId}`);
    const t2scoreElement = document.getElementById(`t2scoreround${data.round}_${data.matchId}`);

    if (t1scoreElement && t2scoreElement) {
      t1scoreElement.textContent = data.newt1;
      t2scoreElement.textContent = data.newt2;
    }
  });

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
    socket.emit("winner_change", { matchId: matchId, wname: winnerInput, model: `${capitalizedSport}Model` });
  };

  const MatchComponent = ({ match, index }) => {
    const { register, handleSubmit } = useForm()

    const scoreHandler = (data, matchId, roundNumber) => {
      console.log("Score handler function called with data:", data);
      console.log("Match ID:", matchId);
      console.log("Round Number:", roundNumber);

      const matchIndex = team1round.findIndex((match) => match[1] === matchId);

      if (matchIndex !== -1) {
        // Update the team1sets/team2sets array with the new form data
        const updatedteam1rounds = [...team1round];
        const updatedteam2rounds = [...team2round];

        switch (roundNumber) {
          case 1:
            updatedteam1rounds[matchIndex][0][0] = data.t1round1;
            updatedteam2rounds[matchIndex][0][0] = data.t2round1;
            break;
          case 2:
            updatedteam1rounds[matchIndex][0][1] = data.t1round2;
            updatedteam2rounds[matchIndex][0][1] = data.t2round2;
            break;
          case 3:
            updatedteam1rounds[matchIndex][0][2] = data.t1round3;
            updatedteam2rounds[matchIndex][0][2] = data.t2round3;
            break;
          default:
            console.log("Invalid round number");
        }

        setTeam1round(updatedteam1rounds);
        setTeam2round(updatedteam2rounds);

        console.log("Updated Player1 Sets:", updatedteam1rounds);
        console.log("Updated Player2 Sets:", updatedteam2rounds);
      } else {
        console.log("Match not found with ID:", matchId);
      }
      // Emit socket event to notify clients about score change
      socket.emit('score_change', {
        matchId,
        newt1: data[`t1round${roundNumber}`],
        newt2: data[`t2round${roundNumber}`],
        round: roundNumber,
        model: `${capitalizedSport}Model`
      });
    };

    return (
      <div className="parent">
        <div className="table">
          <div className="enlist">
            <div className="playerkename">
              <div id="palyer1" className="name">
                {match.team1}
              </div>
              <div className="opponent" id="palyer2">
                {match.team2}
              </div>
            </div>
            <div className="live-change">
              <form onSubmit={handleSubmit((data) => { scoreHandler(data, `${match._id}`, 1) })}>
                <div className="score-change">
                  <input type="number" {...register('t1round1')} placeholder="Half 1" />
                  <input type="number" {...register('t2round1')} placeholder="Half 1" />
                </div>
                <button type="submit" className="sendup">
                  Update
                </button>
              </form>
            </div>
            <div className="live-change">
              <form onSubmit={handleSubmit((data) => { scoreHandler(data, `${match._id}`, 2) })}>
                <div className="score-change">
                  <input type="number" {...register('t1round2')} placeholder="Half 2" />
                  <input type="number" {...register('t2round2')} placeholder="Half 2" />
                </div>
                <button type="submit" className="sendup">
                  Update
                </button>
              </form>
            </div>
          </div>
          <p className="win_consists" id={`winnername_${match._id}`}>Winner : </p>
        </div>
        <div className="input_winnerbox">
          <div className="rounds">
            <div className="round_info">Half 1</div>
            <div className="round_info">Half 2</div>
          </div>
          <div className="mainscore">
            {[1, 2].map((round) => (
              <div className="score" key={round}>
                <p id={`t1scoreround${round}_${match._id}`} className="p1score">
                  {team1round[index - 1]?.[0]?.[round - 1]}
                </p>
                <p id={`t2scoreround${round}_${match._id}`} className="p2score">
                  {team2round[index - 1]?.[0]?.[round - 1]}
                </p>
              </div>
            ))}
          </div>
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
