import React from 'react'
import Filterbtn from '../Filterbtn'

const Species = ({updatespecies,updatePageNumber}) => {
  let species =['Human','Humanoid','Alien','Unknown','Mythological','Animal','Poopybutthole','Disease','Robot','Cronenburg','Planet'];

  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Species      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-1">
      {
        species.map((items,index)=>(
          <Filterbtn
          task={updatespecies} 
          updatePageNumber={updatePageNumber}
          key = {index} name ="species" index ={index} items={items}/>
        ))
      }
      </div>
    </div>
  </div>

  )
}

export default Species