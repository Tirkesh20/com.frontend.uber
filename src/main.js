import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import register from "./login/register";
import login from "./login/login";
import "./main.css"

const main=()=> {
    return (
        <div>
            <body>
            <ul>
                <li><a href="/log">Log in</a></li>
                <li>     </li>
                <li><a href="/reg">Log on</a></li>
            </ul>
            </body>
        </div>
    )
}

export default main;