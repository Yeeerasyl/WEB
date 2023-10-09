import React from "react";
import Main from "./componens/MainComponent";
import SideBar from "./componens/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import './App.css';



class App extends React.Component{
  render(){
    return (
     
    <div className="app-container">
      
      <div>
        <SideBar></SideBar>
      </div>
      <div className="main-content">
      <BrowserRouter>
        <Main/>
      </BrowserRouter> 
      </div>

      <div className="news-sidebar">
        <h1>Новости</h1>
      </div>
    </div>
      
   
    );
  }
}

export default App;
