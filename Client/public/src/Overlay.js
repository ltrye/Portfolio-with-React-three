import React, { useRef, useState, useCallback } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { GiThreeLeaves } from 'react-icons/gi';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import NavBar from '../components/NavBar';
import MusicBox from '../components/MusicBox';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
//Icons
//

//PROXY
import { state } from './CamChange';

export default function Overlay() {
  const [nav, setNav] = useState('Home');
  const changeNav = useCallback((val) => {
    state.nav = val;
    setNav(val);
  }, []);

  return (
    <div>
      <NavBar nav={nav} handleNav={changeNav} />
      <AnimatePresence>{nav === 'About' ? <AboutMe /> : ''}</AnimatePresence>
      <AnimatePresence>{nav === 'Projects' ? <Projects /> : ''}</AnimatePresence>
      <MusicBox />
      <Contact />
    </div>
  );
}

function Contact() {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0% 60% 0% 0% round 50px)' }}
      whileHover={{ clipPath: 'inset(0% 0% 0% 0% round 50px ' }}
      className=" absolute bottom-4 ml-5 flex h-[2.7rem] w-[18rem]  items-center justify-start rounded-full bg-black pl-4   text-white"
    >
      <span className=" relative  inline-block ">Contact</span>
      <GiThreeLeaves className="mb-1 ml-3 h-6 w-6 " />
      <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ltrha/" b>
        <AiFillLinkedin className="ml-4 h-7 w-7 transition-all hover:scale-125" />
      </a>
      <a rel="noreferrer" target="_blank" href="https://github.com/ltrye">
        <AiFillGithub className="ml-4 h-7 w-7 transition-all hover:scale-125" />
      </a>
      <a rel="noreferrer" target="_blank" href="https://www.facebook.com/trungha.le.54/">
        <BsFacebook className="ml-4 h-6 w-6 transition-all hover:scale-125" />
      </a>
      <a rel="noreferrer" target="_blank" href="mailto:letrungha2004@gmail.com">
        <AiOutlineMail className="ml-4 h-7 w-7 transition-all hover:scale-125" />
      </a>
    </motion.div>
  );
}
