import React from 'react';
import { FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div>
            <hr />
            <footer className="footer items-center p-4 bg-neutral text-neutral-content footer-bg">
           
           <div className="items-center grid-flow-col">
           <Link to= '/' className='text-2xl font-semibold color ml-5'>
               <h1>ashrafali</h1>
             </Link>
             <p className='text-slate-300'>Copyright © 2022 - All right reserved by Md. Ashraf Ali</p>
           </div> 
           <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
           <span className='text-white logosize'><FaGithub onClick={() => window.open('https://github.com/Ashraf59', '_blank')} /></span>
                     <span className='text-white logosize'><FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/md-ashraf-ali/', '_blank')}/></span>
           </div>
         </footer>
        </div>
    );
};

export default Footer;