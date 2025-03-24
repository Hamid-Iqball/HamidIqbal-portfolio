"use client"

import Image from "next/image"
import Link from "next/link"
import { BiLogoTypescript } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
import { IoLogoJavascript, IoPersonCircleOutline } from "react-icons/io5"
import { RiFirebaseFill, RiSupabaseFill } from "react-icons/ri"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"



function About() {
  return (
    <div className="min-h-screen  justify-between  mx-auto text-white mb-12 " id="about">
      {/* Heading */}
      <div className="flex flex-col items-center justify-between gap-2 mb-16">

      <p className="text-center bg-[#181C1A] p-3 rounded-2xl"><IoPersonCircleOutline size={24}/></p>
          <h1 className="text-center text-5xl font-bold">About <span className="text-HGreen">Me</span> </h1>
      </div>

      {/* section 2 */}
      <div className=" flex justify-between flex-col md:flex-row items-center mt-28">

    <div>Image</div>
    <div className=" md:max-w-2/3 text-justify  border-b-[1px] border-b-neutral-500">
      <h1 className="text-4xl font-semibold mb-1">Hamid Iqbal</h1>

      <p className="flex items-center gap-1 text-neutral-400 mb-6 leading-3 text-sm md:text-base">Founding Front-End Developer at <Link href="https://veevotech.com/" className="underline decoration-1 decoration-neutral-300 flex  items-center gap-1 underline-offset-3 hover:decoration-blue-200  text-white "> VeevoTech  <Image src="/vt_logo.png" alt="logo" height={34} width={34} /> </Link> </p>

      <p className=" text-neutral-400 mb-2">Hello! You can call me <strong className="text-white">Hamid.</strong> I am a Front End developer who works with the React Ecosystem. From a young age, I &apos;ve been captivated by Software developement. As a <strong className="text-white"> Front End Developer
        </strong> , I am committed to crafting exceptional web experiences. 


        
        </p>
        <p className="text-neutral-400 mb-2">

        As a front-end developer, I specialize in building modern, high-performance web applications using <span className=" items-center gap-1 text-white border border-neutral-500 rounded-4xl inline-flex px-1 text-center text-sm"> <SiNextdotjs/> Next.js</span> and <span className=" items-center gap-1 text-white border border-neutral-500 rounded-4xl inline-flex px-1  text-sm text-center">
          <FaReact /> React.js
          </span> . With a strong foundation in <span className=" items-center gap-1 text-white border border-neutral-600 rounded-4xl text-sm inline-flex px-1 text-center">
          <IoLogoJavascript /> JavaScript </span> and <span className=" items-center gap-1 text-white border border-neutral-600 rounded-4xl inline-flex px-1 text-center text-sm">
          <BiLogoTypescript  /> TypeScript </span>, I focus on creating seamless, user-friendly interfaces that enhance the overall user experience. 
    
        </p>

        <p className="text-neutral-400 mb-10 ">
        I leverage <span className=" items-center gap-1 text-white border border-neutral-500 rounded-4xl inline-flex px-1 text-center text-sm">
        <SiTailwindcss /> Tailwind Css </span> along with other tools for efficient styling and utilize  <span className=" items-center gap-1 text-white border border-neutral-500 rounded-4xl inline-flex px-1 text-center text-sm">
        <RiSupabaseFill color="#00FFB7" /> Supabase </span> and  <span className=" items-center gap-1 text-white border border-neutral-500 rounded-4xl inline-flex px-1 text-center text-sm">
        <RiFirebaseFill color="orange" /> Firebase </span> for authentication and real-time data management. For Scalability i prefer to use <strong className="text-white
        ">
          MVVM</strong>  (Modal view View-Modal) pattern that helps cleanly separate an application&apos;s business and presentation logic from its user interface (UI) .
        </p>

          
    </div>
      </div>
    </div>
  )
}

export default About