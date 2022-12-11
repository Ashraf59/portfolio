import React from 'react';
import './Portfolio.css'
import mobile from '../../assets/portfolio/mobile-bazar.png';
import homefood from '../../assets/portfolio/home-food.png';
import techlearn from '../../assets/portfolio/techlearn.png';

const Portfolio = () => {
    return (
        <div className='p-12 portfolio-bg'>
            <h2 className='lg:text-8xl text-5xl font-bold text-gray-700'>Portfolio</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-10 gap-6'>
            <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50">
             <figure><img src={mobile} alt="Mobile-Bazar" />                </figure>
            <div className="card-body">
            <h2 className="card-title text-left">Mobile Bazar</h2>
        <p className='text-left'>Mobile Bazar is a online used mobile buy and selling platform. At reasonable price buyer can buy mobile and seller can sale mobile at best price</p>
        <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => window.open('https://mobile-bazar-f4193.web.app/', '_blank')}>Live site</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/mobile-bazar', '_blank')}>Client</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/mobile-bazar-server', '_blank')}>Server</button>
    </div>
  </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50">
             <figure><img src={homefood} alt="Mobile-Bazar" />                </figure>
            <div className="card-body">
            <h2 className="card-title">Home Food</h2>
        <p className='text-left'>Homemade food is usually prepared with natural ingredients compared to commercially prepared food.</p>
        <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => window.open('https://home-food-652e5.web.app/', '_blank')}>Live site</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/home-food-service-client', '_blank')}>Client</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/home-food-service-server', '_blank')}>Server</button>
    </div>
  </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-lg shadow-indigo-500/50">
             <figure><img src={techlearn} alt="Mobile-Bazar" />                </figure>
            <div className="card-body">
            <h2 className="card-title">Tech Learn</h2>
            <p className='text-left'>Tech Learn is a online learning platform. Anybody from anywhere can do programming classes</p>
        <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => window.open('https://tech-learn-7ef7f.web.app/', '_blank')}>Live site</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/tech-learn-client', '_blank')}>Client</button>
      <button className="btn btn-primary" onClick={() => window.open('https://github.com/Ashraf59/tech-learn-server', '_blank')}>Server</button>
    </div>
  </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;