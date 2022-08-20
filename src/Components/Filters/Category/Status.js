import React from 'react'
import Filterbtn from '../Filterbtn'

const Status = ({updatestatus,updatePageNumber}) => {
    let status= ["Alive","Dead","Unknown"]
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Status      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-1 ">
        {
            status.map((items,index)=>
                (<Filterbtn key={index}
                  task={updatestatus}
                  updatePageNumber={updatePageNumber} 
                  name="status" 
                  index={index} 
                  items={items}/>)
            )
        }
    
      </div>
    </div>
  </div>
  )
}

export default Status