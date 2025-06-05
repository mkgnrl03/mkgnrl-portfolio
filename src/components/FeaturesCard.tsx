"use client"

import Image from 'next/image';
import { useState } from 'react';


const FeaturesCard = () => {
const [isImageHovered, setImageHover] = useState<string | undefined>()

  const projects = [
    {
      name: "naminori-project",
      description: "[Client-Based] - E-learning Web Application",
      path: "/images/features/naminori/naminori-dashboard.webp",
      more_description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo temporibus libero eos laboriosam eum aliquam nostrum, animi voluptatibus magnam."
    },
    {
      name: "mpat-project",
      description: "[Client-Based] - Web Survey Application",
       more_description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo temporibus libero eos laboriosam eum aliquam nostrum, animi voluptatibus magnam.",
      path: "/images/features/mpat/dashboard.webp",
    },
    {
      name: "slack-bot-project",
      description: "[Internal] - Slack Room Reservation Bot",
      path: "/images/features/slack/room-modal.webp",
       more_description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo temporibus libero eos laboriosam eum aliquam nostrum, animi voluptatibus magnam."
    },
    {
      name: "aeromobile-project",
      description: "[Thesis] - React Native Application",
      path: "/images/features/aeromobile/aeromobile.webp",
      more_description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo temporibus libero eos laboriosam eum aliquam nostrum, animi voluptatibus magnam."
    }
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {
        projects.map((project) => (
          <div 
            key={project.name} 
            className={`
              relative overflow-hidden 
              w-full h-fit mx-auto bg-primary cursor-pointer
              rounded flex flex-col gap-3 items-center justify-center text-center
              transition duration-300 hover:scale-105
            `}
            onMouseOver={() => setImageHover(project.name)}
            onMouseLeave={() => setImageHover(undefined)}
          >
            <Image
              src={project.path}
              quality={100}
              width={500}
              height={500}
              alt={project.name}
              className={`w-full ${isImageHovered && ""}`}
            />
            <p className="font-bold tracking-wide">{project.description}</p>
            
{/* 
            {
              (isImageHovered && isImageHovered === project.name) &&
              <div className="absolute z-50 flex flex-col gap-6 items-center">
                 <MyButton 
                  text="Show more details."
                  type="solid"
                  className="px-6 py-2 hover:scale-none rounded-full w-fit"
                 />
                 <p className='text-white text-xs w-sm'>{project.more_description}</p>
              </div>
            } */}

          

          </div>
        ))
      }
      
    </div>
  );
}

export default FeaturesCard;
