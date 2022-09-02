import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const  [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Routes> */}
            {/* <Route path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route path="/" element={<TextForm heading="Enter the text to be analyzed"  mode={mode} showAlert={showAlert} />}> */}
            {/* </Route> */}
          {/* </Routes> */}
          <TextForm heading="Enter the text to be analyzed"  mode={mode} showAlert={showAlert}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
