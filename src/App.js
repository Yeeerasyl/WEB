import React from "react";
import Main from "./componens/MainComponent";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

class App extends React.Component{
  render(){
    return (
        <div>   
          
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
          
        
        </div>
   
    );
  }
}

export default App;
