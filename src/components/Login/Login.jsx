import React from 'react'
import '../../styles/style1.css'
import img1 from '../../images/logossit.png'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navbar2 } from '../navbar/Navbar2';


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: onclick
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        // console.log(data.password)
        var loginData = {
            id: data.id,
            password: data.password,
            sport:data.password
        }
        try {
            const response = await axios.post('http://localhost:3001/api/v1/coordinator/login', loginData);
            // is authenticated user
            if (response.status === 200) {
                Cookies.set('token', response.data.token,{ expires: 1})  // day expiry

                if (data.password === "badminton") {
                    navigate("/coordinator/badminton")
                }
                else if (data.password === "cricket") {
                    navigate("/coordinator/cricket")
                }
                else if (data.password === "volleyball") {
                    navigate("/coordinator/volleyball")
                }
                else if (data.password === "chess") {
                    navigate("/coordinator/chess")
                }
                else if (data.password === "carrom") {
                    navigate("/coordinator/carrom")
                }
                else if (data.password === "tabletennis") {
                    navigate("/coordinator/tabletennis")
                }
                else if (data.password === "kabaddi") {
                    navigate("/coordinator/kabaddi")
                }
                else if (data.password === "satoliya") {
                    navigate("/coordinator/satoliya")
                }
                else if (data.password === "football") {
                    navigate("/coordinator/football")
                }
                else if (data.password === "khokho") {
                    navigate("/coordinator/khokho")
                }
                else if (data.password === "tugofwar") {
                    navigate("/coordinator/tugofwar")
                }
                else if (data.password === "pumpandsprint") {
                    navigate("/coordinator/pumpandsprint")
                }
                else if (data.password === "100mrace") {
                    navigate("/coordinator/100mrace")
                }
                else if (data.password === "pointstable") {
                    navigate("/coordinator/pointstable")
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <>
        <Navbar2/>
            <div>
                <div className="cointainer100">
                    <div className="box-form">
                        <div className="left">
                            <div className="overlay">
                                <h1>SSIT</h1>
                                <p>
                                    We are an academic excellent Technical College made up of commited
                                    scholer students ,old collegians and staff members our rich history is
                                    the foundation for our values.
                                </p>
                                <br /><br /><br /><br /><br /><br /><br /><br />
                                {/* <h3>Top Courses</h3>
                                <p>1.Civil Engineering</p>
                                <p>2.Computer Engineering / Information Technology</p>
                                <p>3.Mechanical Engineering</p>
                                <p>4.MCA</p> */}
                                <span>
                                    <p className="smm"> Social Media</p>
                                    <a
                                        className="links"
                                        href="https://www.facebook.com/ssit.gandhinagar/"
                                    >
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a
                                        className="links"
                                        href="https://www.instagram.com/ssit.gandhinagar/"
                                    >
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                    <a className="links" href="https://www.ssit.co.in/">
                                        <i className="fa fa-globe" aria-hidden="true" />
                                    </a>
                                    <a className="links" href="https://youtube.com/@SSITGANDHINAGAR">
                                        <i className="fa fa-youtube-play" aria-hidden="true" />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <a href="https://www.ssit.co.in/">
                                <img className="logo" src={img1} alt="" />
                            </a>
                    
                            <h5 id='login'>Login</h5>
                            <br /><br />

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="inputs">
                                    <div>
                                        <div htmlFor="id" className='form-id'>ID</div>
                                        <input type="text" id="id" {...register('id', { required: 'ID is required' })} />
                                        {errors.id && <p>{errors.id.message}</p>}
                                    </div>
                                    <br />
                                    <div>
                                        <div htmlFor="password" className='form-password'>Password</div>
                                        <input type="password" id="password"  {...register('password', { required: 'Password is required' })} />
                                        {errors.password && <p>{errors.password.message}</p>}
                                    </div>
                                </div>
                                <br /><br /><br />
                                <button type="submit">Login</button>
                            </form>
                            <p />
                        </div>
                    </div>
                </div>

            </div>
            <Outlet />
        </>
    )
}
