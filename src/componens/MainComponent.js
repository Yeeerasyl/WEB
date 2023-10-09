import React  from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import LoginPage from "../pages/LoginPage/LoginPage";
import { Switch,Route,Redirect,withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Main(){
    return(
        <React.Fragment>

                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/login' component={LoginPage}/>
                    <Redirect to='/home'/>
                </Switch>


        
        </React.Fragment>
    )
}

export default withRouter (Main);