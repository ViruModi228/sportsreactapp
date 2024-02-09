import React from 'react'
import '../../styles/style1.css'
import img1 from '../../images/logossit.png'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navbar2 } from '../navbar/Navbar2';


export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: onclick
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        var loginData = {
            id: data.id,
            password: data.password,
            sport: data.id.split('_')[0]
        }
        try {
            const response = await axios.post('http://localhost:3001/api/v1/coordinator/login', loginData);
            // is authenticated user
            if (response.status === 200) {
                Cookies.set('token', response.data.token, { expires: 1 })  // day expiry

                //get role
                const roleResponse = await axios.get(`http://localhost:3001/api/v1/coordinator/role/${response.data.coordinator._id}`);
                const role = roleResponse.data.data.role;
                if (role === 1) {
                    navigate("/coordinator/badminton")
                }
                else if (role === 5) {
                    navigate("/coordinator/cricket")
                }
                else if (role === 3) {
                    navigate("/coordinator/volleyball")
                }
                else if (role === 4) {
                    navigate("/coordinator/chess")
                }
                else if (role === 6) {
                    navigate("/coordinator/carrom")
                }
                else if (role === 2) {
                    navigate("/coordinator/tabletennis")
                }
                else if (role === 7) {
                    navigate("/coordinator/kabaddi")
                }
                else if (role === 8) {
                    navigate("/coordinator/satoliya")
                }
                else if (role === 9) {
                    navigate("/coordinator/football")
                }
                else if (role === 11) {
                    navigate("/coordinator/khokho")
                }
                else if (role === 10) {
                    navigate("/coordinator/tugofwar")
                }
                else if (role === 12) {
                    navigate("/coordinator/pumpandsprint")
                }
                else if (role === 13) {
                    navigate("/coordinator/100mrace")
                }
                else if (role === 14) {
                    navigate("/coordinator/pointstable")
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <>
            <Navbar2 />
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
