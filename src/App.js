import React, { Component } from 'react';
import './App.css';
import {Grid} from './components/Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      p1: 0,
      p2: 0
    }
    this.changeResult = this.changeResult.bind(this)
  }

  changeResult(rest){
    if(rest===1){
      this.setState({p1: this.state.p1+1})
    }else if(rest===2){
      this.setState({p2: this.state.p2+1})
    }
  }

  render() { 
    return (
      <div className="App">
      <header className="App-header">
        <h1>P1: {this.state.p1}</h1>
        <Grid result={this.changeResult}/>
        <h1>P2: {this.state.p2}</h1>
      </header>
    </div>
    );
  }
}

export default App;
