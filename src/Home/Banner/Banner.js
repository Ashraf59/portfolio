import React from 'react';
import ashraf from '../../assets/hero2.gif'
import '../Banner/Banner.css'
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pdf from '../../../src/Md. Ashraf Ali-Resume.pdf';

const Banner = () => {
    
    return (
        <section className="banner-bg">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
		<h2 className='lg:text-7xl text-5xl font-bold text-gray-600'>Md. Ashraf Ali</h2>
            
            <h4 className='text-slate-400 text-xl mt-4'>I'm  <span style={{color: '#5D79FE', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['A Front-End Web Developer ❤️', 'A React Developer ❤️', 'A MERN Stack Web Developer ❤️']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span> </h4>
			<div className='mt-6 flex text-center sm:mx-auto'>
      <a href={pdf} download={pdf}> <button className='bg-gradient-to-r from-blue-500 to-rose-500 btn'>Download CV</button>
</a> 
            
            <span className='text-white logosize'><FaGithub onClick={() => window.open('https://github.com/Ashraf59', '_blank')} /></span>
            <span className='text-white logosize'><FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/md-ashraf-ali/', '_blank')}/></span>
            </div>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={ashraf} alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 img-size" />
		</div>
	</div>
</section>
    );
};

export default Banner;