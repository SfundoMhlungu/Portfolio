import React, { Component }  from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from "./main";
export class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
        wher: "main"

    };


    
}

   


  render(){
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
 
}

export default App;
