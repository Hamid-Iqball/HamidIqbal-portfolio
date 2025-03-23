"use client"

import { icons } from "@/data/constants"
import { FaLaptopCode } from "react-icons/fa"


function Skills() {
  return (
    <div>


         <div className="flex flex-col items-center justify-between gap-2 mb-16">
        {/* Heading */}
            <p className="text-center bg-[#181C1A] p-3 rounded-2xl"> <FaLaptopCode size={24}/></p>
                <h1 className="text-center text-5xl font-bold">Skills & <span className="text-HGreen">Experience</span> </h1>
                <p className="  bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-transparent bg-clip-text">
                    My current favorite tech stack
                </p>
        {/* Icons */}

        <div className="flex flex-wrap gap-4">
        {icons.map((item) => {
            const IconComponent = item.icon;
            return (
            <div key={item.id} className="flex flex-col items-center">
                <span className="bg-[#1A1C1D] p-4 rounded-md cursor-pointer shadow-2xl hover:shadow-amber-100">

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