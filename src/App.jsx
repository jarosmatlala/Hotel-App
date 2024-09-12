import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./components/Login";
import { Container, Row, Col } from "react-bootstrap";
import Signup from "./components/Signup";
import { Button } from 'bootstrap';
// import Home from "./components/Home";
import { UserAuthContextProvider } from './context/UserAuthContext';
import Navbar from './components/Navbar.jsX';
import Accommodation from './components/Accommodation'; 
import Droom from './components/Droom';
import Gallery from './components/Gallery';
import CustomDatePicker from './components/DatePicker';
import selectedDate from './components/DatePicker';
import handleDateChange from './components/DatePicker';
import DatePickerWithLayout from './components/DatePickerWithLayout';




function App() {

  return (
    <div>
<UserAuthContextProvider>
      <Container>
        <Row>
          <Col>
            {/* <UserAuthContextProvider> */}
              <Routes>
                {/* <Route path="/home" element={<ProtectedRoute>
                  <Home/>
                </ProtectedRoute>} />  */}
                <Route path="LogIn" element={<Login />} />
                <Route path="/" element={<Accommodation />} /> 
                <Route path="Droom" element={<Droom />} />
                <Route path="Gallery" element={<Gallery />} />
                <Route path="DatePicker" element={< CustomDatePicker/>} />
                <Route path="Date" element={<DatePickerWithLayout/>} />

                 <Route path="SignUp" element={<Signup />} />
              </Routes>           
                        {/* </UserAuthContextProvider> */}
          </Col>
        </Row>
      </Container> 
      </UserAuthContextProvider>


    </div>
  );
}

export default App;
