import React ,{useState,useEffect} from 'react';
import Cards from '../Components/Cards/Cards';
import InputGrp from '../Components/Filters/Category/InputGrp';
import Pagination from '../Components/Pagination/Pagination';

const Location = () => {
  let[id,updateid] = useState(1);
  let [info,updateinfo]=useState([]);
  let [results,updateresults]=useState([]);
  let [pageNumber,updatePageNumber] = useState(1);
  
  let api=`https://rickandmortyapi.com/api/location/${id}`;
  
  let {name,type,dimension,count} = info;
  
  useEffect(()=>{(async function(){
    let data = await fetch(api).then((res)=> res.json());
    updateinfo(data);


    let result = await Promise.all(
      data.residents.map((x)=>{
          return fetch(x).then(res=>res.json());
      })
    );
     updateresults(result);
  })();},[api]);
  console.log(results);
  return (
    <>
    <div className='container'>
      <div className="row">
        <h1 className='text-center mb-3'>
        Location : 
          <span className="text-primary">{name==="" ? "Unknown" : name}</span>
      
        </h1>
        <h5 className='text-center mb-3'>
          Dimension :  <span className="text-primary">{dimension === "" ? "Unknown" : dimension}</span>
        </h5>
        <h6 className='text-center mb-3'>
          Type :  <span className="text-primary">{type === "" ? "Unknown" : type}</span>
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGrp name = "Location" total={126} updateid={updateid}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results}/>
          </div>
        </div>
      </div>

    </div>
    <Pagination updatePageNumber = {updatePageNumber} pageNumber={pageNumber} info={info}/>
    </>
  )
};

export default Location;