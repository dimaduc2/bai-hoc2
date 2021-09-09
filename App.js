import React, { Component } from 'react'

import logo from './logo.svg';

import './App.css';
import Home from './Home'
import DoAn from './DoAn'
import ThanhPho from './ThanhPho'

import {Menu, Button, Dropdown, Form, Table, Popup, Label, Radio, Rating, Image, Grid, Card} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, Car} from 'react-router-dom'

class App extends Component {

  chonMenu = (e, { name }) => {
    this.setState({ dangChonGi: name});
  }

  // chonMenu = (e, { name }) => {
  //   this.setState({ dangChonGi: name});
  //   // alert(name)
  // }


  render() {
    // const { dangChonGi, mauSangToi, mauMenu } = this.state
    return (

        <div className="App">

          <Router>
            <Menu>
              <Menu.Item
                as={Link}
                to="/"
                name='Home'
                // active={this.state.dangChonGi === 'Home'}
                onClick={this.chonMenu}>
              </Menu.Item>


              <Menu.Item
                as={Link}
                to="/ThanhPho"
                name='Thanh pho'
                // active={this.state.dangChonGi === 'ThanhPho'}
                onClick={this.chonMenu}>
              </Menu.Item>


              <Menu.Item
                as={Link}
                to="/DoAn"
                name='Do an'
                // active={this.state.dangChonGi === 'DoAn'}
                onClick={this.chonMenu}>
              </Menu.Item>
            </Menu>
            <Route exact path = "/"  component = {Home} />
            <Route path = "/DoAn" render={() => <DoAn  />} />
            <Route path = "/ThanhPho" render={() => <ThanhPho  />} />

          </Router>


        </div>




    );
  }



}
export default App;





// function App() {
//   return (
//     <Router>

    
//       <div className="App">


//             <Menu>
//               <Menu.Item
//                 as={Link}
//                 to="/"
//                 name='Home'
//                 // active={this.state.dangChonGi === 'Home'}
//                 // onClick={this.chonMenu}
//                 >
//               </Menu.Item>
//             </Menu>

//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </Router>



//   );
// }

// export default App;
