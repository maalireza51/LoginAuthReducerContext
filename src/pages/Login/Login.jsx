import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required />
                        <label>Password</label>
                    </div>
                    <a href="hello">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )
}
