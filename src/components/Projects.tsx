"use client"

import { FaFolderOpen } from "react-icons/fa"


function Projects() {
  return (
    <div  id="projects">
 <div className="flex flex-col items-center justify-between gap-2 mb-16">

      <p className="text-center bg-[#181C1A] p-3 rounded-2xl"><FaFolderOpen size={24}/></p>
          <h1 className="text-center text-5xl font-bold">My <span className="text-HGreen">Projects</span> </h1>
          <p className="  bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 text-transparent bg-clip-text mb-12">
                    My Work that i am proud of
                </p>
      </div>

    </div>
  )
}

export default Projects