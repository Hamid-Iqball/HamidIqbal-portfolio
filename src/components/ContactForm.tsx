"use client"
import Globe from "react-globe.gl"
import { FaVoicemail } from "react-icons/fa6"
import { useEffect, useRef } from 'react'

function ContactForm(): JSX.Element {
  // Add proper typing for the ref
  const globeRef = useRef<any>(null);

  useEffect(() => {
    // Auto-rotate
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5; // Adjust speed as needed
      }
    }
  }, []);

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
      <div className="flex flex-col md:flex-row mx-10 lg:mx-0 justify-between items-center gap-12">
        <form action="" className=" w-full md:w-3/4 flex flex-col ">
          <label htmlFor="" className="mb-2 text-sm">Username</label>
          <input type="text" name="fullname" placeholder="Enter your name ..." className="p-1 px-2 ring-[1px] ring-neutral-700 rounded-lg mb-10" />
          <label htmlFor="" className="mb-2 text-sm">Email address</label>
          <input type="email" name="email" placeholder="Enter you email here..." className="p-1 px-2 ring-[1px] ring-neutral-700 rounded-lg mb-10" />
          <label htmlFor="" className="mb-2 text-sm">How can i help?</label>
          <textarea typeof="text" className="p-1 ring-[1px] ring-neutral-700 px-2 rounded-lg mb-10" placeholder="Type your query here." />
          <button className="bg-neutral-100 p-3 rounded-lg text-neutral-950 cursor-pointer sm:px-12">Submit</button>
        </form>
        <div className=" w-full justify-end items-center p-2 hidden md:flex ">
          <Globe
            ref={globeRef}
            height={460}
            width={500}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
          />
        </div>
      </div>
    </div>
  )
}

export default ContactForm