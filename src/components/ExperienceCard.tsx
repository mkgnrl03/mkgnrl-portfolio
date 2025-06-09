"use client"

import { Experience } from "@/types";
import { formatDateTimeline } from "@/utils/formatDateTimeline";
import Link from "next/link";
import React from "react";

type ExperienceCardProp = {
  data: Experience;
};

const ExperienceCard = (props: ExperienceCardProp) => {
  const { data } = props;
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold mb-3">
        {formatDateTimeline(data.start, data.end)}
      </p>
      <div className="bg-secondary p-6 rounded shadow-md transition duration-300 cursor-grabbing hover:-translate-y-1  hover:shadow-2xl">
        <div className="flex flex-col gap-6 text-sm">
          <div className="flex flex-col gap-[2px]">
            <h2 className="font-semibold text-md">{data.title}</h2>
            <Link
              href={data.link}
              target="_blank"
              className="italic text-sm underline w-fit">
              {data.company}
            </Link>
            <p className="text-sm">{data.location}</p>
          </div>
          <div className="">
            <p className="">{data.description}</p>
          </div>
          <ul className="bg-gray-100 text-sm rounded-md p-5 border border-zinc-300 flex flex-col gap-2 list-disc pl-12">
            <p className="font-semibold text-md relative -left-6">Key Features</p>
            {data.key_features.map((feat, index) => <li key={index} className="">{feat}.</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
