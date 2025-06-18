"use client"

import { Project } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type FeaturesCardProp = {
  projects: Project[]
}

const FeaturesCard = (props: FeaturesCardProp) => {

  const NUM_PROJECTS = props.projects.length - 1
  const [iteration, setIteration] = useState<number>(0)
  const [selected, setSelected] = useState<Project>(props.projects[iteration])


  useEffect(() => {
    setSelected(props.projects[iteration])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iteration])

  function handleNext() {
    if(iteration < NUM_PROJECTS) {
      setIteration(iteration + 1)
    }
    else {
      setIteration(0)
    }
  }

  function handlePrev() {
    if(iteration > 0) {
      setIteration(iteration - 1)
    }
    else {
      setIteration(NUM_PROJECTS)
    }
  }

  return (
    <div className="relative flex flex-col items-center gap-12">
      <div 
        className={`
          relative overflow-hidden 
          w-full  mx-auto bg-primary cursor-pointer
          rounded flex flex-col gap-3 items-center justify-center text-center
        `}
      > 
        <Image
          src={selected.path}
          width={500}
          height={500}
          alt={selected.name}
          className={`w-full md:w-[80vw] lg:w-[45vw] aspect-video bg-cover`}
        />
        <p className="font-semibold text-sm sm:text-md tracking-wide">{selected.description}</p>
      </div>

      <div 
        className={`flex items-center justify-center gap-3 ${NUM_PROJECTS < 2 && "hidden"}`}
      >
        <button 
          className="cursor-pointer text-background/70 transition hover:text-background hover:scale-105"
          onClick={handlePrev}
        >
          <ChevronLeft size={40}/>
        </button>

          <div className="flex gap-3">
            {
              props.projects.map((project, index) => 
                <div 
                  key={project.name}
                  className={`
                    transition-all cursor-pointer hover:scale-105 rounded opacity-50
                    ${project.name === selected.name && "opacity-100 scale-105"}
                  `}
                  onClick={() => setIteration(index)}
                >
                  <Image
                    src={project.path}
                    width={120}
                    height={60}
                    alt={project.name}
                    className="w-36 aspect-video rounded"
                  />
                </div>
              )
            }
          </div>

        <button 
          className="cursor-pointer text-background/70 transition hover:scale-105 hover:text-background"
          onClick={handleNext}
        >
            <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default FeaturesCard;
