import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component{
  state ={
   // name:"Harry", age:25, belt:"Black"

    ninjaArray: [
      {name:"Harry", age:45, belt:"Black", id:1},
      {name:"Ronald", age:15, belt:"Blue", id:2},
      {name:"Messy", age:35, belt:"Green", id:3}
    ]
  }

  addNinja = (ninja) =>{
      ninja.id = Math.random();
      let NewNinjaArray = [...this.state.ninjaArray, ninja];
      this.setState({
        ninjaArray : NewNinjaArray
      })
  }

  deleteNinja = (id) => {
    //console.log(id)
    let NewNinjaArray = this.state.ninjaArray.filter(ninja =>{
      return ninja.id !== id
    });
    this.setState({
      ninjaArray : NewNinjaArray
    })
  }

  render(){
    return(
      <div className="App">
        <h1>This is react App</h1>
        <p>Welcome</p>
        
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjaArray}/>
        <AddNinja addNinja = {this.addNinja}/>

      </div>
    )
  }
}

export default App;


