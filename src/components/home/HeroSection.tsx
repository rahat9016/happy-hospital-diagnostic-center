"use client"
import image from "@/public/heroImages/heroImage1.png";
import image2 from "@/public/heroImages/heroImage2.jpg";
import image3 from "@/public/heroImages/heroImage3.jpg";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: image,
    title: "Your Health, Our Priority",
    subtitle:
      "Providing trusted healthcare services with advanced technology, experienced doctors, and compassionate care for you and your family",
  },
  {
    image: image2,
    title: "Advanced Medical Care",
    subtitle:
      "Modern diagnostics, expert physicians, and patient-first treatment under one roof",
  },
  {
    image: image3,
    title: "Care You Can Trust",
    subtitle:
      "Committed to excellence in healthcare for every patient, every day",
  },
];
export default function HeroSection() {
      const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[75vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <Image
          key={index}
          src={slide.image}
          alt={slide.title}
          fill
          priority={index === 0}
          className={clsx(
            "object-cover transition-opacity duration-1000",
            active === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold max-w-4xl">
          Your Health, Our Priority
        </h1>

        <p className="mt-6 max-w-3xl text-base md:text-lg text-white/90">
          Providing trusted healthcare services with advanced technology, experienced doctors, and compassionate care for you and your family
        </p>

        {/* Action Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 bg-white rounded-xl shadow-xl overflow-hidden max-w-5xl w-full">
          {/* <HeroAction
            title="Book an Appointment"
            desc="Book your appointment online"
            icon="👤"
          />
          <HeroAction
            title="Online Report"
            desc="Access your reports anytime"
            icon="📄"
          />
          <HeroAction
            title="Patient & Visitor Guide"
            desc="Find everything you need to know"
            icon="ℹ️"
          /> */}
        </div>
      </div>
    </div>
  )
}
