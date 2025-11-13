import React from "react";
import Image from "next/image";
import { Service } from "./types";

export default function TalkToExpert({ data }: { data: Service }) {
  if (!data.image) return null;

  return (
    <div className="container p-6 mx-auto lg:flex flex-col lg:flex-row justify-between bg-dark rounded-lg shadow-lg">
      <div className="w-full mb-6 lg:mb-0 flex flex-col justify-between">
        <p className="text-xl lg:text-2xl font-semibold text-primary mb-4">
          {data.expertTitle}
        </p>
        <button className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-secondary transition-all w-44">
          Talk to Expert
        </button>
      </div>
      <div className="w-full flex lg:justify-end justify-center">
        <Image
          src={data.image}
          alt="Team Image"
          className="rounded-lg shadow-lg"
          height={300}
          width={300}
          priority
        />
      </div>
    </div>
  );
}
