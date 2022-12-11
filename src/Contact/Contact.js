import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from '../assets/contact/mail.gif'
import '../Contact/Contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm
    ('service_h0c1bkc',
     'template_o4xfcac',
      form.current,
       'z_as-vbbCI8yrXKjB')

      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div className='contact-bg'>
             <h2 className='lg:text-8xl text-5xl font-bold text-gray-700'>Contact Me</h2>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row justify-between">
    <div className="text-center lg:text-left lg:w-1/2 sm:w-full ">
      <img src={email} alt="Email" />
    </div>
    <div className="card flex-shrink-0 lg:w-1/2 sm:w-full max-w-sm shadow-2xl form-bg shadow-indigo-500/50">
    <form ref = {form} onSubmit={sendEmail}>
    <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Full Name</span>
          </label>
          <input type="text" name='user_name' placeholder="name" className="input input-bordered bg-indigo-900 text-slate-300" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Email</span>
          </label>
          <input type="text" name='user_email' placeholder="email" className="input input-bordered bg-indigo-900 text-slate-300" required/>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-300">Message</span>
          </label>
          <textarea name='message' className="textarea textarea-bordered bg-indigo-900 text-slate-300" placeholder="Bio"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;