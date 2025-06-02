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
        return "bg-primary text-background"
      case "outline":
        return "bg-primary/5 text-foreground backdrop-blur-xl border border-primary-500"
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
