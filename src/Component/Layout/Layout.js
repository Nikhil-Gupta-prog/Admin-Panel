import React from 'react';

import "./Layout.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SignUpPage from "../../Pages/SignUpPage";
import SignInPage from "../../Pages/SignInPage";
import CardPage from "../../Pages/CardPage";
import ChartPage from "../../Pages/ChartPage";
import UserPage from "../../Pages/UserPage";

const Layout = () => {
    return (
        <div className="layout">
            <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/signup" exact>
                <SignUpPage />
             </Route>
             <Route path="/signin" exact>
                <SignInPage />
                </Route>
                <Route path="/users" exact>
                 <UserPage />
                </Route>
                <Route path="/chart" exact>
                 <ChartPage />
                </Route>
                <Route path="/card" exact>
                 <CardPage />
                </Route>
        </Switch>
        </div>
    )
}

export default Layout;
