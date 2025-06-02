"use client"

import { X } from "lucide-react"
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

  const getSideBarClass = () => {
    return isSidebarOpen
      ? "top-0 right-0"
      : "-right-1000"
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, open, close, toggle }}>
      <aside className={`
          sm:hidden fixed w-full h-[100vh] bg-background/50 backdrop-blur-2xl z-50
          flex items-start justify-center text-lg font-semibold py-24 overflow-scroll no-scrollbar
        ${getSideBarClass()}
      `}>
        <nav className="flex flex-col items-center justify-center gap-6 ">
          <a href="#home" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#skills" onClick={close}>Skills</a>
          <a href="#projects" onClick={close}>Projects</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <button 
          className="absolute top-6 right-6 hover:cursor-pointer hover:scale-105"
          onClick={close}
        >
          <X 
            size={24}
          />
        </button>    
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