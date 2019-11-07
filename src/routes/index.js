import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthLogin from '../containers/AuthLogin'
import Dashboard from '../containers/Dashboard'
import Page404 from '../containers/Page404'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={AuthLogin} />
            <Route component={Page404} />
        </Switch>
    )
}

export default Routes