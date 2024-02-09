import React from 'react'
import '../../styles/event1.css'
import { Outlet } from 'react-router-dom'
import { Navbar2 } from '../navbar/Navbar2'


export const NavSports = ({ sport }) => {
    const capitalizedSport = sport.toUpperCase()
    return (
        <div>
            <Navbar2/>
            <nav className="navbar1 navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-4 h1">{capitalizedSport}</span>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
