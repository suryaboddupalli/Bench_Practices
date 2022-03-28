import React, { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

function Login() {
    const [showLogin, setShowLogin] = useState(true)
    const [showLogout, setShowLogout] = useState(false)

    const loginSuccess = (res) => {
        console.log("login success", res.profileObj)
        setShowLogin(false)
        setShowLogout(true)
    }

    const loginFailure = (res) => {
        console.log("loginFailure", res)

    }

    const logout = () => {
        alert("logout successfully")
        setShowLogin(true)
        setShowLogout(false)
    }


    return (
        <div>
            {showLogin ?
                <GoogleLogin
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={loginSuccess}
                    onFailure={loginFailure}
                    cookiePolicy={'single_host_origin'}
                />
                : null
            }
            {showLogout ?
                <GoogleLogout
                    clientId={process.env.GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                />
                : null
            }

        </div>
    )
}

export default Login

