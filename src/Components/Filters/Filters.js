import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
const Filters = ({updatestatus,updatePageNumber,updategender,updatespecies}) => {
  let clear=()=>{
    updatestatus("");
    updatePageNumber("");
    updategender("");
    updatespecies("");
    window.location.reload(false)
  };
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 my-3 ">Filter</div>
      <div 
      onClick={clear}
      style={{cursor:'pointer'}}className="text-center text-decoration-underline text-primary mb-4">Clear Filters</div>

      <div className="accordion" id="accordionExample">
    <Gender updategender={updategender} updatePageNumber={updatePageNumber}/>
    <Species updatespecies={updatespecies}/>
    <Status updatestatus={updatestatus} updatePageNumber={updatePageNumber}/>
</div>
    </div>
  )
}

export default Filters;