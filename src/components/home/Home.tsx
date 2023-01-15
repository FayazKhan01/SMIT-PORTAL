import React from 'react'
import Courses from '../courses/Courses'
import Footer from '../footer/Footer'
import Navbar from '../Navbar'
import ImageSlider from '../slider/ImageSlider'

export default function Home() {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <hr  style={{fontWeight:"bold", fontSize:"5px"}}/>
        <Courses/>
        <Footer />
    </>
)
}

