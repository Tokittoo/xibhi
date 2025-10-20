"use client";

import React from "react";
import Image from 'next/image'
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
 import { motion } from "motion/react";
 import { AnimationWrapper, childVariant } from "@/components/ui/animation-wrapper";
import { SiNasa, SiCisco, SiOyo, SiUnitedairlines, SiLenovo } from "react-icons/si";

export default function HallOfFame() {
  return (
    <section className="bg-background overflow-hidden py-8">
      <AnimationWrapper>
        {/* Heading matching Skills section style */}
        <motion.div variants={childVariant} className="mx-auto w-full max-w-7xl text-left my-4">
          <motion.h1 variants={childVariant} className='text-3xl md:text-4xl font-sans font-bold tracking-tight'>Hall of Fames</motion.h1>
        </motion.div>
        {/* Full-bleed wrapper to span the entire viewport width even inside centered layouts */}
        <motion.div variants={childVariant} className="relative mx-[calc(50%-50vw)] w-screen px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="relative w-full py-2">
            <InfiniteSlider speed={25}  gap={50}>  
              <div className="flex-none">
                <span aria-label="NASA Logo">
                  <SiNasa className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="CISCO Logo">
                  <SiCisco className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="OYO Logo">
                  <SiOyo className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="United Airlines Logo">
                  <SiUnitedairlines className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="Lenovo Logo">
                  <SiLenovo className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="Citi Bank Logo">
                  <Image
                    className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform"
                    src="/skills/citi.png"
                    alt="Citi Bank Logo"
                    height={56}
                    width={56}
                  />
                </span>
              </div>
             <div className="flex-none">
                <span aria-label="cognition ai Logo">
                  <Image
                    className="h-19 w-19 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform"
                    src="/skills/Cognition.png"
                    alt="cognition ai Logo"
                    height={108}
                    width={108}
                  />
                </span>
              </div>
              {/* duplicate set to ensure seamless tiling */}
              <div className="flex-none">
                <span aria-label="NASA Logo duplicate">
                  <SiNasa className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="CISCO Logo duplicate">
                  <SiCisco className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="OYO Logo duplicate">
                  <SiOyo className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="United Airlines Logo duplicate">
                  <SiUnitedairlines className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="Lenovo Logo duplicate">
                  <SiLenovo className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform" />
                </span>
              </div>
              <div className="flex-none">
                <span aria-label="Citi Bank Logo duplicate">
                  <Image
                    className="h-14 w-14 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform"
                    src="/skills/citi.png"
                    alt="Citi Bank Logo"
                    height={56}
                    width={56}
                  />
                </span>
              </div>
             <div className="flex-none">
                <span aria-label="cognition ai Logo Duplicate">
                  <Image
                    className="h-19 w-19 transition-transform duration-200 ease-out hover:scale-125 transform-gpu will-change-transform"
                    src="/skills/Cognition.png"
                    alt="cognition ai Logo Duplicate"
                    height={108}
                    width={108}
                  />
                </span>
              </div>
            </InfiniteSlider>

              <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur className="absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
              <ProgressiveBlur className="absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
            </div>
          </div>
        </motion.div>
      </AnimationWrapper>
    </section>
  );
}



