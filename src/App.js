import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      showAlert("Light Mode is enabled.","success");
      // document.title = "TextUtils - Light Mode";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#051c55';
      showAlert("Dark Mode is enabled.","success");
      // document.title = "TextUtils - Dark Mode";
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="Text Utils" aboutText="About Text Utils" mode={mode}/> */}
      <Router>
        <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alertText={alertText}/>
        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          {/* <About/> */}
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Case Converter" mode={mode}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
