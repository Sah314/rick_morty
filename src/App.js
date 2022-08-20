import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./Components/Filters/Filters";
import Cards from "./Components/Cards/Cards";
import Pagination from './Components/Pagination/Pagination';
import { SearchBar } from './Components/Search/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Carddetails from './Components/Cards/Carddetails';


function App(){
  return(
    <Router>
      <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Carddetails/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<Carddetails/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<Carddetails/>}/>
      </Routes>
      </div>
    </Router>
    
  )
}
const Home =()=> {
  let [gender, updategender] = useState("");
  let [species, updatespecies] = useState("")
  let [status,updatestatus]=useState("");
  let [pageNumber,updatePageNumber] = useState(1);
  let[search,updatesearch] = useState("");
  let [fetcheddata , updateFetcheddata] =useState([]);
  let {info,results} = fetcheddata;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  useEffect(()=>{
    (async ()=>{
      let data= await fetch(api).then(res=>res.json());
      updateFetcheddata(data);
    })()  
    
  },[api])
  return (
    <div className="App">
      <h1 className='text-center my-2'>Characters</h1>
        <SearchBar updatesearch={updatesearch} updatePageNumber={updatePageNumber}/>
      <div className="container">
        <div className="row">
            <Filters 
            updatespecies={updatespecies}
            updategender={updategender}    updatestatus={updatestatus} updatePageNumber={updatePageNumber} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination updatePageNumber = {updatePageNumber} pageNumber={pageNumber} info={info}/>
    </div>
  );
}

export default App;
