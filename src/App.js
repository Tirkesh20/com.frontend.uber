import React from 'react'
import{Switch,Route,BrowserRouter as Router} from'react-router-dom'
import login from './login/login'
import register from "./login/register";
import main from './main';

const App=()=> {
  return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={main}/>
                <Route exact path='/reg' component={register}/>
                <Route exact path='/log' component={login}/>
            </Switch>
            </Router>
        </div>
  )
}

export default App;
