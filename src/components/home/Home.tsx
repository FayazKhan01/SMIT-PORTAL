import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar'
import ImageSlider from '../slider/ImageSlider'

export default function Home() {
  return (
    <>
        <Navbar />
        <ImageSlider />
        <hr  style={{fontWeight:"bold"}}/>
        <Footer />
        {/* <Theme /> */}
    </>
)
}

