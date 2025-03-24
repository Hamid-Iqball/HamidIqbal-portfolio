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
      href: '#projects',
    },
  ];

  type Icons={
    id:number,
    name:string,
    icon:IconType,
    color:string,
    size:number,
    shadow:string
  }
  export const icons:Icons[] =[

    {
      id:1,
      name:"React",
      icon:FaReact,
      color:"#56BFD6",
      size:50,
      shadow:"#88E2FC"
    },
    {
      id:2,
      name:"Next",
      icon:TbBrandNextjs,
      color:"#ffff",
      size:50,
      shadow:"#F3F4F6"
    },
    {
      id:3,
      name:"JavScript",
      icon:DiJsBadge,
      color:"#EBCC37",
      size:50,
      shadow:"rgb(235, 204, 55)"
    },
    {
      id:4,
      name:"ReactQuery",
      icon:SiReactquery,
      color:"#FF4759",
      size:50,
      shadow:"rgb(249, 162, 169)"
    },
    {
      id:5,
      name:"TypeScript",
      icon:SiTypescript,
      color:"#087CD1",
      size:50,
      shadow:"rgb(118, 170, 226)"
    },
    {
      id:6,
      name:"Html",
      icon:SiHtml5,
      color:"#F66B38",
      size:50,
      shadow:"rgb(234, 150, 105)"
    },
    {
      id:7,
      name:"CSS3",
      icon:SiCss3,
      color:"#3AADDD",
      size:50,
      shadow:"rgb(58, 173, 221)"
    },
    {
      id:8,
      name:"Tailwindcss",
      icon:SiTailwindcss,
      color:"#1DC0CD",
      size:50,
      shadow:"rgb(121, 205, 242)"
      
    },
    {
      id:10,
      name:"Bootstrap",
      icon:FaBootstrap,
      color:"#7818F7",
      size:50,
      shadow:"rgb(171, 118, 237)"
    },
    {
      id:11,
      name:"GSAP",
      icon:SiGreensock,
      color:"#8EC846",
      size:50,
      shadow:"rgb(181, 224, 125)"
    },
    {
      id:12,
      name:"framer",
      icon:TbBrandFramerMotion,
      color:"#EB09C9",
      size:50,
      shadow:"rgb(223, 138, 234)"
    },
    {
      id:13,
      name:"Supabase",
      icon:SiSupabase,
      color:"#44D192",
      size:50,
      shadow:"rgb(108, 221, 170)"
    },
    {
      id:14,
      name:"Firebase",
      icon:RiFirebaseFill,
      color:"#FFCE36",
      size:50,
      shadow:"rgb(239, 210, 143)"
    },
    {
      id:15,
      name:"Zod",
      icon:SiZod,
      color:"#2E5386",
      size:50,
      shadow:"rgb(120, 163, 219)"
    },
    {
      id:16,
      name:"Redux",
      icon:TbBrandRedux,
      color:"#7A50BE",
      size:50,
      shadow:"rgb(178, 152, 224)"
    },
  
  ]