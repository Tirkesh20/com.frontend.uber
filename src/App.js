import React from 'react'
import{Switch,Route,BrowserRouter as Router} from'react-router-dom'
import Login from './login/login'

const App=()=> {
  return (
        <div>
            <Router>
            <Switch>
                <Route exact path='/' component={Login}/>
            </Switch>
            </Router>
        </div>
  )
}

export default App;
