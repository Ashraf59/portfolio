import React from 'react';
import react from '../../assets/skills/react.png';
import node from '../../assets/skills/node.png';
import ex from '../../assets/skills/ex.png';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/CSS3.png';
import js from '../../assets/skills/js.png';
import bootstrap from '../../assets/skills/Bootstrap.png';
import tailwind from '../../assets/skills/tailwind.png';
import mongo from '../../assets/skills/mongo.png';
import firebase from '../../assets/skills/firebase.png';
import git from '../../assets/skills/Git.png';
import figma from '../../assets/skills/figma.png';
import netlify from '../../assets/skills/netlify.png';
import npm from '../../assets/skills/npm.png';
import vs from '../../assets/skills/vs.png';

import '../Skills/Skills.css'

const Skills = () => {
    return (
        <div className='p-12 skill-bg'>
            <h2 className='text-8xl font-bold text-gray-700'>My Skills</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center mt-10 gap-8 mx-20'>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={html} alt="HTML5" />
                <h3 className='text-2xl font-semibold text-slate-300'>HTML5</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={css} alt="CSS" />
                <h3 className='text-2xl font-semibold text-slate-300'>CSS3</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={bootstrap} alt="Bootstrap" />
                <h3 className='text-2xl font-semibold text-slate-300'>Bootstrap</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={tailwind} alt="Tailwind" />
                <h3 className='text-2xl font-semibold text-slate-300'>Tailwind</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={js} alt="JavaScript" />
                <h3 className='text-2xl font-semibold text-slate-300'>JavaScript</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={react} alt="React" />
                <h3 className='text-2xl font-semibold text-slate-300'>React</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={node} alt="Node" />
                <h3 className='text-2xl font-semibold text-slate-300'>Node</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={ex} alt="Express" />
                <h3 className='text-2xl font-semibold text-slate-300'>Express</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={mongo} alt="MongoDB" />
                <h3 className='text-2xl font-semibold text-slate-300'>MongoDB</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={firebase} alt="Firebase" />
                <h3 className='text-2xl font-semibold text-slate-300'>Firebase</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={git} alt="Git" />
                <h3 className='text-2xl font-semibold text-slate-300'>Git</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={figma} alt="Figma" />
                <h3 className='text-2xl font-semibold text-slate-300'>Figma</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={netlify} alt="Netlify" />
                <h3 className='text-2xl font-semibold text-slate-300'>Netlify</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={npm} alt="NPM" />
                <h3 className='text-2xl font-semibold text-slate-300'>NPM</h3>
            </div>
           <div className='p-12 shadow-lg shadow-indigo-500/50 w-[180px] h-[200px] rounded-2xl'>
                <img src={vs} alt="VS Code" />
                <h3 className='text-2xl font-semibold text-slate-300'>VS Code</h3>
            </div>
           
           </div>
        </div>
    );
};

export default Skills;