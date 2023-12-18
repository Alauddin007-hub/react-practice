import React from "react";

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red", wheels:6};
    }
    render() {
      return (
        <div>
            <h2>Hi, I am a Car!</h2>
            <h3>My Car is {this.state.color} with {this.props.wheels} Wheels</h3>
        </div>
      )
      
    }
  }

  class Garage extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>This is Garage where Cars live</h1>
                <Car color="Black" wheels="4" />
            </div>
        )
    }
  }

  export default Garage;