import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import EditProfile from '../components/EditProfile'
import Home from '../components/Home'
import Login from '../components/Login'
import Profile from '../components/Profile'
import NotFoundPage from '../components/NotFoundPage'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const AppRouter = () => (
    <Router history = {history}>
        <div>            
            <Switch>
                <Route path="/" exact = {true} component={Login}/>
                <Route path = '/home' component = {Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/edit" component={EditProfile}/>
                <Route path = "*" component={NotFoundPage}/>       
            </Switch>
        </div>
    </Router>
);
  
export default AppRouter;