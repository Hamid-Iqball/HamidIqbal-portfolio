
"use client"
import { FaFolderOpen, FaRegChartBar } from "react-icons/fa"
import { FaReact } from "react-icons/fa6"
import { SiAxios, SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReactquery, SiSupabase, SiZod } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import SpotlightCard from "./SpotLightCard"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"

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

      <div className="flex flex-col gap-20">
        {/* First Project container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 rounded-2xl overflow-hidden h-full border border-neutral-900">
          {/* Text Content Column - Responsive Positioning */}
          <div className="col-span-1 lg:col-span-8 p-2 text-neutral-100 h-full order-2 lg:order-1">
            <SpotlightCard className="h-full flex flex-col custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h1 className="text-3xl font-semibold mb-6">The Wild Oasis</h1>
              <p className="text-sm font-light text-neutral-300 mb-4 mt-auto">
                The Wild Oasis is a full-stack hotel management web application designed to streamline operations for hotel employees. With this system, staff can efficiently manage cabins, handle bookings, and oversee guest information. The platform offers an intuitive interface that simplifies daily administrative tasks, ensuring a seamless experience for both employees and guests.
              </p>
              <div className="flex items-start gap-2 flex-col lg:flex-row justify-center lg:justify-between">
                <div className="flex gap-2 items-center">
                  <h1 className="text-neutral-400 text-lg">Tools:</h1>
                  <FaReact size={20}/>
                  <SiSupabase size={20}/>
                  <SiReactquery size={20}/>
                  <RiTailwindCssFill size={20}/>
                  <FaRegChartBar size={20}/>

                </div>
                <div className="flex items-center gap-2">
                  <Link 
                    href="https://github.com/Hamid-Iqball/The-wild-oasis-WebApp" 
                    className="flex items-center justify-between gap-[2px] text-xs hover:underline decoration-1 underline-offset-4 decoration-neutral-400 cursor-alias"
                  >
                    <FiGithub size={14}/> Repository
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Image Column - Responsive Positioning */}
          <div className="relative w-full col-span-1 lg:col-span-4 min-h-[300px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-700 cursor-pointer bg-[#010103] order-1 lg:order-2">
            <Image
              src="/projects/TheWildOasisWA/nextimg.png"
              alt="The Wild Oasis Dashboard"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
        {/* second Project container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 rounded-2xl overflow-hidden h-full border border-neutral-900">


        <div className="relative w-full col-span-1 lg:col-span-4 min-h-[300px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-700 cursor-pointer bg-[#010103] order-1">
            <Image
              src="/projects/LamaSchool/lamaSchool.png"
              alt="The Wild Oasis Dashboard"
              fill
              className="rounded-lg object-contain"
            />
          </div>
          {/* Text Content Column - Responsive Positioning */}
          <div className="col-span-1 lg:col-span-8 p-2 text-neutral-100 h-full order-2 ">
            <SpotlightCard className="h-full flex flex-col custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <h1 className="text-3xl font-semibold mb-6">Lama School</h1>
              <p className="text-sm font-light text-neutral-300 mb-4 mt-auto">
              I developed a fully responsive and feature-rich School Management Web Application using Next.js, TypeScript, Tailwind CSS, Recharts, and Zod for validation. This application streamlines school operations with an intuitive user interface, real-time data visualization, and robust form validation.
              </p>
              <div className="flex items-start gap-2 flex-col lg:flex-row justify-center  lg:justify-between">
                <div className="flex gap-2 items-center">
                  <h1 className="text-neutral-400 text-lg">Tools:</h1>
                  <SiNextdotjs size={20}/>
                  <RiTailwindCssFill size={20}/>
                  <FaRegChartBar size={20}/>
                  <SiZod size={20}/>
                </div>
                <div className="flex items-center gap-2">
                  <Link 
                    href="https://github.com/Hamid-Iqball/next-dashboard-ui" 
                    className="flex items-center justify-between gap-[2px] text-xs hover:underline decoration-1 underline-offset-4 decoration-neutral-400 cursor-alias"
                  >
                    <FiGithub size={14}/> Repository
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Image Column - Responsive Positioning */}
         
        </div>



        {/* Third project */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 rounded-2xl overflow-hidden h-full border border-neutral-900">
          {/* Text Content Column - Responsive Positioning */}
          <div className="col-span-1 lg:col-span-8 p-2 text-neutral-100 h-full order-2 lg:order-1">
            <SpotlightCard className="h-full flex flex-col custom-spotlight-card " spotlightColor="rgba(0, 229, 255, 0.2)">
              <h1 className="text-3xl font-semibold mb-6">Hire 2.0</h1>
              <p className="text-sm font-light text-neutral-300 mb-4 mt-auto">
                Hire 2.0 is a tool that streamline the process of recruitment. The fun part about it that everything in it is dynamic which means it can be used by any organization. It is fully responsive and for the code and file structure i have followed the MVVM patteren with api layers and Zustand for state management.
              </p>
              <div className="flex items-start gap-2 flex-col lg:flex-row justify-center   lg:justify-between">
                <div className="flex gap-2 items-center">
                  <h1 className="text-neutral-400 text-lg">Tools:</h1>
                  <FaReact size={20}/>
                  <SiAxios size={20}/>
                  <RiTailwindCssFill size={20}/>
                 

                </div>
                <div className="flex items-center gap-2">
                  <Link 
                    href="https://github.com/Hamid-Iqball/Hire2.0" 
                    className="flex items-center justify-between gap-[2px] text-xs hover:underline decoration-1 underline-offset-4 decoration-neutral-400 cursor-alias"
                  >
                    <FiGithub size={14}/> Repository
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Image Column - Responsive Positioning */}
          <div className="relative w-full col-span-1 lg:col-span-4 min-h-[300px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-700 cursor-pointer bg-[#010103] order-1 lg:order-2">
            <Image
              src="/projects/Hire2.0/hire.png"
              alt="The Wild Oasis Dashboard"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>



            {/* 4th Project container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 rounded-2xl overflow-hidden h-full border border-neutral-900">


      <div className="relative w-full col-span-1 lg:col-span-4 min-h-[300px] opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-700 cursor-pointer bg-[#010103] order-1">
          <Image
            src="/projects/VeevoTech/veevotech.png"
            alt="The Wild Oasis Dashboard"
            fill
            className="rounded-lg object-contain"
          />
        </div>
        {/* Text Content Column - Responsive Positioning */}
        <div className="col-span-1 lg:col-span-8 p-2 text-neutral-100 h-full order-2 ">
          <SpotlightCard className="h-full flex flex-col custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1 className="text-3xl font-semibold mb-6">VeevoTech</h1>
            <p className="text-sm font-light text-neutral-300 mb-4 mt-auto">
              This is a modern, clean , SEO optimized and fully responsive landing page for an IT company called VeevoTech.With an intuitive user experience, clear call-to-actions, and a mobile-friendly design, this landing page ensures maximum engagement and visibility, helping businesses connect with VeevoTech effortlessly.
            </p>
            <div className="flex items-start gap-2 flex-col lg:flex-row justify-center  lg:justify-between">
              <div className="flex gap-2 items-center">
                <h1 className="text-neutral-400 text-lg">Tools:</h1>
                <SiHtml5 size={20}/>
                <SiCss3 size={20}/>
                <SiJavascript size={19}/>
                
              </div>
              <div className="flex items-center gap-2">
                <Link 
                  href="https://github.com/Hamid-Iqball/next-dashboard-ui" 
                  className="flex items-center justify-between gap-[2px] text-xs hover:underline decoration-1 underline-offset-4 decoration-neutral-400 cursor-alias"
                >
                  <FiGithub size={14}/> Repository
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </div>

  {/* Image Column - Responsive Positioning */}
 
</div>



      </div>
    </div>
  )
}

export default Projects