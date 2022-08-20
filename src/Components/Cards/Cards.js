import styles from './Cards.module.scss'
import {Link} from "react-router-dom";
const Cards = ({results,page}) => {
  let display;
  if(results){
    //console.log(results);
    display =results.map((x)=>{
      let {id,name,image,location,status} = x;
      return (
        <Link style={{textDecoration:"none"}} to={`${page}${id}`} key ={id} className="col-lg-4 col-md-6 col-12 mb-5 position-relative text-dark">
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div className="content p-3">
              <div className="fs-4 fw-bold mb-4"> {name}</div>
              <div className="">
                <div className="fs-6">Last Seen:</div>
                <div className="mb-4 fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if(status==='Alive'){
              return<div className= {`${styles.badge} badge position-absolute bg-success` }>{status}</div>
            }
            else if(status==='Dead'){
            return<div className= {`${styles.badge} badge position-absolute bg-danger` }>{status}</div>
            }
            else{
             return<div className= {`${styles.badge} badge position-absolute bg-secondary` }>{status}</div>
            }
          })()}
        </Link>
      );
    });
  } 
  // else{
  //   display = "No Characters found :(";
  // }
  return (
    <>{display}</>
  )
};

export default Cards;