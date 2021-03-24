import React from 'react';
import "./main.css"

const userInterface=()=> {
    return(
        <ul>
                <li><a className="active" href="login/login.js">Home</a></li>
                <li><a href="login/login.js">New order</a></li>
                <li><a href="login/login.js">My orders</a></li>
                <li><a href="/log" onClick={()=>localStorage.clear()}>Logout</a></li>
        </ul>
    )

}
export default userInterface;