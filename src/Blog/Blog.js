import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn  } from 'react-icons/fa';
import blog from '../assets/blog/blog.gif'
import comming from '../assets/blog/coming.gif'
import '../Blog/Blog.css'


const Blog = () => {
    return (
        <section className="blog-bg">
              <h2 className='lg:text-8xl text-5xl font-bold text-gray-600'>My Blogs</h2>
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-center">
          
                
                
                
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <img src={comming} alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 img-size" />
                </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={blog} alt="" className="h-72 object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 img-size" />
            </div>
        </div>
    </section>
    );
};

export default Blog;