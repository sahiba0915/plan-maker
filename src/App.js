import React from 'react';
import './App.css';
import Header from './Components/header';
import Form from './Components/form';
import Plan from './Components/plan';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

const App= () => {
  const initialState = JSON.parse(localStorage.getItem("plan")) || [];
  const [input, setInput] = useState("");
  const [plan, setPlan] = useState(initialState);
  const [editPlan, setEditPlan] = useState(null);

  useEffect(() =>{
    localStorage.setItem("plan", JSON.stringify(plan));
  }, [plan]);

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
    editPlan = {editPlan}
    setEditPlan = {setEditPlan}
    />
    </div>

    <div>
      <Plan 
      plan={plan} 
      setPlan={setPlan} 
      setEditPlan={setEditPlan}
      />
    </div>
    </div>
    </div>
    )
}


export default App;
