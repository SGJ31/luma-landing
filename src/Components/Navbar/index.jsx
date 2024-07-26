import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { SparklesIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid" 

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);

      const formatTime = (date) => {
        const hours = date.getHours();
        const amPm = hours < 12 ? "AM" : "PM";
        const formattedHours = hours % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${formattedHours}:${minutes} ${amPm}`;
      };
    
      const formatTimeZone = () => {
        return "GMT-5"; 
      };

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center'>
                <li className='font-semibold text-lg'>
                    <div>
                        <NavLink to='/'>                      
                            <SparklesIcon className="w-6 h-6 text-slate-300"/>
                        </NavLink>
                    </div>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className="text-white/60 text-xs font-semibold">
                {formatTime(currentTime)} {formatTimeZone()}
                </li>
                <li  className='font-semibold text-white/60'>
                    <div className="flex items-center">
                        Explore Events
                        <ArrowUpRightIcon className="w-3 h-3 ml-2"/>  
                    </div>                   
                </li>
                <li className='bg-zinc-700 font-bold text-white/60 py-1 px-3 rounded-full'>
                    <NavLink  
                        to='/sign-in'
                    >                       
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar