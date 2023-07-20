import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../src/ThemeContext';

const projects = [
  { name: 'Web Adventure' },
  { name: 'Web Dead' },
  { name: 'Web Time' },
  { name: 'Web Who' },
  { name: 'Web Web' },
];

export default function Projects() {
  const [select, setSelect] = useState(null);
  const { theme } = useContext(ThemeContext);
  const slider = useRef();
  const x = useRef(null);

  useEffect(() => {
    slider.current.addEventListener('wheel', (e) => {
      const startTime = performance.now();
      const duration = 100;
      function updateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime <= duration) {
          x.current.scrollLeft += e.deltaY > 0 ? 10 : -10;
          requestAnimationFrame(updateScroll);
        }
      }
      requestAnimationFrame(updateScroll);
    });
  }, []);
  return (
    <div className=" absolute h-[100%] w-[100%] ">
      <motion.div
        initial={{ y: window.innerHeight }}
        animate={{ y: 0 }}
        exit={{ y: window.innerHeight }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 1200,
          damping: 120,
          delayChildren: 2,
        }}
        className="absolute mt-3 flex h-[90%] w-[100%] flex-col  bg-[#0000005e] align-top"
      >
        {/* <h1 className="text-black text-xl ml-auto mr-auto mt-6 mb-4 ">PROJECTS</h1> */}
        {/* <hr className="ml-auto mr-auto w-[20rem] border-black h-9"></hr> */}
        <motion.div
          ref={x}
          className={` relative h-[22rem] w-[100vw] overflow-x-scroll transition-all duration-[350ms] ${
            theme === 'dark' ? 'bg-[#0A2647]' : 'bg-cyan-500'
          }  pl-8 pr-8`}
        >
          <motion.ul
            ref={slider}
            // drag="x"
            // dragConstraints={{ left: -2200, right: 100 }}
            className=" flex w-[120rem] flex-nowrap space-x-16 justify-self-start  pt-10 drop-shadow-lg  transition-all "
          >
            {projects.map((project, index) => (
              <ImageContainer id={index} select={select} handleSelect={() => setSelect(index)} />
            ))}
          </motion.ul>
        </motion.div>

        {select !== null && (
          <motion.div
            layout
            key={select}
            transition={{ duration: 1, type: 'spring', stiffness: 1000, damping: 80 }}
            className="mt-10 h-[6rem] w-[26rem] self-center  overflow-hidden rounded-xl bg-[#000000d2] text-2xl drop-shadow-lg "
          >
            <motion.div
              transition={{ duration: 0.7, ease: [1, 0.0, 0.3, 1.0] }}
              initial={{ scaleX: 0, originX: 'left', opacity: 0.1 }}
              animate={{ scaleX: 1 }}
              className="absolute h-full w-full  rounded-xl bg-white"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative z-20 flex  h-full w-full items-center justify-center text-center text-2xl text-white"
            >
              {projects[select].name}
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function ImageContainer({ id, handleSelect, select }) {
  return (
    <motion.li
      layout
      transition={{ duration: 0.2 }}
      onClick={() => {
        handleSelect();
      }}
      className={
        id === select
          ? 'h-[16rem] shrink-0 basis-[24rem] rounded-3xl border-8 border-[#57C5B6] border-opacity-[0.5] bg-white transition-all duration-200  '
          : 'h-[16rem] shrink-0 basis-[24rem] rounded-3xl border-[#ffffff00] bg-white'
      }
    />
  );
}
