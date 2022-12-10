import React from 'react';
import ashraf from '../../assets/ashraf.png'
import '../Banner/Banner.css'

import { FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    // const openUrl = url => {

    // }
    return (
        <section className="banner-bg">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl leading-none sm:text-6xl text-white">Md. Ashraf Ali
			</h1>
            
            <h4 className='text-slate-400 text-xl mt-4'>Front-End | React JS | MERN Developer </h4>
			<div className='mt-6 flex text-center'>
            <button className='btnColor'>Contact Me</button>
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