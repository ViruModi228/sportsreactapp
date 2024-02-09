import React from 'react'
import imglogo from '../../images/logossit.png'
import img1 from '../../images/logofinal.png'
import img2 from '../../images/logo-removebg-previews.png'
// import '../../styles/style.css'
import '../../styles/homestyle.css'
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    const routerArray = [
        {
            id: 1,
            name: "Home",
            linkUrl: "/home"
        },
        {
            id: 2,
            name: "Schedule",
            linkUrl: "/schedule"
        },
        {
            id: 3,
            name: "Points Table",
            linkUrl: "/pointstable"
        },
        {
            id: 4,
            name: "Coordinator",
            linkUrl: "/coordinator"
        }
    ]

    const gameRouterDropdown = [
        {
            id: 4,
            name: "Badminton(Smash Series)",
            linkUrl: "/badminton"
        },
        {
            id: 5,
            name: "Cricket(Boundary Battle)",
            linkUrl: "/cricket"
        },
        {
            id: 6,
            name: "Table Tennis(Ping Pong)",
            linkUrl: "/tabletennis"
        },
        {
            id: 7,
            name: "Football(Extreme Endurance)",
            linkUrl: "/football"
        },
        {
            id: 8,
            name: "Volleyball(Victor Valley)",
            linkUrl: "/volleyball"
        },
        {
            id: 9,
            name: "Tug Of War(Muscle Mania)",
            linkUrl: "/tugofwar"
        },
        {
            id: 10,
            name: "Chess(Tactics Game)",
            linkUrl: "/chess"
        },
        {
            id: 11,
            name: "Kabaddi(Elite Energy)",
            linkUrl: "/kabaddi"
        },
        {
            id: 12,
            name: "Satoliya(Battle of Crown)",
            linkUrl: "/satoliya"
        },
        {
            id: 13,
            name: "Pump N Sprint(Pushup Dash)",
            linkUrl: "/pumpandsprint"
        },
        {
            id: 14,
            name: "100M Race(Super Sprint)",
            linkUrl: "/100mrace"
        },
        {
            id: 15,
            name: "Kho Kho(Runway Rumble)",
            linkUrl: "/khokho"
        },
        {
            id: 16,
            name: "Carrom(Final Four)",
            linkUrl: "/carrom"
        }
    ]

    return (
        <header>
            <div id="nav1">
                <div className="navdiv">
                    <div className="cl_logo">
                        {" "}
                        <a href="https://www.ssit.co.in/">
                            <img
                                className="ssit_logo_image"
                                src={imglogo}
                                alt="SSIT_logo"
                            />
                        </a>
                        <h4 className="ssit">
                            SSIT
                        </h4>
                    </div>
                    <div className="list">
                        <ul>
                            <li className="li1">
                                <h5>Follow Us: </h5>
                            </li>
                            <li className="li1">
                                <a href="https://www.instagram.com/ssit.gandhinagar/">
                                    <i
                                        className="fa-brands fa-instagram"
                                        style={{ color: "#dbc2c2" }}
                                    />
                                </a>
                            </li>
                            <li className="li1">
                                <a href="">
                                    <i className="fa-brands fa-twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="abc">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img
                                className="nijanand_log"
                                src={img1}
                                alt=""
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className='navbar-nav'>
                                {routerArray.map((item) => {
                                    return (
                                        <li key={item.id} className='nav-link'>
                                            <Link to={item.linkUrl} style={{ color: "white" }}>{item.name}</Link>
                                        </li>
                                    )
                                })}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarScrollingDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Sports
                                    </a>
                                    <ul className="dropdown-menu"
                                        aria-labelledby="navbarScrollingDropdown" id='abcdd'>
                                        {gameRouterDropdown.map((item) => {
                                            return (
                                                <li key={item.id} id='dd'>
                                                    <a className='dropdown-item' href={item.linkUrl}>{item.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
