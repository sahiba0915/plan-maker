import React from 'react'

const Plan = ({plan, setPlan}) => {
  return (
    <div>
        {plan.map((plan)=>(
        <li className='plan-list' key={plan.id}>
            <input
            type="text"
            value={plan.title}
            className="list"
            onChange={(event) => event.preventDefault()}
            />
        </li>
    ))}</div>
  )
}

export default Plan