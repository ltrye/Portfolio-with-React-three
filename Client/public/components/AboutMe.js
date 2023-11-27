/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useContext } from 'react';
import { motion, useInView } from 'framer-motion';
import first from '../assets/web-coding.png';
import ThemeContext from '../src/ThemeContext';
// variants = {
//   leaf: {},
// };

export default function AboutMe() {
  const page = useRef();
  const { theme } = useContext(ThemeContext);
  const icon3 = useRef();
  const isInView = useInView(icon3);
  return (
    <motion.div
      ref={page}
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
      exit={{ y: window.innerHeight }}
      transition={{ duration: 1, type: 'spring', stiffness: 1200, damping: 120, delayChildren: 2 }}
      className="absolute mt-3 h-[90%] w-[100%]  bg-[#2245459d]  opacity-100 backdrop-blur-[2px] lg:w-[60%]"
    >
      <h1
        className={`sticky top-0 z-30 inline-block w-full ${
          theme === 'dark' ? 'bg-[#0000008b]' : 'bg-[#3A3845]'
        }  pb-5 pl-8 pr-8 pt-6 font-sans text-3xl font-light text-white drop-shadow-lg `}
      >
        ABOUT ME
      </h1>

      {/*SECTION 1 /////////////////////////////////////////////////////////////////////*/}
      <div className=" h-[100%] w-full overflow-scroll">
        <section className=" relative mt-[-5rem]  flex flex-col items-center justify-center gap-y-[-6rem]">
          <motion.img
            rel="preload"
            initial={{ opacity: 0, scale: 0.4, origin: 'bottom' }}
            whileInView={{ scale: 0.7, opacity: 1 }}
            transition={{ duration: 0.8, ease: [1, 0.0, 0.3, 1.0] }}
            className="scale-[0.7] "
            src={first}
          />

          <span className="relative ml-[2rem] mr-[2rem] block  space-y-6 text-xl font-thin  leading-[2rem] tracking-[0.03rem] text-white">
            {/* Welcome to my portfolio.
            <br /> My name is TRYE.
            <br /> */}
            🌳🍿🕊️🦊🐑
          </span>
        </section>
        {/*SECTION 2 /////////////////////////////////////////////////////////////////////*/}
        <section className=" relative mt-[6rem] flex flex-col  items-center ">
          <motion.svg
            className=" mt-[6rem] h-[20rem] w-[20rem]  drop-shadow-lg"
            initial={window.innerWidth < 789 ? { x: 0, scale: 1 } : { x: -100, scale: 1 }}
            transition={{ duration: 0.7, ease: [1, 0.0, 0.3, 1.0] }}
            whileInView={!window.innerWidth < 789 && { x: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 2000"
            id="web-development"
          >
            <path
              fill="#152b49"
              d="M1165 1760l-330 0c-9,0 -16,-8 -16,-17l0 -198c0,-9 7,-16 16,-16l330 0c9,0 16,7 16,16l0 198c0,9 -7,17 -16,17z"
            />
            <path
              fill="#1f3b62"
              d="M1800 1562l-1600 0c-30,0 -53,-24 -53,-53l0 -131 1706 0 0 131c0,29 -23,53 -53,53l0 0zm-1653 -1004l0 -82c0,-29 23,-53 53,-53l1600 0c30,0 53,24 53,53l0 82 -1706 0z"
            />
            <polygon fill="#3ddce0" points="147 1378 147 558 1853 558 1853 1378" />
            <path
              fill="#1f3b62"
              d="M1360 1760l-720 0c-9,0 -17,-8 -17,-17 0,-9 8,-17 17,-17l720 0c9,0 17,8 17,17 0,9 -8,17 -17,17z"
            />
            <path
              fill="#48c1e5"
              d="M443 1520c0,0 0,0 0,0 -27,0 -50,-22 -50,-50 0,-27 23,-50 50,-50 28,0 51,23 51,50 0,28 -23,50 -51,50z"
            />
            <path
              fill="#fdcf5f"
              d="M561 1520c0,0 0,0 0,0 -27,0 -50,-22 -50,-50 0,-27 23,-50 50,-50 28,0 51,23 51,50 0,28 -23,50 -51,50z"
            />
            <path
              fill="#fc6f58"
              d="M326 1520c0,0 0,0 0,0 -28,0 -51,-22 -51,-50 0,-27 23,-50 51,-50 27,0 50,23 50,50 0,28 -23,50 -50,50z"
            />
            <path
              fill="#5959ba"
              d="M1408 1014l-816 0c-30,0 -53,-23 -53,-53l0 -668c0,-29 23,-53 53,-53l816 0c30,0 53,24 53,53l0 668c0,30 -23,53 -53,53z"
            />
            <path
              fill="#fff"
              d="M962 877c-4,0 -8,0 -11,-2l-65 -22c-18,-6 -28,-26 -22,-44l8 -23c-5,-4 -9,-8 -14,-13l-22 11c-5,2 -10,3 -15,3 -13,0 -25,-7 -31,-19l-30 -62c-4,-8 -5,-17 -2,-26 3,-9 10,-16 18,-20l22 -11c-1,-6 -1,-12 -1,-19l-23 -8c-19,-6 -28,-26 -22,-44l22 -65c5,-14 18,-23 33,-23 4,0 8,1 12,2l23 8c4,-5 8,-10 12,-14l-10 -22c-5,-9 -5,-18 -2,-27 3,-9 9,-16 18,-20l61 -30c5,-2 10,-3 15,-3 14,0 26,7 32,19l10 22c7,-1 13,-1 19,-1l8 -23c5,-14 18,-23 33,-23 4,0 8,0 11,1l65 23c9,3 16,9 20,17 4,9 5,18 2,27l-8 23c5,4 9,8 14,13l22 -11c5,-2 10,-4 15,-4 13,0 25,8 31,20l30 62c9,17 1,38 -16,46l-22 11c1,6 1,12 1,19l23 8c9,3 16,9 20,17 4,9 5,18 2,27l-22 64c-5,14 -18,24 -33,24 -4,0 -8,-1 -12,-2l-23 -8c-4,5 -8,10 -12,14l10 22c5,9 5,18 2,27 -3,9 -9,16 -18,20l-61 30c-5,2 -10,3 -15,3 -14,0 -26,-8 -32,-19l-10 -22c-7,0 -13,1 -19,1l-8 23c-5,14 -18,23 -33,23z"
            />
            <path
              fill="#5959ba"
              d="M1000 769c-78,0 -142,-63 -142,-142 0,-78 64,-141 142,-141 78,0 142,63 142,141 0,79 -64,142 -142,142z"
            />
          </motion.svg>
          <span className=" ml-[3rem] mr-[3rem] mt-[3rem] inline-block  space-y-6 text-justify  text-base  font-thin text-white">
            {/* As a web development enthusiast, I am constantly seeking new challenges and
            opportunities to grow my skills. I believe that by combining my creativity with my
            technical expertise, I can create truly exceptional user experiences.
            <br />
            <br />
            Whether it's designing a stunning website, developing an intuitive user interface, or
            crafting engaging motion graphics, I am always striving to push the boundaries of what
            is possible.
            <br />
            <br />
            Skills:
            <br />
            <br />
            1. JavaScript (Node.js): Expert level in building scalable and efficient backend web
            applications using Node.js, Express, and other related frameworks.
            <br />
            <br />
            2. Python (AI and Data Analysis): Proficient in Python for AI development, machine
            learning, and data analysis. Skilled in utilizing libraries such as TensorFlow, PyTorch,
            and Scikit-learn for creating intelligent systems and deriving insights from data.
            <br />
            <br />
            3. Java (Android Development): Strong proficiency in Java for Android app development,
            creating intuitive and user-friendly mobile applications.
            <br />
            <br />
            4. Ruby on Rails: Skilled in developing web applications with Ruby on Rails, leveraging
            its convention-over-configuration principles for rapid development.
            <br />
            <br />
            5. TypeScript (Frontend Development): Advanced knowledge of TypeScript for frontend
            development, building scalable and maintainable web applications with React or Angular.
            <br />
            <br />
            6. Swift (iOS Development): Strong understanding of Swift for iOS app development,
            creating feature-rich and performant mobile applications for Apple devices.
            <br />
            <br />
            7. C++ (Game Development): Proficient in C++ for game development, using popular game
            engines like Unity or Unreal Engine to create interactive and immersive gaming
            experiences.
            <br />
            <br />
            8. C# (Unity Game Development): Experienced in C# for Unity game development,
            implementing game mechanics, and optimizing game performance.
            <br />
            <br />
            9. Java (LibGDX Game Development): Skilled in using Java with LibGDX framework for
            cross-platform game development, enabling deployment on multiple platforms.
            <br />
            <br />
            10. JavaScript (Game Development): Proficient in JavaScript game development, using
            frameworks like Phaser or Three.js to create browser-based games and interactive
            experiences. */}
            <br />
            {/* <p className="tracking-[0.03rem] leading-[1.7rem]">
          Browse through my projects and experience the magic of web development.
        </p> */}
          </span>
        </section>
        {/*SECTION 3 /////////////////////////////////////////////////////////////////////*/}
        <section className="relative mb-[10rem] mt-[6rem] flex h-[40rem] w-full flex-col content-center items-center justify-center ">
          <div>
            <motion.svg
              ref={icon3}
              xmlns="http://www.w3.org/2000/svg"
              className=" relative h-[20rem] w-[19rem] "
              viewBox="0 0 48 48"
              id="leaf"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : 'pathLength: 0'}
                stroke="#ffff"
                transition={{ type: 'ease: [1, 0.0, 0.3, 1.0]', duration: 3 }}
                fillOpacity={0}
                d="M24,42a1,1,0,0,0,1-1V37.76l4.12-4A15.77,15.77,0,0,0,31.63,14l-.29-.48H29.16V11L24,6l-5.12,5a15.85,15.85,0,0,0,0,22.88l4.12,4V41A1,1,0,0,0,24,42Zm-3.72-9.66a13.82,13.82,0,0,1,0-20L24,8.73l3.16,3.07v3.75h3.05a13.78,13.78,0,0,1-2.49,16.79L25,35V32.41l3.71-3.7a1,1,0,0,0-1.42-1.42L25,29.59V25.34a.92.92,0,0,0,.21-.13l3-3a1,1,0,0,0-1.42-1.42L25,22.59V15a1,1,0,0,0-2,0v3.59l-.79-.8a1,1,0,0,0-1.42,1.42l2,2a.92.92,0,0,0,.21.13v5.25l-2.79-2.8a1,1,0,0,0-1.42,1.42l4,4a.92.92,0,0,0,.21.13V35Z"
                data-name="Your Icons"
              />
            </motion.svg>
          </div>
          <span className="text-md relative ml-[3rem] mr-[3rem]  inline-block space-y-6 text-justify font-thin  tracking-[0.05rem] text-white">
            {/* I invite you to explore my portfolio and get a glimpse into my world of web development. */}
            <br />
            Thank you for visiting and I look forward to connecting with you!
          </span>
        </section>
      </div>
    </motion.div>
  );
}
