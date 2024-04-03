import React from "react";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const carouselImages = [
  { id: 1, url: hero1 },
  { id: 2, url: hero2 },
  { id: 3, url: hero3 },
  { id: 4, url: hero4 },
];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* Info */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          We're changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
          praesentium necessitatibus explicabo nulla obcaecati dignissimos
          adipisci! Illum et ipsum sint?
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary uppercase">our products</Link>
        </div>
        {/* Carousel */}
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((img) => {
          return (
            <div key={img.id} className="carousel-item">
              <img
                className="rounded-box h-full w-80 object-cover"
                src={img.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
