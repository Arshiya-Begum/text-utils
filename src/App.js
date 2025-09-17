import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  let [alertText, setalertText] = useState(null)
  const showAlert = (message, type) => {
    setalertText({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setalertText(null)
    }, 1500)
  }

  let [mode, setMode] = useState("light")
  const toggleMode = () => {
    if (mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled.","success")
      
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is enabled.","success")
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="Text Utils" aboutText="About Text Utils" mode={mode}/> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alertText={alertText}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
