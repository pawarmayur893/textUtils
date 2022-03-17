import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const[mode, setMode]=useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#031f37';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
    <Navbar title= "Mayur" aboutText="About Us" home="Home" mode={mode} toggleMode = {toggleMode}/>
    <TextForm heading="Enter the text to Analys" mode={mode}/>
    </>
  );
}

export default App;
