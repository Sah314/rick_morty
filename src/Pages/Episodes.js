import React ,{useState,useEffect} from 'react';
import Cards from '../Components/Cards/Cards';
import InputGrp from '../Components/Filters/Category/InputGrp';
import Pagination from '../Components/Pagination/Pagination';

const Episodes = () => {
  let[id,updateid] = useState(1);
  let [info,updateinfo]=useState([]);
  let [results,updateresults]=useState([]);
  let [pageNumber,updatePageNumber] = useState(1);
  let api=`https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(()=>{(async function(){
    let data = await fetch(api).then((res)=> res.json());
    updateinfo(data);


    let result = await Promise.all(
      data.characters.map((x)=>{
          return fetch(x).then(res=>res.json());
      })
    );
     updateresults(result);
  })();},[api]);
  let {air_date,name} = info;
  console.log(info.count);
  return (
    <>
    <div className='container'>
      <div className="row">
        <h1 className='text-center mb-3'>
        Episode : 
          <span className="text-primary">{name==="" ? "Unknown" : name}</span>
      
        </h1>
        <h5 className='text-center mb-3'>
          Air Date :  <span className="text-primary">{air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGrp name = "Episode" total={51} updateid={updateid}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results}/>
          </div>
        </div>
      </div>

    </div>
    <Pagination updatePageNumber = {updatePageNumber} pageNumber={pageNumber} info={info}/>
    </>
  )
};

export default Episodes;