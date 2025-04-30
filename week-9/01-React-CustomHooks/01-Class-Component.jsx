import "./App.css"
import React, { useState } from "react";

function App() {
    return <div className=" h-screen flex items-center justify-center">
    <MyComponent/>
  </div>;
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};
  }

  increaseCount = () =>{
    this.setState({count : this.state.count +1})
  }
  
  render() {
    return(
      
      <button className="border-2"  onClick={this.increaseCount}>Count {this.state.count}</button>
    )
  }
}

export default App;
