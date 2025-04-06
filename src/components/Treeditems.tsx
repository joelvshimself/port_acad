"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const cards = [
  {
    title: "myCover app",
    description: "Hover over this card to unleash the power of CSS perspective",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://twitter.com/mannupaaji",
  },
  {
    title: "Object Recognition",
    description: "Recognize objects in images with CoreML.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2560&q=80&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=nJgFMIytBWI&t=4s",
  },
  {
    title: "Notes App",
    description: "A simple notes app built with SwiftUI.",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=2560&q=80&auto=format&fit=crop",
    link: "https://www.youtube.com/watch?v=ApJ4mwJWhMM&t=613s",
  },
];

export function Treeditems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
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
