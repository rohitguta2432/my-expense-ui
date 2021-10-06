import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import Axios from 'axios'
import { ENV } from '../environment/EnvrUrl'
import LoadingBar from 'react-top-loading-bar'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setProgress(60)
        Axios.post(ENV.URL + 'auth', user)
            .then((response) => {
                setProgress(progress + 10)
                if (response.status === 200) {
                    setProgress(progress + 30)
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('isAuthenticated', true);
                    history.push('/home')
                }
            }).catch((res) => {
                console.log('edwe' + res.response.data.error)
                setOpen(true)
                setMessage('username or password incorrect')
            })
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <LoadingBar className="loadingbar_img" progress={progress}
                    onLoaderFinished={() => setProgress(0)} height={5} />
                <Snackbar open={open} autoHideDuration={6000}
                    onClose={handleClose} anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '50%' }}>
                        {message}
                    </Alert>
                </Snackbar>

                <div className="parent_containers">
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
