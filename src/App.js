import React from "react";
import Main from "./componens/MainComponent";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import './App.css';


class App extends React.Component{
  render(){
    return (
     
      <div className="App">
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
       
      </div>
     
   
    );
  }
}

export default App;
