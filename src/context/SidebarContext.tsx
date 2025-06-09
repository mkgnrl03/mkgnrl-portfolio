"use client"

import { createContext, useContext, useState } from "react"

type SidebarContextType = {
  isSidebarOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarStatus] = useState<boolean>(false);

  const open = () => setSidebarStatus(true)
  const close = () => setSidebarStatus(false)
  const toggle = () => setSidebarStatus(!isSidebarOpen)

  const getParentSideBarClass = () => {
    return isSidebarOpen
      ? "left-0 opacity-100 z-40"
      : "opacity-0 z-0"
  }

  const getSidebarClass = () => {
    return isSidebarOpen 
      ? "left-0"
      : "-left-full"
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, open, close, toggle }}>
      <aside className={`
          sm:hidden top-16 fixed w-full h-full bg-primary/50 backdrop-blur-sm transition-all duration-300
          flex items-start justify-start text-md font-semibold overflow-scroll no-scrollbar
        ${getParentSideBarClass()}
      `}
        onClick={toggle}
      >
        <div className={`
          text-primary bg-background w-[60vw] h-full py-12 pl-12
          absolute top-0 ${getSidebarClass()} transition-all duration-400
        `}>
          <nav className="flex flex-col items-start justify-start gap-6 ">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Connect</a>
          </nav>
         
        </div>
      </aside>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)

  if(!context) {
    throw new Error("useSidebar must be used within it's context.")
  }

  return context
}