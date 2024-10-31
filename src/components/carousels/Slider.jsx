"use client";

import { Carousel } from "flowbite-react";

export default function Slider({children,className}) {
  return (
    <div className={`${className}`}>
      <Carousel pauseOnHover indicators={false} slideInterval={3000} draggable={true}>
        {children}
      </Carousel>
    </div>
  );
}
