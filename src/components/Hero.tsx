"use client"

import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <section className="h-screen flex justify-between items-center text-white">
    <div >
      <div className=" bg-gradient-to-r from-[#0B1410] via-[#0B1410] to-[#0A0F0D] rounded-full p-3">

      <div className="flex gap-2 items-center bg-gradient-to-r from-[#0E2F21] via-[#0C2118] to-[#0A0F0D] px-4 p-2 rounded-full text-sm">Crafting Experiences at  <Link href="https://veevotech.com/" className="flex items-center gap-2"> <span className=" underline-offset-4 ">
        
      VeevoTech
        </span> 
      <Image src="/vt_logo.png"alt="Vt logo" width={50} height={50}/></Link></div>
    </div>
      </div>
    <div >right</div>
    </section>
  )
}

export default Hero