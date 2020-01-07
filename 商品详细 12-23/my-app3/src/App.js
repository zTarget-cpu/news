import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Baseindex from './Baseindex/index'
import './Baseindex/css/index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Baseindex></Baseindex>
      </BrowserRouter>
    </div>
  );
}

export default App;
