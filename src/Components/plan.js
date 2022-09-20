import React from 'react'

const Plan = ({plan, setPlan}) => {
  return (
    <div>
        {plan.map((plan)=>(
        <li className='list-item' key={plan.id}>
            <input
            type="text"
            value={plan.title}
            className="list"
            onChange={(event) => event.preventDefault()}
            />
           <div>
           <button className='btn-edit task-button'>
            <i className='fa fa-edit'></i>
          </button>

          <button className='btn-delete task-button'>
            <i className='fa fa-trash'></i>
          </button>
           </div>
            
        </li>
    ))}</div>
  )
}

export default Plan