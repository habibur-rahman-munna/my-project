import React, { useState, useRef } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const btnText = useRef('Send');


  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const sendMail = async (email) =>{
   
    const data = {
      service_id: 'service_o465rz4',
      template_id: 'template_v1xrb7g',
      user_id: '_XzBxvWgnafFvg6__',
      template_params: {
        from_email: email,
      },
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
   
  }

  const handleSubmit = async (e) => {
    if(email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      e.target.innerHTML = 'Sending...';
      await sendMail(email);
      setMessage('Your E-Mail was submitted successfully!');
      e.target.innerHTML = 'Send';
      setEmail('');
    }else{
      setMessage('Please enter a valid email !');
    }
    
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"alt="hero"src="/src/assets/contact.png"/>
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb- font-medium text-gray-900">Contact Us</h1>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label htmlFor="hero-field" className="leading-7 text-base text-gray-700 capitalize font-mediumclear">Your E-mail</label>
              <input type="text" id="hero-field" name="hero_field" value={email}
                onChange={handleInputChange} className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-purple-200 focus:bg-transparent border border-gray-300 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required placeholder="Enter your E-mail"/>
            </div>
            <button ref={btnText} onClick={handleSubmit}
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Send
            </button>
          </div>
          {message && (
            <p className="text-gray-600 mt-4 text-base font-medium">{message}</p>)}
          <p className="text-sm mt-2 text-gray-500 mb-8 w-full"> We'll get back to you as soon as possible!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
