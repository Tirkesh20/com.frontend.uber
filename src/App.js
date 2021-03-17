import React from 'react'
import{Switch,Route,BrowserRouter as Router} from'react-router-dom'
import Login from './login/login'
import register from "./login/register";

const App=()=> {
  return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={register}/>
            </Switch>
            </Router>
        </div>
  )
}

export default App;
