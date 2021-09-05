import React, { Component } from 'react'
import logo from './logo.svg';

import axios from 'axios';

//import {  } from 'semantic-ui-react'

//import './Compare.css';

class Home extends Component {

  
  componentDidMount(){
    axios.get('http://localhost:5600/baiHoc2/')
  }


  state = {}

  render() {
    //const {  } = this.state

    return (
      <div className="Home">
        
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
export default Home;