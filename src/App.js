import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';

//https://jsonplaceholder.typicode.com/comments
function App() {

  const [data, setData] = useState()

  useEffect(()=>{
    getData()
  },[])

  const getData = () =>{
    axios('https://localhost:7214/api/Borns')
    .then((res) => {
      setData(res.data)
      console.log(res.data)
    })}

    const selectRow={
      mode:"checkbox",
      clickToSelect: true,
      clickToEdit: true,
    }
  const columns=[
  {
    dataField: "id",
    text: "ID",
    sort: true,
    editable: false,
  },
  {
    dataField: "region",
    text: "Region",
    sort: true,
    filter:textFilter(),
  },
  {
    dataField: "kön",
    text: "Kön",
    sort: true,
  },
  {
    dataField: "levandeFödda2016",
    text: "2016",
    sort: true,
  },
  {
    dataField: "levandeFödda2017",
    text: "2017",
    sort: true,
  },
  {
    dataField: "levandeFödda2018",
    text: "2018",
    sort: true,
  },
  {
    dataField: "levandeFödda2019",
    text: "2019",
    sort: true,
  },
  {
    dataField: "levandeFödda2020",
    text: "2020",
    sort: true,
  },
]

  return (
    <div className="App">
      <div className="rubrik">Födda 2016-2020</div>
     { data &&
      <BootstrapTable 
      keyField="id" 
      data={data} 
      columns={columns} 
      striped 
      hover 
      condensed
      pagination={paginationFactory()}
      cellEdit={cellEditFactory({
        mode:"click",
        blurToSave:true,
      })}
      selectRow={selectRow}
      filter={filterFactory()}
      /> 
     } 
    </div>
  );
}

export default App;