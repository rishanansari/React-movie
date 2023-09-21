import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import data from './data/data.json';


const App=()=>{
  const [searchvalue,setSearchvalue]=useState("");

const inputHandler=(event)=>{
  setSearchvalue(()=>event.target.value);
}

//populate the card logic->filter 
const returnCards=()=>{
  return data.filter(
    (card)=>
    card.title.toLowerCase().includes(searchvalue.toLowerCase())||searchvalue===""
  );
}

  return(
    <div>
      <Navbar inputHandler={inputHandler}/>
      <MovieCard data={data} returnCards={returnCards} />
      <Footer/>
    </div>
  )
}
export default App;
