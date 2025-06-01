import { Skill } from '@/types';
import React from 'react';
import Image from 'next/image'
 

type SkillCardProp = {
  skill: Skill
}

const SkillCard = (prop: SkillCardProp) => {
  return (
    <div className="
      bg-background rounded flex flex-col gap-3 items-center justify-center
      bg-linear-to-br from-[#192145] to-[#210E17] p-6
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
