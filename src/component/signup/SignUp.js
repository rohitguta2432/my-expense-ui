import React from 'react'
import './Signup.css'

const SignUp = () => {
    return (
        <>
            <div className="parent_signup">
                <div className="child_signup">
                    <div className="username_signup">
                        <label htmlFor="username" className="username_lable">username :</label>
                        <input type="text" name="username" id="username" placeholder="username/mobile .." />
                    </div>
                    <div className="passowrd_signup">
                        <lable className="password_label">password :</lable>
                        <input type="password" name="password" id="password" placeholder="password .." />
                    </div>
                </div>
                <div className="submit_btn">
                    <input type="submit" value="sign up" />
                </div>
            </div>
        </>
    )
}
export default SignUp
