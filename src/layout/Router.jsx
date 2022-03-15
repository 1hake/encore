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
import { Gallery } from "../components/gallery";
import { Waitlist } from "../components/waitlist";
import { Brands } from "../components/brands";

const generateBrandRoute = (brandName, brandLogo, url) => {
    return (
        <Route exact path={"/" + brandName}>
            <Brands brandName={brandName} brandLogo={brandLogo} />
        </Route>
    )
}


export const MyRouter = () => {
    return (
        <Router>
            <MyProvider>
                <Switch>
                    <Route path="/histoires/:id" component={DisplayPage} />

                    <Route exact path="/histoires" component={Gallery} />
                    <Route exact path="/waitlist" component={Waitlist} />
                    {generateBrandRoute("crushon", "crushon.jpeg", "/crushon")}
                    {generateBrandRoute("lysis", "lysis.jpeg", "/jpeg")}

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

