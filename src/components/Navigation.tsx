
"use client"

import { useSidebar } from "@/context/SidebarContext";

import React from 'react';

const Navigation = () => {

  const { toggle, isSidebarOpen } = useSidebar()

  const getBurgerClass = () => {
    return isSidebarOpen
        ? `
           w-0
           before:-translate-y-1/2 before:rotate-45 before:origin-left
           after:-translate-y-1/2 after:-rotate-45 after:origin-left
          `
        : `
            w-3
            before:translate-y-0 before:rotate-0 before:origin-left
            after:translate-y-0 after:rotate-0 after:origin-left
          `
    }
  
  return (
    <>
      <button className="sm:hidden relative h-4 w-5 cursor-pointer" onClick={() => toggle() }>

        <div className={`
            transition-all h-[2px] rounded-full bg-primary duration-300
            before:content-[''] before:rounded-full before:absolute before:top-0 before:left-0 before:w-5 before:h-[2px] before:bg-primary before:transition-transform before:duration-300
            after:content-[''] after:rounded-full after:absolute after:bottom-0 after:left-0 after:w-5 after:h-[2px] after:bg-primary after:transition-transform after:duration-300
            
            ${getBurgerClass()}
          `}
        />
      </button>
    </>
  );
}

export default Navigation;
