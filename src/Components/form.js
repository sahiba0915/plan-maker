import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, plan, setPlan}) => {

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  const formSubmit= (event) =>{
    event.preventDefault();
    setPlan([...plan, {id: uuidv4(), title: input, completed: false}])
    setInput("");
  }

  return (
    <form onSubmit={formSubmit}>
        <input type="text" placeholder='Enter your plan' className='text-input' value = 'input' required onChange={inputHandler}/>
        <button className='btn-add' type='submit'>Add</button>
    </form>
  )
}

export default Form 