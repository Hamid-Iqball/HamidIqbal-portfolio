"use client"

import { icons } from "@/data/constants"
import { FaLaptopCode } from "react-icons/fa"


function Skills() {
  return (
    <div  id="skills">


         <div className="flex flex-col items-center justify-between gap-2 mb-16">
        {/* Heading */}
            <p className="text-center bg-[#181C1A] p-3 rounded-2xl"> <FaLaptopCode size={24}/></p>
                <h1 className="text-center text-5xl font-bold">Skills & <span className="text-HGreen">Experience</span> </h1>
                <p className="  bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-transparent bg-clip-text mb-12">
                    My current favorite tech stack
                </p>
        {/* Icons */}

        <div className="flex flex-wrap gap-12 justify-center items-center max-w-3/4 ">
        {icons.map((item) => {
            const IconComponent = item.icon;
            return (
            <div key={item.id} className="flex flex-col items-center ">
                <span className="bg-[#1A1C1D] p-4 rounded-2xl cursor-pointer  shadow-[0px_0px_15px_5px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_20px_8px_rgba(255,255,0,0.5)]">

                <IconComponent size={item.size} color={item.color} />
                {/* <p className="text-sm text-white mt-1">{item.name}</p> */}
                </span>
            </div>
            );
        })}
        </div>
            </div>
    </div>
  )
}

export default Skills