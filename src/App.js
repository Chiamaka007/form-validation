import React from 'react';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './components/App.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid div-wrapper'>
        
      <Router>
     
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
    
        </Routes>
      
    </Router>
        
</div>
    </div>
  );
}

export default App;
