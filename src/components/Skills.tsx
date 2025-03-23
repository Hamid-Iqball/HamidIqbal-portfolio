"use client"

import { FaLaptopCode } from "react-icons/fa"


function Skills() {
  return (
    <div>


         <div className="flex flex-col items-center justify-between gap-2 mb-16">
        
            <p className="text-center bg-[#181C1A] p-3 rounded-2xl"> <FaLaptopCode/></p>
                <h1 className="text-center text-5xl font-bold">Skills & <span className="text-HGreen">Experience</span> </h1>
                <p className="  bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-transparent bg-clip-text">
                    My current favorite tech stack
                </p>

            </div>
    </div>
  )
}

export default Skills