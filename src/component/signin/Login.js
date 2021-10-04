import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import Axios from 'axios'
import { ENV } from '../environment/EnvrUrl'


const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();

        Axios.post(ENV.URL + 'auth', user)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('isAuthenticated', true);
                    history.push('/home')
                   
                } else {
                    alert('Invalid crendials')
                }
            }).catch((res) => {
                console.log(res)
            })
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div className="parent_containers">
                    {/* <img src={window.location.origin + '/images/expense_tracker.jpeg'} alt="" className="img_expense_tracker"/> */}
                    <div className="child_containers">

                        <input type="text" placeholder="username" id="username" name="username" className="username"
                            autoComplete="off"
                            value={user.username} onChange={handleInput} />

                        <input type="password" placeholder="password" className="password" id="password" name="password" 
                            autoComplete="off"
                            value={user.password} onChange={handleInput} />
                        <Link to="/signup" className="signUp">Sign Up</Link>
                        <input type="submit" value="submit" className="login_btn" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login
