import React from 'react';
import bike from '../../assets/images/Hero/narzo-bikebanner.jpg'

const Hero = () => {
    return (
        <div className='hero min-h-screen'>
            <img className="max-w-full h-auto" src={bike} alt="" />
        </div>
    );
};

export default Hero;