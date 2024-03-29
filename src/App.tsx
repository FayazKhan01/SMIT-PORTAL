import './App.css';
import React from "react";
// import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ImageSlider from "./components/slider/ImageSlider";
import Home from "./components/home/Home";
import AddForm from './components/addForm/AddForm';
import Courses from './components/courses/Courses';
import AboutUs from './components/aboutUS/AboutUs';
import ContactUs from './components/contactUs/ContactUs';

function App() {
  return (
    <>
      
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="Addmission-form" element={<AddForm />} />  
            <Route path="about-us" element={<AboutUs />} />  
            <Route path="contact-us" element={<ContactUs />} />  
                      
          </Route>
        </Routes>
    
    </>
  );
}

export default App;
