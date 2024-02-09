import React, { useEffect, useState } from 'react';
import '../../../../styles/event1.css'
import axios from 'axios'
import versusImg from '../../../../images/vs-removebg-preview.png'
import { Link } from 'react-router-dom'
import { NoMatch } from '../../../NoMatch';

export const UpcomingMatches1 = ({ sport }) => {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    console.log("in use effect of badminton upcoming coordinator")
    const fetchMatches = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/${sport}/upcoming`)
        console.log(response.data.data)
        setMatches(response.data.data)
      } catch (error) {
        console.error(`Error fetching ${sport} matches `, error)
      }
    }
    fetchMatches()
  }, []);

  const transferMatchtoOngoing = (matchId) => {
    axios.put(`http://localhost:3001/api/v1/${sport}/transfer/ongoing/${matchId}`, {})
      .then(response => {
        console.log('PUT Request Successful:', response.data);
        // Handle the response as needed
      })
      .catch(error => {
        console.error('Error making PUT Request:', error);
        // Handle errors
      });
  }

  const UpcomingComponent = ({ match }) => (
    <>
      <div className="table" style={{backgroundColor:"white" , border:"1px solid black"}}>
        <div className="enlist">
          <div id={`player1name${match._id}`} className="names">
            {match.player1}
          </div>
          <div>
            <img
              src={versusImg}
              alt="error"
              className="vs"
            />
          </div>
          <div id={`player1name${match._id}`} className="opponent">
            {match.player2}
          </div>
        </div>
        <button id={`onAir${match._id}`} className="onair" onClick={() => { transferMatchtoOngoing(match._id) }}>
          On Air
        </button>
      </div>
    </>

  )
  return (
    <div>
      <div className="category">
        <div className="specification" id="up" style={{ backgroundColor: "darkblue", color: "white" }}>
          <Link to={`/coordinator/${sport}/upcoming`} id="up" style={{ color: "white" }}>
            Upcoming
          </Link>
        </div>
        <div className="specification" id="on" style={{ backgroundColor: "transparent", color: "grey" }}>
          <Link to={`/coordinator/${sport}/ongoing`} id="on" style={{ backgroundColor: "transparent", color: "grey" }}>
            Ongoing
          </Link>
        </div>
      </div>
      <div id="maintable" className="maindivv">
      {matches.length === 0 ? <NoMatch/> : <></>}
        {matches.map((match) => (
          <UpcomingComponent key={match._id} match={match} />
        ))}
      </div>
    </div>
  )
}
