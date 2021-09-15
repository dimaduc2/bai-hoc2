import React, { Component } from 'react'
import { Grid, Card, Image, Popup, Button, Dropdown, Form, Table } from 'semantic-ui-react'
import axios from 'axios';

const options = [
  { key: 1, text: 'All', value: 'All' },
  { key: 2, text: 'Châu Á', value: 'Châu Á' },
  { key: 3, text: 'Châu Âu', value: 'Châu Âu' },
  { key: 4, text: 'Châu Mỹ', value: 'Châu Mỹ' },
]

class ThanhPho extends Component {

  state = {
    thanhPho:[],
    chonThanhPho:'All',
  }

  
  
  componentDidMount(){
    // axios.get('http://localhost:5600/baiHoc2/thanhPho')
    axios.get('http://localhost:5600/baiHoc2/thanhPho?nameThanhPho=All')
    .then(res => {
      if(res.data==='Không kết nối với MongoDB'){
        this.setState({coLoi: res.data});
      }
      else{
        this.setState({thanhPho: res.data});
      }
    })
  }

  onChangeChonThanhPho = (e, { value }) => {
    this.setState({chonThanhPho: value})
    axios.get('http://localhost:5600/baiHoc2/thanhPho/TP?chonThanhPhoName='+value)
    // .then(res => {
    //   if(res.data==='Không kết nối với MongoDB'){
    //     this.setState({coLoi: res.data});
    //   }
    //   else{
    //     this.setState({chonThanhPho: res.data});
    //   }
    // })
    
  }


  
  render() {
    const { thanhPho,  chonThanhPho} = this.state
    
    return (
    
      <div>
        Thành Phố
        <br/><br/>

        <Dropdown
          // search
          selection
          
          options={options}
          placeholder='Choose an option'


          value={this.state.chonThanhPho}
          onChange={this.onChangeChonThanhPho}
        />

        <br/><br/>

        {chonThanhPho}

        <br/><br/>


        {thanhPho
          ?
          <Table celled selectable inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Lục Địa</Table.HeaderCell>
                <Table.HeaderCell>Nước</Table.HeaderCell>
                <Table.HeaderCell>Tên</Table.HeaderCell>
                <Table.HeaderCell>Số người</Table.HeaderCell>
                <Table.HeaderCell>Cờ</Table.HeaderCell>
                
              </Table.Row>
            </Table.Header>
            
            {thanhPho.map((moiThanhPho, index)=>
              <Table.Body>
                <Table.Row >
                  <Table.Cell>{moiThanhPho.LucDia}</Table.Cell>
                  <Table.Cell>{moiThanhPho.Nuoc}</Table.Cell>
                  <Table.Cell>{moiThanhPho.Ten}</Table.Cell>
                  <Table.Cell>{moiThanhPho.SoNguoi}</Table.Cell>
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