import React from 'react'
import img from '../images/imm-removebg-preview.png'
import '../styles/nomatch.css'

export const NoMatch = () => {
    return (
        <div className='mainer'>
            <div className="containerer">
                <div className="headerer">
                    <h2>NO MATCH FOUND</h2>
                    <h5 className="h4"> "At present, there are no matches taking place."</h5>
                </div>
                <img src={img} alt="Not Found" />
            </div>
        </div>
    )
}
