import './App.css';
import React from "react";
// import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ImageSlider from "./components/slider/ImageSlider";
import Home from "./components/home/Home";
import {BarsOutlined} from '@ant-design/icons'
import AddForm from './components/addForm/AddForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="*" element={<Home />} />
            <Route path="Addmission-form" element={<AddForm />} />
            {/* <Route path="about" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} /> */}
            {/* <Route path="contact" element={<ContactUs />} /> */}
          <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
