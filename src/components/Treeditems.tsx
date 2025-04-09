"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const cards = [
  {
    title: "myCover app",
    description: "The fastest and safest way to buy tickets for exclusive events.",
    image:
      "/1.png",
    link: "https://mycoverwebs.vercel.app",
  },
  {
    title: "Object Recognition",
    description: "Recognize objects in images with CoreML.",
    image:
      "/3.png",
    link: "https://www.youtube.com/watch?v=nJgFMIytBWI&t=4s",
  },
  {
    title: "Notes App",
    description: "A simple notes app built with SwiftUI.",
    image:
      "/2.png",
    link: "https://www.youtube.com/watch?v=ApJ4mwJWhMM&t=613s",
  },
];

export function Treeditems() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 section"
      style={{ backgroundColor: "#f1f7f9" }}
    >
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                See More
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
