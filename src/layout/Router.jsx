import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AssociatePage } from "../pages/AssociatePage";
import { B2BPage } from "../pages/B2bPage";
import { MainPage } from "../pages/MainPage";


export const MyRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/b2b">
                    <B2BPage></B2BPage>
                </Route>
                <Route path="/associes">
                    <AssociatePage></AssociatePage>
                </Route>
                <Route exact path="/">
                    <MainPage></MainPage>
                </Route>
            </Switch>
        </Router >
    );
}

