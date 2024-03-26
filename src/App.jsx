// import { useEffect } from "react";
// import { locationApi } from "./api/locationApi"

// function App() {
//   useEffect(() =>{
//     const getData = async() =>{
//       const data = await locationApi.getAllLocation({gender: 'Female'})
//       console.log(data);
//     }
//     getData()
//   },[])
//   return(
//     <>

//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Logo from './components/Logo'
import DefiePerson from './pages/DefinePerson'


function App() {
  

  return (
    <>
    <Header/>
    
    <div style={{marginTop:'120px'}}>
      <Logo/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/charackter/:id' element={<DefiePerson/>}/>
        
      </Routes>
    </div>
    </>
  )
}

export default App

