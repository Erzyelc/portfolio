/* eslint-disable no-self-compare */
/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
    styles?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className='group  relative -mr-4'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='wait'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: 'nowrap',
                }}
                className='absolute -left-5 -top-10 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-sky-50 px-4 py-2 text-xs shadow-xl dark:bg-black-200'
              >
                <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent ' />
                <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent ' />
                <div className='relative z-30 text-base font-bold  dark:text-white-900'>
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className='flex cursor-pointer items-center justify-center rounded-full  bg-sky-50  p-5 hover:bg-white-900 dark:bg-gray-800 hover:dark:bg-gray-700 md:h-[100px] md:w-[100px]'>
            <Image
              onMouseMove={handleMouseMove}
              height={30}
              width={30}
              src={item.image}
              alt={item.name}
              className='md:h-[50px] md:w-[50px]'
            />
          </div>
        </div>
      ))}
    </>
  );
};
