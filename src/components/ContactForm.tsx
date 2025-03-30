"use client"

import { FaFolderOpen, FaPhone } from "react-icons/fa"
import { FaVoicemail } from "react-icons/fa6"




function ContactForm() {
  return (
    <div>
       <div className="flex flex-col items-center justify-between gap-2">
            <p className="text-center bg-[#181C1A] p-2 rounded-2xl">
              <FaVoicemail size={24}/>
            </p>
            <h1 className="text-center text-[44px] sm:text-5xl font-bold">
              Get in<span className="text-HGreen ml-2">touch</span>
            </h1>
            <p className="bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 text-transparent bg-clip-text mb-12 text-center max-w-11/12">
           Let&apos;s collaborate !
            </p>
          </div>
    <div className="flex justify-between items-center gap-4">
    <form action="" className="w-full flex flex-col ">
      <label htmlFor="" className="mb-2 text-sm">Username</label>
      <input type="text" name="fullname" placeholder="Enter your name ..." className="p-1 px-2 ring-[1px] ring-neutral-700 rounded-lg mb-10" />  

      <label htmlFor="" className="mb-2 text-sm">Email address</label>
      <input type="email" name="email" placeholder="Enter you email here..." className="p-1 px-2 ring-[1px] ring-neutral-700 rounded-lg mb-10" />    


      <label htmlFor="" className="mb-2 text-sm">How can i help?</label>
      <textarea typeof="text" className="p-1 ring-[1px] ring-neutral-700  px-2 rounded-lg mb-10" placeholder="Type your query here." />  

      <button className="bg-neutral-100 p-3 rounded-lg text-neutral-950 cursor-pointer sm:place-self-start sm:px-12">Submit</button>  
    </form>
    <div className="w-full flex ">
    <h1>Hey</h1>
    <input type="text" />
    </div>
    </div>
    </div>
  )
}

export default ContactForm