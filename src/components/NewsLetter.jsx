import React from 'react';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Audio } from 'react-loader-spinner'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(process.env.REACT_APP_EMAIL_SERVICE_KEY
        , process.env.REACT_APP_EMAIL_SERVICE_TEMPLATE_NAME
        , form.current, process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY
        )
      .then(
        () => {
          toast("Thanks for reaching out!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "success"
            });
          setIsLoading(false);
        },
        () => {
          toast("Failed to send the message, please try again later", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: "error"
            });
          setIsLoading(false);
        }
      );
  };


  return (
    <>
     <div id='contact-section' className='w-full py-96 text-white px-4 '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      {!isLoading ?   <>
      <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
           Want to reach out and help our Project?
          </h1>
          <p>Sign up for our newsletter and stay up to date. Share thoughts and feelings, be an early adopter, and get access to contribute to features</p>
        </div>
        <div className='my-4'>

          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <form id='custom-form' className='w-full ' ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col gap-3 w-full '>
        <input
              className='p-3 flex w-full rounded-md text-black'
              placeholder="Email"
                    type="email"
                    name="email"
                    required
            />
                <input
              className='p-3 flex w-full rounded-md text-black'
              placeholder="Name"
                    type="name"
                    name="name"
                    required
            />
        <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className='p-3  rounded-md text-gray-800'
                  ></textarea>
        </div>
            <button type='submit' className='bg-tetriary text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Us
            </button>
          </form>

          </div>
        </div>
      </>
       : 
       <div className="text-center w-full flex justify-center items-center">
           <Audio
       height="160"
       width="160"
       radius="10"
       color="white"
       ariaLabel="loading"
       wrapperStyle
       wrapperClass
     />
       </div>
      }
    
      </div>
    </div>
    </>
  );
};

export default Newsletter;