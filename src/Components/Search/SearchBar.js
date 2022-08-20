import React from 'react'
import styles from "./Search.module.scss"
export const SearchBar = ({updatesearch,updatePageNumber}) => {
  return (
  
     <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-5">
    <input onChange={e=>{updatePageNumber(1);
    updatesearch(e.target.value);}
    }
    className={styles.input}  type="text" placeholder="Search"/>
    <button onClick={e=>{
      e.preventDefault();
    }}  className={`${styles.btn} btn btn-primary mx-3 fs-5`}type="submit">Search</button>
  </form>

  )
}
