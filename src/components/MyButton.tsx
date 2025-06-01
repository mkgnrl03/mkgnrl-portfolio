import React from 'react';


type MyButtonProp = {
  text?: string,
  type: "solid" | "outline" | "transparent",
  className?: string,
  children?: React.ReactNode
}

const MyButton = (prop: MyButtonProp) => {

  const getButtonTypeClass = () => {
    switch(prop.type){
      case "solid": 
        return "bg-foreground text-red-900"
      case "outline":
        return "bg-background/40 border border-gray-500"
      default:
        return ""
    }
  }

  return (
    <button className={`transition hover:scale-105 cursor-pointer rounded-lg text-sm ${getButtonTypeClass()} ${prop.className}`}>
      {
        prop.children
          ? prop.children
          : prop.text
      }
    </button>
  );
}

export default MyButton;
