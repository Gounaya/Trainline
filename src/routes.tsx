import React from "react";
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import UserPanel from "./components/UserPanel/UserPanel";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/userpanel" component={UserPanel}><UserPanel/></Route>
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Routes;