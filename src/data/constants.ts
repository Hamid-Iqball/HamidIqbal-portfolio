import { IconType } from "react-icons";
import { DiJsBadge } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";

import { SiCss3, SiGreensock, SiHtml5, SiReactquery, SiSupabase, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs, TbBrandRedux } from "react-icons/tb";


type Navbar = {
    id:number,
    name:string,
    href:string
}
//Navbar
export const navLinks:Navbar[] = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Tech Stack',
      href: '#skills',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#contact',
    },
  ];

  type Icons={
    id:number,
    name:string,
    icon:IconType,
    color:string,
    size:number
  }
  export const icons:Icons[] =[

    {
      id:1,
      name:"React",
      icon:FaReact,
      color:"#56BFD6",
      size:40
    },
    {
      id:2,
      name:"Next",
      icon:TbBrandNextjs,
      color:"#ffff",
      size:40
    },
    {
      id:3,
      name:"JavScript",
      icon:DiJsBadge,
      color:"#EBCC37",
      size:40
    },
    {
      id:4,
      name:"ReactQuery",
      icon:SiReactquery,
      color:"#FF4759",
      size:40
    },
    {
      id:5,
      name:"TypeScript",
      icon:SiTypescript,
      color:"#087CD1",
      size:40
    },
    {
      id:6,
      name:"Html",
      icon:SiHtml5,
      color:"#E8552C",
      size:40
    },
    {
      id:7,
      name:"CSS3",
      icon:SiCss3,
      color:"#3AADDD",
      size:40
    },
    {
      id:8,
      name:"Tailwindcss",
      icon:SiTailwindcss,
      color:"#1DC0CD",
      size:40
    },
    {
      id:10,
      name:"Bootstrap",
      icon:FaBootstrap,
      color:"#7818F7",
      size:40
    },
    {
      id:11,
      name:"GSAP",
      icon:SiGreensock,
      color:"#97D50E",
      size:40
    },
    {
      id:12,
      name:"framer",
      icon:TbBrandFramerMotion,
      color:"#EB09C9",
      size:40
    },
    {
      id:13,
      name:"Supabase",
      icon:SiSupabase,
      color:"#44D192",
      size:40
    },
    {
      id:14,
      name:"Firebase",
      icon:RiFirebaseFill,
      color:"#FFCE36",
      size:40
    },
    {
      id:15,
      name:"Zod",
      icon:SiZod,
      color:"#2E5386",
      size:40
    },
    {
      id:16,
      name:"Redux",
      icon:TbBrandRedux,
      color:"#7A50BE",
      size:40
    },
  
  ]