"use client"

import Image from "next/image"
import Link from "next/link"

import StarBorder from "./StarBorders"
import ShinyText from "./ShinnyButton"



function Hero() {
  return (
    <section  className=" flex flex-col sm:flex-row justify-between items-start mt-20 text-white overflow-x-hidden">
      <div className="flex flex-col sm:max-w-1/2 w-full items-start">
  {/* Heading  1*/}
    <div className="flex gap-4 p-2 w-96  sm:max-w-[370px] mb-4">
      <div className=" bg-gradient-to-r from-[#0B1410] via-[#0B1410] to-[#0A0F0D] rounded-full p-2">
      <div className="flex gap-2 items-center bg-gradient-to-r from-[#0E2F21] via-[#0C2118] to-[#0A0F0D] px-2 sm:px-4 sm:p-1 rounded-full text-xs sm:text-sm"> <span className="text-HGreen font-bold text-3xl "> &bull;</span>  Crafting Experiences at VeevoTech <Link href="https://veevotech.com/" className="flex items-center gap-2">
      <Image src="/vt_logo.png"alt="Vt logo" width={50} height={50}/></Link></div>
    </div>
      </div>

      {/* Heading 2 */}
      <div className="ml-4 mb-5 ">

      <h1 className="text-6xl md:text-5xl font-bold text-green-50  flex mb-4">
  Front End Developer
</h1>

     <p className="sm:text-base text-neutral-200 text-sm text-justify">I work with the React ecosystem, building innovative web solutions that seamlessly blend creativity with functionality, delivering intuitive and engaging digital experiences.</p>  
      </div>

      {/* Buttons */}
      <div className=" flex justify-start gap-4 items-center ml-4 mt-4 ">
      <StarBorder color="#70FFC3">Hire Me</StarBorder>
      <button className="p-4 px-6 rounded-2xl  hover:bg-[#1B1B1B] border border-[#555353] cursor-pointer transition-colors duration-700 ease-out">

      <ShinyText text="My Work" speed={3}/>
      </button>
      </div>

    </div>
    <div className="">right</div>
    </section>
  )
}

export default Hero