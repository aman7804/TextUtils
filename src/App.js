// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import {
//   BrowserRouter ,
//   Routes,
//   Route,
// } from "react-router-dom"

function App() {
  const [mode,setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  }); 
  const toggleMode=()=>{
    if(mode.color === 'white' ){
      setMode({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor='white'
    }
    else{
          setMode({
            color: 'white',
            backgroundColor: '#212529'
          })
          document.body.style.backgroundColor='#343a40'
      }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title='TextUtils' about="AboutUs" mode={mode} toggleMode={toggleMode}/>
        <div className='container'>
          {/* <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>       // in " path='' ", react does partialMatching to get the exact component/page use -"exact" key word between route and path
            <Route path='/' element={<TextForm heading='Enter the Text to Analyse' mode={mode}/>}/> 
          </Routes> */}
          <TextForm heading='Enter the Text to Analyse' mode={mode}/>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
  