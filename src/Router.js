import React from 'react';
import { BrowserRouter as Brow, Switch, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Router() {
    return (
        <Brow>

            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
            </Switch>

        </Brow>
    )
}