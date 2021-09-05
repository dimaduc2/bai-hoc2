import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button, Dropdown, Form } from 'semantic-ui-react'
import axios from 'axios';

const options = [
  { key: 1, text: 'Thứ hai', value: 'Thứ hai' },
  { key: 2, text: 'Thứ ba', value: 'Thứ ba' },
  { key: 3, text: 'Thứ tư', value: 'Thứ tư' },
  { key: 4, text: 'Thứ năm', value: 'Thứ năm' },
  { key: 5, text: 'Thứ sáu', value: 'Thứ sáu' },
  { key: 6, text: 'Thứ bảy', value: 'Thứ bảy' },
  { key: 7, text: 'Chủ nhật', value: 'Chủ nhật' },
]

class ThanhPho extends Component {

  state = {
    
  }

  
  
  componentDidMount(){
    axios.get('http://localhost:5600/baiHoc2/thanhPho')
  }

  
  render() {
    const {  } = this.state
    
    return (
    
      <div>
        Thành Phố
        {/* <Dropdown placeholder='Skills' fluid multiple selection options={options} /> */}

        <Dropdown
          search
          selection
          multiple
          options={options}
          placeholder='Choose an option'
          // value={this.state.ngayAdd}
          // onChange={this.onChangeThemNgayMoi}
          />


      </div>
    
    )
  }
}
export default ThanhPho;