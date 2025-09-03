import "./App.css";
import Alert from "./components/Alert";
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Services from "./components/Services";

function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const [mode, changemode] = useState({
    backgroundColor: 'white',
    color: 'black',
  });
  
  const [name, changename] = useState('Light mode is Enable');

  const convertmode = (color) => {
    // if (color === 'toggle') {
    //   // Toggle between dark and light mode
    //   if (mode.backgroundColor === 'white') {
    //     changemode({
    //       backgroundColor: 'black',
    //       color: 'white',
    //     });
    //     document.body.style.backgroundColor = 'rgb(16 23 51)';
    //     document.body.style.color = 'white';
    //     changename("Enable light mode");
    //     showalert("Dark mode is enabled", "success");
    //   } else {
    //     changemode({
    //       backgroundColor: 'white',
    //       color: 'black',
    //     });
    //     document.body.style.backgroundColor = 'white';
    //     document.body.style.color = "black";
    //     changename('Enable Dark mode');
    //     showalert("Light mode is enabled", "success");
    //   }
    // } else {

     let newMode;

      switch (color) {
        case 'grey':
          newMode = {
            backgroundColor: 'rgb(6 50 71)',
            color: 'white',
          };
          document.body.style.backgroundColor = 'rgb(6 50 71)';
          document.body.style.color = 'white';
          break;
        case 'green':
          newMode = {
            backgroundColor: '#e6ffe6',
            color: '#003300',
          };
          document.body.style.backgroundColor = '#e6ffe6';
          document.body.style.color = '#003300';
          break;
        case 'blue':
          newMode = {
            backgroundColor: '#e6f3ff',
            color: '#000066',
          };
          document.body.style.backgroundColor = '#e6f3ff';
          document.body.style.color = '#000066';
          break;

          case 'dark':
          newMode = {
            backgroundColor: 'black',
            color: 'white',
          };
          document.body.style.backgroundColor = 'black';
          document.body.style.color = 'white';
          break;
           case 'light':
          newMode = {
            backgroundColor: 'white',
            color: 'black',
          };
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          break;
        default:
         newMode={
          backgroundColor:'white',
          color:'black'
         }
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
      }
      changemode(newMode);
      changename(`${color} mode is Enable`);
      showalert(`${color} mode is enabled`, "success");
    }
  

  return (
    <>
      <Router>
        <Navbar 
          title="Home" 
          about="About" 
          service="Service" 
          mode={mode} 
          othermode={convertmode}  
          name={name} 
        />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Text heading="Enter the text" showAlert={showalert} mode={mode} />} />
            <Route exact path="/service" element={<Services mode={mode} />} />
          </Routes>
        </div>
      </Router>     
    </>
  );
}

export default App;