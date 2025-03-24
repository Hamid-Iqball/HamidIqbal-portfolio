"use client"

import { FaFolderOpen } from "react-icons/fa"
// import StarBorder from "./StarBorders"
import { FaReact } from "react-icons/fa6"
import { SiReactquery, SiSupabase } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"


function Projects() {
  return (
    <div  id="projects">
 <div className="flex flex-col items-center justify-between gap-2 mb-16">

      <p className="text-center bg-[#181C1A] p-2 rounded-2xl"><FaFolderOpen size={24}/></p>
          <h1 className="text-center text-[44px] sm:text-5xl font-bold">Featured<span className="text-HGreen ml-2">Projects</span> </h1>
          <p className="  bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 text-transparent bg-clip-text mb-12 text-center max-w-11/12">
                    A selection of projects that i have worked on
                </p>
      </div>



    {/* Main container */}
      <div>
        {/* Single Project container */}
        <div className="grid grid-cols-12 gap-2  ">
        

           <div className="col-span-8 rounded-2xl border p-6 text-neutral-100 border-neutral-900">
            <h1 className="text-3xl font-semibold mb-6">The Wild Oasis</h1>

            <p className="text-sm font-light text-neutral-400 mb-4">The Wild Oasis! This is a hotel management web app, where hotel employees can manage cabins, bookings, and guests.</p>


            <div className="flex items-center gap-2 max-w-1/2 justify-start">
              <h1 className="text-neutral-400 text-lg">Tools :</h1>

              <div className="flex gap-2 items-center">

                <FaReact size={24}/>
                <SiSupabase size={24}/>
                <SiReactquery size={24}/>
                <RiTailwindCssFill size={24}/>
              </div>


            </div>
           </div>
       
       
          <div className="col-span-4 border p-3 border-neutral-900 rounded-lg">

          right section small one
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects