import React from 'react';
import './App.css';
import Header from './Components/header';
import Form from './Components/form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App= () => {
  return (
  <div className='container'>
    <div className='app-wrapper'>
      <div>
    <Header />
    </div>
    <div>
    <Form />
    </div>
    </div>
    </div>
    )
}


export default App;
