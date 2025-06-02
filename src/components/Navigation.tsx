
"use client"

import { useSidebar } from "@/context/SidebarContext";
import { AlignRight } from "lucide-react";


import React from 'react';

const Navigation = () => {

  const { toggle } = useSidebar()
  
  return (
    <>
      <button className="sm:hidden" onClick={() => toggle() }>
        <AlignRight 
          size={18}
          className="text-primary cursor-pointer transition"
        />
      </button>
    </>
  );
}

export default Navigation;
