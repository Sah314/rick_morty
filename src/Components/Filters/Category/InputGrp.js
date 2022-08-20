import React from 'react'

const inputgrp = ({total,updateid,name}) => {
  return (
    <div className="input-group mb-3">
  <select 
  onChange={e=>updateid(e.target.value)}
  className="form-select" id={name}>
    <option selected value='1'>Choose...</option>
    {
      [...Array(total).keys()].map(x=>{
        return(
          <option value={x+1}>{name}- {x+1}</option>

        )
      })
    }
  </select>
</div>
  )
}

export default inputgrp