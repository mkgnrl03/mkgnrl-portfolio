import { Skill } from '@/types';
import React from 'react';
import Image from 'next/image'
 

type SkillCardProp = {
  skill: Skill
}

const SkillCard = (prop: SkillCardProp) => {
  return (
    <div className="
      bg-secondary shadow-md text-primary rounded flex flex-col gap-3 items-center justify-center p-8
    ">
      <Image 
        src={prop.skill.iconLink}
        width={100}
        height={100}
        alt={prop.skill.name}
        className="w-full"
      />
      {prop.skill.name}
    </div>
  );
}

export default SkillCard;
