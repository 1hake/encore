import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AssociatePage } from "../pages/AssociatePage";
import { B2BPage } from "../pages/B2bPage";
import { DisplayPage } from "../pages/Display";
import { MainPage } from "../pages/MainPage";
import { MyProvider } from "./Context";
import "../pages/App.css";
import { Gallery } from "../components/display/Galery";



export const MyRouter = () => {
    return (
        <Router>
            <MyProvider>
                <Switch>
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/histoires/:id" component={DisplayPage} />

                    <Route path="/b2b">
                        <B2BPage></B2BPage>
                    </Route>
                    <Route exact path="/associes">
                        <AssociatePage></AssociatePage>
                    </Route>
                    <Route path="/" component={MainPage} />
                </Switch>
            </MyProvider>
        </Router >
    );
}

