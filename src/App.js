import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      }
    };
  return (
    <>
      {/* <Navbar title="Text Utils" aboutText="About Us"/> */}
      <Navbar title= 'Text Utils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert= "This is alert"></Alert>
      <div className="container my-3">
      <TextForm heading="Enter your text here" mode= {mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
 