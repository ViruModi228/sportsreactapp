import React from 'react'
import img from '../images/40444.png'
import '../styles/unauthorized.css'

export const UnAuthorized = () => {
    return (
        <div className='mainqw'>
            <div className="containerqw">
                <div className="headerqw">
                    <h1>404</h1>
                    <h3>UNAUTHORIZED</h3>
                </div>
                <img src={img} alt="Not Found" />
                <div className="footerqw">
                    <p>You Don't Have Access To This Page!</p>
                    <button>Go Back</button>
                </div>
            </div>

        </div>
    )
}
