import React,{useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
const Pagination = ({info,updatePageNumber,pageNumber}) => {
let [width,updatewidth] = useState(window.innerWidth);
console.log(width);
useEffect(()=>{
  window.addEventListener("resize",updatedime);
  return ()=> window.removeEventListener("resize",updatedime);
},[]);
let updatedime=()=>{
  updatewidth(window.innerWidth);
}
    // let next = ()=>{
    //     updatePageNumber((page)=> page+1)
    // }
    // let prev = ()=>{
    //     if(pageNumber===1)
    //     return;
    //     updatePageNumber((page)=> page-1)
    // }
  // return (
  //   <div className="container d-flex justify-content-center gap-3">
  //      <button onClick={prev} className="btn btn-primary">Prev</button> 
  //      <button onClick={next} className="btn btn-primary">Next</button> 
  //   </div>
  // )
 // console.log(info.pages);
 
  return(<>
  <style jsx>
    {`
    @media (max-width:768px){
       .next,.prev{
        display:none;
       }
       ,pagination{
        font-size:14;
       }
    }
    `}
  </style>
  <ReactPaginate className=' pagination justify-content-center gap-2 mx-2' 
  nextLabel={`Next`}
  forcePage={pageNumber===1?0:pageNumber-1}
  previousLabel="Prev"
  nextClassName={`btn btn-primary ${styles.paginate} next`}
  previousClassName={`btn btn-primary ${styles.paginate} prev`}
  pageClassName="page-item" 
  marginPagesDisplayed={3}
  pageLinkClassName='page-link'
  activeClassName='active'
  onPageChange={(data)=>{
    updatePageNumber(data.selected+1)
  }}
    pageCount={info?.pages} />
    </>); 
};

export default Pagination;