import React from 'react'
import{Switch,Route,BrowserRouter as Router} from'react-router-dom'
import login from './login/login'
import register from "./login/register";
import main from './main';
import userInterface from './userInterface';

const App=()=> {
  return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={main}/>
                <Route exact path='/reg' component={register}/>
                <Route exact path='/log' component={login}/>
                <Route exact path='/home' component={userInterface}/>
            </Switch>
            </Router>
        </div>
  )
}

export default App;
