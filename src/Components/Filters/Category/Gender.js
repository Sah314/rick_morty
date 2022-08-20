import React from 'react'
import Filterbtn from '../Filterbtn'

const Gender = ({updategender,updatePageNumber}) => {
  let gender = ['female',"male",'genderless','none']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-1">
        {gender.map((items,index)=>(<Filterbtn 
        task={updategender}updatePageNumber={updatePageNumber}
        key = {index} name ="gender" index ={index} items={items} />))}
      </div>
    </div>
  </div>
  )
}

export default Gender