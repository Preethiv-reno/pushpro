import './App.css';
import { Container,Row,Col,Table,Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getDataActions } from './redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const getdata = useSelector(state=>state.getDataReducer.getDataFormJSON);
  const dispatch = useDispatch();
  
  const getData = () =>{
    dispatch(getDataActions.getJSONData());
  }
  return (
    <div className="App">
      <Container>
        <div className='ForContainer'>
        <Row>
          <Col>
          <h3 className='bottomspace'>Sample Table</h3>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className='ForPara bottomspace'>
            You should able to recreate this table.By efault, the content of the table should be empty.
            When you click the button, it should fetch the data located at http://aimtell.com/files/sites.json
            using axios and insert it into the page using React JS.
          </div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className='bottomspace' style={{float:'right'}}>
          <Button variant="primary" size="sm" onClick={()=>getData()}>Load Data</Button>
        </div>
        </Col>
        </Row>
        <Row>
          <Col>
          <div className='bottomspace'>
          { getdata && 
           <Table style={{textAlign:"left"}}>
             <thead>
               <tr>
                 <th>id</th>
                 <th>name</th>
                 <th>url</th>
               </tr>
             </thead>
             <tbody>
               { getdata && getdata.sites.map((item,i)=>(
                 <tr key={i}>
                 <td><b>{item.id}</b></td>
                 <td>{item.name}</td>
                 <td>{item.url}</td>
                 </tr>
               ))}
              
             </tbody>
           </Table>
          }
          </div>
           </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
