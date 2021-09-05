import React, { Component } from 'react'
// import { Grid, Card, Image, Popup, Button } from 'semantic-ui-react'
import axios from 'axios';

class DoAn extends Component {

  state = {

  }
  
  componentDidMount(){
    axios.get('http://localhost:5600/baiHoc2/doAn')
  }

  
  render() {
    const {  } = this.state
    
    return (
    
      <div>
        Đồ Ăn
      </div>
    
    )
  }
}
export default DoAn;