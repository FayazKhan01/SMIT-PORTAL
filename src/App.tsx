import './App.css';
import React from "react";
// import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import ImageSlider from "./components/slider/ImageSlider";
import Home from "./components/home/Home";
import AddForm from './components/addForm/AddForm';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
      
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="Addmission-form" element={<AddForm />} />  
            {/* <Route path="about-us" element={<AboutUs />} />   */}
                      
          </Route>
        </Routes>
    
    </>
  );
}

export default App;
