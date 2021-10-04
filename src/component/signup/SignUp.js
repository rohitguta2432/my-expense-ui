import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { ENV } from '../environment/EnvrUrl'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const SignUp = () => {
    const [register, setRegister] = useState({
        username: '',
        password: ''
    })
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleRequest = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log(register);
        axios.post(ENV.URL + 'user/register', register)
            .then((response) => {
                setMessage(response.data.userDetails.message);
                console.log(response.data.userDetails.message);
                setOpen(true);
            }).catch((error) => {
                console.log(error);
            })
    }
    const handleClose = () => {
            setOpen(false);
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '50%' }}>
                        {message}
                    </Alert>
                </Snackbar>
                <div className="parent_signup">
                    <div className="child_signup">
                        <div className="username_signup">
                            <label htmlFor="username" className="username_lable">username :</label>
                            <input type="text" name="username" id="username" placeholder="username/mobile .." value={register.username}
                                onChange={handleRequest} />
                        </div>
                        <div className="passowrd_signup">
                            <lable className="password_label">password :</lable>
                            <input type="password" name="password" id="password" placeholder="password .." value={register.password}
                                onChange={handleRequest} />
                        </div>
                    </div>
                    <div className="submit_btn">
                        <input type="submit" value="sign up" />
                    </div>
                </div>
            </form>
        </>
    )
}
export default SignUp
