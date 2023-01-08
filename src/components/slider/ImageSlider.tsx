import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '500px',
  width:'1200px',
  background: '#fff',
  display:'flex',
  justifyContent:'center',
  color:'#364d79'
};

const ImageSlider: React.FC = () => (
  <Carousel autoplay effect='fade'>
    <div>
      <h3  style={contentStyle}><img src="./images/Saylani-1.jpg"  alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/Saylani-2.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/Saylani-3.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/Saylani-4.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/Saylani-5.jpg" alt="" /></h3>
    </div>
  </Carousel>
);
export default ImageSlider;