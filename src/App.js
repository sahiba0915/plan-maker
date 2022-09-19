import React from 'react';
import './App.css';
import Header from './Components/header';
import Form from './Components/form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App= () => {

  const [input, setInput] = useState("");
  const [plan, setPlan] = useState([]);
  return (
  <div className='container'>
    <div className='app-wrapper'>
      <div>
    <Header />
    </div>
    <div>
    <Form 
    input = {input}
    setInput = {setInput}
    plan = {plan}
    setPlan = {setPlan}
    />
    </div>
    </div>
    </div>
    )
}


export default App;
