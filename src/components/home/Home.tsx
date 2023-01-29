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
        <Courses/>
        <h1  style={{border:"2px solid darkslategray"}}><hr/></h1>
        <Footer />
    </>
)
}

