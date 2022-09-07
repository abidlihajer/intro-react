import React, { useState, useEffect } from 'react';
import Search from './Search.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Form.js'


import HeaderAndFooterExample from "./footer"
import axios from 'axios'
function App() {
  const [data, setdata] = useState([]);



 useEffect(()=>{
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles',{
      headers: {
        Authorization:"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",
      }
    }).then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
  })
    return (
      <div className="App">
        <Search/>
        <div className="row no-gutters">
          <div className="col-12 col-sm-6 col-md-8"><BasicExample/></div>
          
        </div>
      
        <HeaderAndFooterExample/>
      
      </div>
      
    );
    
  }

export default App
