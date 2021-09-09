import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button, Dropdown, Form, Table } from 'semantic-ui-react'
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
    thanhPho:[],
  }

  
  
  componentDidMount(){
    // axios.get('http://localhost:5600/baiHoc2/thanhPho')
    axios.get('http://localhost:5600/baiHoc2/thanhPho?nameThanhPho=all')

    .then(res => {
      if(res.data==='Không kết nối với MongoDB'){
        this.setState({coLoi: res.data});
      }
      else{
        this.setState({thanhPho: res.data});
      }
    })
  }


  
  render() {
    const { thanhPho,  } = this.state
    
    return (
    
      <div>
        Thành Phố
        <br/><br/>

        <Dropdown
          // search
          selection
          multiple
          options={options}
          placeholder='Choose an option'
          // value={this.state.ngayAdd}
          // onChange={this.onChangeThemNgayMoi}
          />

          <br/><br/>


        {thanhPho
          ?
          <Table celled selectable inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Lục Địa</Table.HeaderCell>
                <Table.HeaderCell>Nước</Table.HeaderCell>
                <Table.HeaderCell>Tên</Table.HeaderCell>
                <Table.HeaderCell>Cờ</Table.HeaderCell>
                
              </Table.Row>
            </Table.Header>
            
            {thanhPho.map((moiThanhPho, index)=>
              <Table.Body>
                <Table.Row >
                  <Table.Cell>{moiThanhPho.LucDia}</Table.Cell>
                  <Table.Cell>{moiThanhPho.Nuoc}</Table.Cell>
                  <Table.Cell>{moiThanhPho.Ten}</Table.Cell>
                  <Table.Cell><Image src={moiThanhPho.Co} width={100}></Image></Table.Cell>
                </Table.Row>
              </Table.Body>
            )}


          </Table>
          :null
        }

      </div>
    
    )
  }
}
export default ThanhPho;