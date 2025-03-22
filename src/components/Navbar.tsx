"use client"

import { navLinks } from "@/data/constants"
import Link from "next/link"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"


const NavItems = ()=>{
  return (
    <ul className=" flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20 bg-[#1B1B1B] border px-8 rounded-md ">
     {navLinks.map((link)=>(
      <Link href={link.href} key={link.id} className=" text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black/50 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5;">{link.name}</Link>
     ))}
    </ul>
  )
}
function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleMenu(): void {
    setIsOpen((prevState) => !prevState);
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 w-full" >
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
      <Link href="/" className="text-neutral-200 font-bold text-4xl hover:text-white transition-colors font-big-shoulders "> HAMID </Link>
      <button 
            onClick={toggleMenu} 
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" 
            aria-label="Toggle menu"
          >
            
            {isOpen ? (
             <MdClose size={24}/>
            ) : (
              
          <MdMenu size={24}/>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>

          {/* Theme change */}
            <div className="text-white flex gap-6 justify-between items-center">
              <span>Dark</span>
              <span>contact</span>
            </div>
      </div>
    </div>

    {/* Mobile Navigation */}

    <div 
        className={`nav-sidebar ${isOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'}`}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar