"use client"

import { icons } from "@/data/constants"
import { FaLaptopCode } from "react-icons/fa"


function Skills() {
  return (
    <div  id="skills">


         <div className="flex flex-col items-center justify-between gap-2 mb-20">
        {/* Heading */}
            <p className="text-center bg-[#181C1A] p-3 rounded-2xl"> <FaLaptopCode size={24}/></p>
                <h1 className="text-center text-5xl font-bold">Skills & <span className="text-HGreen">Experience</span> </h1>
                <p className="  bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-transparent bg-clip-text mb-12">
                    My current favorite tech stack
                </p>
        {/* Icons */}

        <div className="flex flex-wrap gap-8 justify-center items-center w-full md:max-w-3/4 ">
        {icons.map((item) => {
            const IconComponent = item.icon;
            return (
                <div key={item.id} className="flex flex-col items-center">
                <span
                  className="bg-[#181919] p-4 sm:p-5 rounded-2xl cursor-pointer transition-shadow duration-1000 ease-out"
                  style={{
                    boxShadow: "0px 0px 10px 3px transparent", // Default shadow
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0px 0px 20px 8px ${item.shadow}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "0px 0px 10px 3px transparent")
                  }
                >
                  <IconComponent size={item.size} color={item.color} />
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