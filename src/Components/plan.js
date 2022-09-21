import React from 'react';

const Plan = ({plan, setPlan, setEditPlan}) => {


  const handleComplete = (plans) =>{
    setPlan(
      plan.map((item) => {
        if(item.id === plans.id){
          console.log(item);
          return {...item, completed: !item.completed}
        }
        return item;
      })
    );
};

  const handleDelete = ({id}) => {
    setPlan(plan.filter((plans) => plans.id !== id))
  }

  const handleEdit = ({id}) => {
    const findPlan = plan.find((plans) => plans.id === id);
    setEditPlan(findPlan);
  };


  return (
    <div>
        {plan.map((plans)=>(
        <li className='list-item' key={plans.id}>
            <input
            type="text"
            value={plans.title}
            className={`list ${plans.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
            />
           <div>
           <button className='btn-complete task-button' onClick={() => handleComplete(plans)}>
            <i className='fa fa-check-circle'></i>
          </button>

           <button className='btn-edit task-button' onClick={() => handleEdit(plans)}>
            <i className='fa fa-edit'></i>
          </button>

          <button className='btn-delete task-button' onClick={() => handleDelete(plans)}>
            <i className='fa fa-trash'></i>
          </button>
           </div>
            
        </li>
    ))}</div>
  )
}

export default Plan