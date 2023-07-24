import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import ThemeContext from '../src/ThemeContext';

const navList = ['About', 'Home', 'Projects'];

export default function NavBar({ nav, handleNav }) {
  // const [nav, setNav] = useState('Home');

  return (
    <div className=" h-25 grid-rows-5-2 grid  ">
      <motion.div
        className="relative m-auto   mt-2 flex h-[4.8rem] w-[22rem] shrink-0 justify-center overflow-hidden rounded-full bg-black opacity-[80%] focus:outline-none"
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 80 }}
      >
        {
          ////////////////////////Mapping element/////////////
        }
        {navList.map((el) => (
          <motion.span
            layout
            onClick={() => handleNav(el)}
            className={`relative z-[10] flex ${
              el !== 'Home' && 'w-[10rem] grow'
            }  h-full w-[7.5rem] cursor-pointer select-none flex-col items-center pt-6  font-sans text-lg font-thin text-white transition duration-[250ms]  md:hover:bg-[#ffffff2e] md:active:bg-[#ffffff2e] ${
              nav !== el && 'opacity-75'
            }`}
          >
            {el}
            {nav === el ? (
              <motion.div
                layout
                layoutId="nav"
                className="relative z-[60] m-auto mt-1 h-[1.2px]  w-6  bg-cyan-400  "
              />
            ) : (
              ''
            )}
          </motion.span>
        ))}
      </motion.div>

      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <div className="relative ml-auto mr-auto mt-3   flex w-[33%]  select-none ">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 80 }}
        className={`m-auto flex h-9 w-[4rem] items-center  shadow-md transition-colors ${
          theme === 'dark' ? 'justify-end bg-black' : 'justify-start bg-[#33a656]'
        } rounded-full  p-[0.3rem] opacity-75 `}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 800, damping: 80 }}
          exit={{}}
          className="relative mb-auto  h-7 w-7 rounded-full bg-white shadow-md"
        />
      </motion.div>
    </div>
  );
}
