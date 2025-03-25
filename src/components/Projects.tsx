"use client"
import { FaFolderOpen, FaLink } from "react-icons/fa"
import { FaReact } from "react-icons/fa6"
import { SiReactquery, SiSupabase } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import Carousel from "./Carousel"
import SpotlightCard from "./SpotLightCard"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"
// import { LuLink } from "react-icons/lu"

function Projects() {
  return (
    <div id="projects" className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between gap-2 mb-16">
        <p className="text-center bg-[#181C1A] p-2 rounded-2xl">
          <FaFolderOpen size={24}/>
        </p>
        <h1 className="text-center text-[44px] sm:text-5xl font-bold">
          Featured<span className="text-HGreen ml-2">Projects</span>
        </h1>
        <p className="bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 text-transparent bg-clip-text mb-12 text-center max-w-11/12">
          A selection of projects that I have worked on
        </p>
      </div>

      {/* Main container */}
      <div className="flex flex-col gap-12">
        {/* First Project container */}
      

        <div className="grid grid-cols-12 gap-2 rounded-2xl overflow-hidden h-full border border-neutral-900">
  <div className="col-span-12 lg:col-span-8 p-2 text-neutral-100 h-full">
    <SpotlightCard className="h-full custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
    <h1 className="text-3xl font-semibold mb-6">The Wild Oasis</h1>
            <p className="text-sm font-light text-neutral-400 mb-4">
            The Wild Oasis is a full-stack hotel management web application designed to streamline operations for hotel employees. With this system, staff can efficiently manage cabins, handle bookings, and oversee guest information. The platform offers an intuitive interface that simplifies daily administrative tasks, ensuring a seamless experience for both employees and guests.
            </p>
            <div className="flex items-start gap-2 flex-col lg:flex-row justify-center lg:justify-between">
              <div className="flex gap-2 items-center">
              <h1 className="text-neutral-400 text-lg">Tools:</h1>
                <FaReact size={20}/>
                <SiSupabase size={20}/>
                <SiReactquery size={20}/>
                <RiTailwindCssFill size={20}/>
              </div>
              <div className="flex  items-center  gap-2 ">
                <Link href="/" className="flex items-center justify-between gap-[2px] text-xs hover:underline decoration-1 underline-offset-4 decoration-neutral-400 cursor-alias"> <FiGithub size={14}/> Repository</Link>
                <Link href='/' className="flex items-center justify-between gap-[2px] text-xs   hover:underline decoration-1 underline-offset-4 cursor-alias " > <FaLink size={14} color="blue"/>Open Live site</Link>
              </div>
            </div>
    </SpotlightCard>
  </div>
  <div className="relative w-full col-span-12 lg:col-span-4 h-full min-h-[300px]">
  <Image 
    src="/projects/TheWildOasisWA/dashboard.png" 
    alt="The Wild Oasis Dashboard" 
    fill 
    className="rounded-lg object-cover"
  />
</div>



        </div>



        {/* Second Project container */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 p-4">
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
          
          <div className="col-span-12 md:col-span-8 p-6 text-neutral-100">
            <h1 className="text-3xl font-semibold mb-6">The Wild Oasis</h1>
            <p className="text-sm font-light text-neutral-400 mb-4">
              The Wild Oasis! This is a hotel management fullStack web application, where hotel employees can manage cabins, bookings, and guests. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, modi adipisci quia nesciunt numquam reiciendis doloribus facere quae et nulla quaerat distinctio hic pariatur accusamus! Debitis autem in veniam dolores!
            </p>
            <div className="flex items-center gap-2 justify-start">
              <h1 className="text-neutral-400 text-lg">Tools:</h1>
              <div className="flex gap-2 items-center">
                <FaReact size={24}/>
                <SiSupabase size={24}/>
                <SiReactquery size={24}/>
                <RiTailwindCssFill size={24}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects