import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="navOut">
            <div className="navbar">
                <p>Shopy</p>
                <div className="navD">
                    <Link to = "/lgin"><button>Login</button></Link>
                    <Link to = "/rgistr"><button>Register</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}