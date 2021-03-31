import React from 'react'
import{Switch,Route,BrowserRouter as Router} from'react-router-dom'
import login from './login/login'
import register from "./login/register";
import main from './main';
import userInterface from './userInterface';
import createLocation from "./components/CreateLocation";
import CreateOrder from "./components/CreateOrder"

const App=()=> {
  return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={main}/>
                <Route exact path='/reg' component={register}/>
                <Route exact path='/log' component={login}/>
                <Route exact path='/home' component={userInterface}/>
                <Route exact path='/order' component={CreateOrder}/>
                <Route exact path='/location/create' component={createLocation}/>
            </Switch>
            </Router>
        </div>
  )
}

export default App;
