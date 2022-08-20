import React from 'react'

const Fiterbtn = ({items,name,index,task,updatePageNumber}) => {
  return (
    <div>
     <style jsx>
      {
      `
      .x:checked + label{
        background-color: #0b5ed7;
        color : white;
      }
      input[type="radio"]{
        display:none;
      }
        `
      }</style> 
      <div className="form-check">
    <input 
    onClick={()=>{
      task(items);
      updatePageNumber(1);
    }}
    className="form-check-input x" type="radio" 
    name={name} 
    id={`${name}-${index}`}/>
    <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
  </div>
  
  </div>
  )
}

export default Fiterbtn