"use client"

import Image from "next/image"
import Link from "next/link"
import GradientText from "./GradientText"
import StarBorder from "./StarBorders"
import ShinyText from "./ShinnyButton"

function Hero() {
  return (
    <section className="h-screen flex justify-between items-center text-white">
      <div className="flex flex-col max-w-1/2 w-full ">
  {/* Heading  1*/}
    <div className="flex flex-col gap-4 p-2 w-[370px] mb-4" >
      <div className=" bg-gradient-to-r from-[#0B1410] via-[#0B1410] to-[#0A0F0D] rounded-full p-2">
      <div className="flex gap-2 items-center bg-gradient-to-r from-[#0E2F21] via-[#0C2118] to-[#0A0F0D] px-4 p-1 rounded-full text-sm"> <span className="text-[#70FFC3] font-bold text-3xl "> &bull;</span>  Crafting Experiences at  <Link href="https://veevotech.com/" className="flex items-center gap-2"> <span className=" underline-offset-4 ">
      VeevoTech
      </span> 
      <Image src="/vt_logo.png"alt="Vt logo" width={50} height={50}/></Link></div>
    </div>
      </div>

      {/* Heading 2 */}
      <div className="ml-4 mb-5 ">

    <h1 className="text-5xl font-bold text-neutral-50 flex mb-4">
      
       <GradientText 
        colors={["#78f4c0", "#34ce8e", "#d1e3dc"]} 
        animationSpeed={5}
        showBorder={false}
      >
        Front End
      </GradientText>
     
       
        Developer</h1>
     <p className="text-base text-neutral-200 ">I work with the React ecosystem, building innovative web solutions that seamlessly blend creativity with functionality, delivering intuitive and engaging digital experiences.</p>  
      </div>

      {/* Buttons */}
      <div className=" flex justify-start gap-4 items-center ml-4 mt-4 ">
      <StarBorder color="#70FFC3">Hire Me</StarBorder>
      <button className="p-4 px-6 rounded-2xl  hover:bg-[#1B1B1B] border border-[#555353] cursor-pointer transition-colors duration-700 ease-out">

      <ShinyText text="My Work" speed={3}/>
      </button>
      </div>
    </div>
    <div >right</div>
    </section>
  )
}

export default Hero