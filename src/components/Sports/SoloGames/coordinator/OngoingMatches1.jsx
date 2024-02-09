import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import io from 'socket.io-client'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { NoMatch } from '../../../NoMatch';

const socket = io('http://localhost:3001');

export const OngoingMatches1 = ({ sport }) => {
  const [player1set, setPlayer1Set] = useState([])
  const [player2set, setPlayer2Set] = useState([])
  const [matches, setMatches] = useState([])
  const capitalizedSport = sport.charAt(0).toUpperCase() + sport.slice(1);  // for passing model


  useEffect(() => {
    console.log("in use effect 1")
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/${sport}/ongoing`)
        console.log("api resp", response?.data?.data)

        const player1Sets = [];
        const player2Sets = [];

        response.data.data.forEach((element) => {
          // console.log("element =>", element.player1Sets); // element is an object for each match
          // console.log("element -> match id",element._id)
          player1Sets.push([element.player1Sets, element._id]);
          console.log("player1Sets ===>  ", player1Sets)
          player2Sets.push([element.player2Sets, element._id]);
        });

        setPlayer1Set((prevPlayer1Set) => [...prevPlayer1Set, ...player1Sets]);
        setPlayer2Set((prevPlayer2Set) => [...prevPlayer2Set, ...player2Sets]);
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
    const p1scoreElement = document.getElementById(`p1scoreset${data.set}_${data.matchId}`);
    const p2scoreElement = document.getElementById(`p2scoreset${data.set}_${data.matchId}`);

    if (p1scoreElement && p2scoreElement) {
      p1scoreElement.textContent = data.newp1;
      p2scoreElement.textContent = data.newp2;
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
    console.log(capitalizedSport)
    socket.emit("winner_change", { matchId: matchId, wname: winnerInput, model: `${capitalizedSport}Model` });
  };

  const MatchComponent = ({ match, index }) => {
    const { register, handleSubmit } = useForm()
    const scoreHandler = (data, matchId, setNumber) => {

      console.log("Score handler function called with data:", data);
      console.log("Match ID:", matchId);
      console.log("Set Number:", setNumber);

      const matchIndex = player1set.findIndex((match) => match[1] === matchId);

      if (matchIndex !== -1) {
        // Update the player1Sets/player2Sets array with the new form data
        const updatedPlayer1Sets = [...player1set];
        const updatedPlayer2Sets = [...player2set];

        switch (setNumber) {
          case 1:
            updatedPlayer1Sets[matchIndex][0][0] = data.p1set1;
            updatedPlayer2Sets[matchIndex][0][0] = data.p2set1;
            break;
          case 2:
            updatedPlayer1Sets[matchIndex][0][1] = data.p1set2;
            updatedPlayer2Sets[matchIndex][0][1] = data.p2set2;
            break;
          case 3:
            updatedPlayer1Sets[matchIndex][0][2] = data.p1set3;
            updatedPlayer2Sets[matchIndex][0][2] = data.p2set3;
            break;
          default:
            console.log("Invalid set number");
        }

        setPlayer1Set(updatedPlayer1Sets);
        setPlayer2Set(updatedPlayer2Sets);

        console.log("Updated Player1 Sets:", updatedPlayer1Sets);
        console.log("Updated Player2 Sets:", updatedPlayer2Sets);
      } else {
        console.log("Match not found with ID:", matchId);
      }
      // Emit socket event to notify clients about score change
      socket.emit('score_change', {
        matchId,
        newp1: data[`p1set${setNumber}`],
        newp2: data[`p2set${setNumber}`],
        set: setNumber,
        model: `${capitalizedSport}Model`
      });
    };

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
            <div className="live-change">
              <form onSubmit={handleSubmit((data) => { scoreHandler(data, `${match._id}`, 1) })}>
                <div className="score-change">
                  <input type="number" {...register('p1set1')} placeholder="Set 1" />
                  <input type="number" {...register('p2set1')} placeholder="Set 1" />
                </div>
                <button type="submit" className="sendup">
                  Update
                </button>
              </form>
            </div>
            <div className="live-change">
              <form onSubmit={handleSubmit((data) => { scoreHandler(data, `${match._id}`, 2) })}>
                <div className="score-change">
                  <input type="number" {...register('p1set2')} placeholder="Set 2" />
                  <input type="number" {...register('p2set2')} placeholder="Set 2" />
                </div>
                <button type="submit" className="sendup">
                  Update
                </button>
              </form>
            </div>
            <div className="live-change">
              <form onSubmit={handleSubmit((data) => { scoreHandler(data, `${match._id}`, 3) })}>
                <div className="score-change">
                  <input type="number" {...register('p1set3')} placeholder="Set 3" />
                  <input type="number" {...register('p2set3')} placeholder="Set 3" />
                </div>
                <button type="submit" className="sendup" >
                  Update
                </button>
              </form>
            </div>
          </div>
          <p className="win_consists" id={`winnername_${match._id}`}>Winner : </p>
        </div>
        <div className="input_winnerbox">
          <div className="rounds">
            <div className="round_info">Set 1</div>
            <div className="round_info">Set 2</div>
            <div className="round_info">Set 3</div>
          </div>
          <div className="mainscore">
            {[1, 2, 3].map((set) => (
              <div className="score" key={set}>
                <p id={`p1scoreset${set}_${match._id}`} className="p1score">
                  {player1set[index - 1]?.[0]?.[set - 1]}
                </p>
                <p id={`p2scoreset${set}_${match._id}`} className="p2score">
                  {player2set[index - 1]?.[0]?.[set - 1]}
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
      {matches.length === 0 ? <NoMatch/> : <></>}
        {matches.map((match, index) => (
          <MatchComponent key={match._id} match={match} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
