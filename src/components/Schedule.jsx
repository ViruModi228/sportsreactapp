import React from 'react'
import img1 from '../images/sc1.jpg'
import img2 from '../images/sc2.jpg'
import '../styles/fixture.css'

export const Schedule = () => {
    return (
        <div>
            <div className='image-container'>
                <img src={img1} alt="Uploaded File" className='responsive-image'></img>
                <img src={img2} alt="Uploaded File" className='responsive-image'></img>
            </div>
        </div>
    )
}
