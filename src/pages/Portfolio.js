import React from 'react';
import kabirImage from "../assets/images/Portfolio/kabir.jpg"

const Portfolio = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-500">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={kabirImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h4>Hello Everyone. I'm</h4>
                        <h1 className="text-5xl font-bold">Rezaun Kabir</h1>
                        <p className="py-6">Hi! I am Rezaun Kabir, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2012. I enjoy creating beautifully designed, intuitive and functional websites.

                            For over past 8 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.</p>
                        <div className="mockup-code">
                            <pre data-prefix="1"><code>npm i daisyui</code></pre>
                            <pre data-prefix="2"><code>installing...</code></pre>
                            <pre data-prefix="3" className=" text-warning-content"><code>Error!</code></pre>
                        </div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;