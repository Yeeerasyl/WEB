import React  from "react";
import Header from "./HeaderComponenrs";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import LoginPage from "../pages/LoginPage/LoginPage";
import { Switch,Route,Redirect,withRouter } from "react-router-dom/cjs/react-router-dom.min";

function Main(){
    return(
        <React.Fragment>



            <Header></Header>

                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/login' component={LoginPage}/>
                    <Redirect to='/home'/>
                </Switch>



            <Footer></Footer>
        </React.Fragment>
    )
}

export default withRouter (Main);