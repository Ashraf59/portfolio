import React from 'react';
import '../About/About.css'
import ashraf from '../assets/ashraf.png'

const About = () => {
    return (
        <section className='about-bg'>
            <h2 className='lg:text-8xl text-5xl font-bold text-gray-700'>About Me</h2>
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div>
        <h3 className='text-gray-300 text-xl'>
        I’m Md. Ashraf Ali from Chattogram. I completed MBS in Management from National University and MBA in Finance from Premier University. I am very much passionate about programming, hence I was learning coding since 2020 later I took admitted to Programming Hero in 2021 in the 3rd batch, beside the job it was too difficult to continue classes, then I resigned from my 10 years of Accounting job and again took admission in Programming Hero in the 6th Batch.
        <br />
 I successfully completed the main course of 6th Batch web development course. During my learning period, I completed some awesome full-stack projects. Now my ambition is to join as a Web Developer at Home or Abroad.

        </h3>
        </div>
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={ashraf} alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 img-size rounded-full" />
		</div>
	</div>
</section>
    );
};

export default About;