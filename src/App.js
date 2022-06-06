
import { Component } from 'react';
import './App.css';
import Profile from "./profile/Profile";


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state={show: false}
  }
  handleclick=()=>this.setState({show:!this.state.show})
  render(){
    return (
    <div className="App">
       <h1>Checkpoint React State</h1>
       <hr></hr>
       <button onClick={this.handleclick}>Show/Hide</button>
       {this.state.show? <Profile/>:null}

    </div>
  );
}
}
