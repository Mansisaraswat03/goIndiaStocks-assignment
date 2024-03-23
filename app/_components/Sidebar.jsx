"use client";
import { useState } from 'react';
import {ArrowRight,UserRound,BellDot,FileText} from 'lucide-react';
import { sideMenu } from '../data/data';

const Sidebar = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [color,setColor] = useState(null);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    data(!isOpen);
  };
  const handleSetColor=(item)=>{
    setColor(item);
  }

  return (
    <div className="fixed top-0 h-screen flex items-center bg-white">
    {isOpen && (
      <div className="w-60 bg-purple-800 h-full lg:w-80 text-white p-4 left-0">
       <div className='flex justify-around py-4'>
       <UserRound />
       <p>Hello, User</p>
       <BellDot />
       </div><hr/>
       <ul className='py-6'>
       {sideMenu.map((item)=>(
        <li className={`flex gap-2 py-2 hover:bg-white hover:text-black ${color===item ? "text-black bg-white" : ""}`} onClick={()=>handleSetColor(item)}><FileText /> {item.name}</li>
       ))}
       </ul>
      </div>
    )}
    <div className="sticky w-6 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-4 rounded-r-lg cursor-pointer">
      <div onClick={toggleOpen} className='h-12 w-4'><ArrowRight className='mt-4 mr-2'/></div>
    </div>
  </div>
    
  );
};

export default Sidebar;

