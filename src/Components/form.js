import React from 'react';
import {v4 as uuidv4} from "uuid";
import { useEffect } from "react";

const Form = ({input, setInput, plan, setPlan, editPlan, setEditPlan}) => {

  const updatePlan = (title, id, completed) =>{
     const newPlan = plan.map((plans) => 
     plans.id === id ? {title, id, completed}: plans
  );
  setPlan(newPlan);
  setEditPlan("");
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  }


  useEffect(() => {
    if(editPlan){
      setInput(editPlan.title);
    }else {
      setInput("");
    }
  }, [setInput, editPlan]);


  const formSubmit= (event) =>{
    event.preventDefault();
    if(!editPlan){
    setPlan([...plan, {id: uuidv4(), title: input, completed: false}])
    setInput("");
    }else {
      updatePlan(input, editPlan.id, editPlan.completed);
    }
  }

  return (
    <form onSubmit={formSubmit}>
        <input type="text" placeholder='Enter your plan' className='task-input' value = {input} required onChange={inputHandler}/>
        <button className='btn-add' type='submit'>{editPlan ? "Ok" : "Add"}</button>
    </form>
  )
}

export default Form 