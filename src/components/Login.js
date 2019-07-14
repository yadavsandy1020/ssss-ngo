import React from 'react'
import '../App.css'
const Login = () => {
    return (
        <div className="login">
            <div className="container">
               
                <h6>Login</h6>
                <form method="post">
                    <span><input type="text" name="email" placeholder="Email" required="required" /></span>
                    <input type="password" name="password" placeholder="Password" required="required" />
                    <button type="submit" className="btn btn-primary btn-block btn-small center">Sign in</button>
                </form>
                </div>
               
            

        </div>


    )

}

export default Login;