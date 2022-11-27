import React from 'react';
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs
      .sendForm("service_o0w4nos", "template_ptl0us9", form.current)
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };


  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
           Want to reach out and help our Project?
          </h1>
          <p>Sign up for our newsletter and stay up to date. Share thoughts and feelings, be an early adopter, and get access to contribute to features</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <form ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col gap-3'>
        <input
              className='p-3 flex w-full rounded-md text-black'
              placeholder="Email"
                    type="email"
                    name="email"
                    required
            />
        <textarea
                    placeholder="Message"
                    name="message"
                    required
                    className='p-3 rounded-md text-gray-800'
                  ></textarea>
        </div>
            <button type='submit' className='bg-tetriary text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Us
            </button>
            </form>

          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Newsletter;