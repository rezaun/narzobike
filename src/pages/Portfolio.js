import React from 'react';
import kabirImage from "../assets/images/Portfolio/kabir.jpg";
import { FiFacebook, FiTwitter, FiLinkedin, FiGlobe, FiMail } from "react-icons/fi";

const Portfolio = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-500">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={kabirImage} className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h4>Hello Everyone. I'm</h4>
                        <h1 className="text-5xl font-bold">Rezaun Kabir</h1>
                        <p className="py-6">Hi! I am Rezaun Kabir, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2012. I enjoy creating beautifully designed, intuitive and functional websites.

                            For over past 8 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.</p>
                        <div className="mockup-code p-3">
                            <div className='flex items-center gap-2'>
                                <div>< FiFacebook/> </div>
                                <div><a className='text-blue-900 font-bold' href="https://www.facebook.com/rezaunkabir" target={'_blank'}>facebook.com/rezaunkabir</a></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>< FiTwitter/> </div>
                                <div><a className='text-sky-500 font-bold' href="https://www.twitter.com/rezaunkabir" target={'_blank'}>twitter.com/rezaunkabir</a></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>< FiLinkedin/> </div>
                                <div><a className='text-sky-900 font-bold' href="https://www.linkedin.com/in/rezaunkabir/" target={'_blank'}>linkedin.com/in/rezaunkabir</a></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>< FiGlobe/> </div>
                                <div><a className='text-violet-900 font-bold' href="https://rezaun.netlify.app/" target={'_blank'}>https://rezaun.netlify.app/</a></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>< FiMail/> </div>
                                <div><a className='text-rose-900 font-bold' href="mailto:rezaun.kabir@gmail.com" target={'_blank'}>rezaun.kabir@gmail.com</a></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;