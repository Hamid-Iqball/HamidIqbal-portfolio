import { IconType } from "react-icons";
import { DiJsBadge } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiCss3, SiHtml5, SiReactquery, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


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
      href: '#work',
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
      color:"#3A3A3A",
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
      id:9,
      name:"CSS3",
      icon:SiCss3,
      color:"#087CD1",
      size:40
    },
  
  ]